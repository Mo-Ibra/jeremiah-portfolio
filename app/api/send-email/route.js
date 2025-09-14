import { Client } from "@notionhq/client";

// Notion client
const notion = new Client({ auth: process.env.NOTION_KEY });

export async function POST(req) {
  try {
    const body = await req.json();

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
