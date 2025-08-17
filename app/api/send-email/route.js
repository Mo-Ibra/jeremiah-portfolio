import { Client } from "@notionhq/client";
import nodemailer from "nodemailer";

// Notion client
const notion = new Client({ auth: process.env.NOTION_KEY });

export async function POST(req) {
  try {
    const body = await req.json();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Growth Quiz" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Growth Strategy Quiz Submission",
      html: `
        <h2>New Growth Quiz Submission</h2>
        <p><b>Name:</b> ${body.fullName}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Platform:</b> ${body.platform}</p>
        <p><b>Niche:</b> ${body.niche}</p>
        <p><b>Website:</b> ${body.website}</p>
        <p><b>Ad Spend:</b> $${body.adSpend}</p>
        <p><b>CTR:</b> ${body.ctr}%</p>
        <p><b>Conversion Rate:</b> ${body.conversionRate}%</p>
      `,
    });

    // Insert data into Notion
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        FullName: {
          title: [{ text: { content: body.fullName } }],
        },
        Email: {
          email: body.email,
        },
        Platform: {
          rich_text: [{ text: { content: body.platform } }],
        },
        Niche: {
          rich_text: [{ text: { content: body.niche } }],
        },
        Website: {
          url: body.website,
        },
        AdSpend: {
          number: body.adSpend,
        },
        CTR: {
          number: body.ctr,
        },
        ConversionRate: {
          number: body.conversionRate,
        },
      },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
