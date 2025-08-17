/**
 * 📌 Reels Data
 *
 * This file contains the list of reels that will appear in the website.
 *
 * 👉 How to use:
 * - Each reel is one object inside the `reels` array below.
 * - To add a new reel → copy one object, paste it below, and update the values.
 * - To remove a reel → just delete the object from the list.
 *
 * ⚠️ Important:
 * - Do not remove `aspectRatio`, `videoId`, `views`, or `platform` keys (they are required).
 * - If there is no testimonial → set `hasTestimonial: false` and leave the testimonial fields as `null`.
 * - If there is a testimonial → set `hasTestimonial: true` and fill in the testimonial fields.
 * - Images should be placed in `/public/images/testimonials/`.
 * - The `videoId` comes from Wistia (ask developer if unsure).
 *
 * Example of filling testimonial:
 * {
 *   aspectRatio: "9/16",
 *   videoId: "example123",
 *   views: "1.2M",
 *   platform: "TikTok",
 *   hasTestimonial: true,
 *   testimonialText: "This was an amazing experience! I'm so happy.",
 *   testimonialImageSrc: "1.jpg",   // must match the file name in /public/images/testimonials/
 *   authorName: "John Doe",
 *   authorRole: "CEO, Example Inc.",
 * }
 */
export const videoReels = [
  {
    aspectRatio: "9/16",
    videoId: "lbokfo5iv3", // Wistia video ID
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true, // true = show testimonial section, false = hide it
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "1.jpg", // Name of testimonial image in /public/images/testimonials/
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "69qiuv07hz",
    views: "1.8M",
    platform: "Instagram",
    hasTestimonial: false, // No testimonial → leave these as null
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "ktw4hsumt8",
    views: "3.5M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "n3q3weig8v",
    views: "925K",
    platform: "YouTube Shorts",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "2.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "1ku3mu07k8",
    views: "1.2M",
    platform: "Facebook",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "dorz4lqu14",
    views: "4.1M",
    platform: "Instagram",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "3.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "glq2nisk1j",
    views: "4.1M",
    platform: "Instagram",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "4.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "0l19efg1jt",
    views: "4.1M",
    platform: "Instagram",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
];

/**
 * 📌 Portfolio Reels Data
 *
 * 👉 How to use:
 * - Each reel is one object inside the `portfolioReels` array below.
 * - To add a new reel → copy one object, paste it below, and update the values.
 * - To remove a reel → just delete the object from the list.
 *
 * ⚠️ Important:
 * - `aspectRatio`: Use "9/16" for vertical videos, "1/1" for square, etc.
 * - `videoId`: Wistia video ID (ask developer if unsure).
 * - `views`: Text string for views, e.g. "2.3M".
 * - `platform`: The client/platform name (TikTok, Instagram, etc.).
 * - If there is no testimonial → set `hasTestimonial: false` and leave testimonial fields as `null`.
 * - Images should be placed in `/public/images/testimonials/`.
 */

export const portfolioReels = [
  {
    aspectRatio: "9/16",
    videoId: "s3pthor4vn",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "1.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "dkzw4n1wr0",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "2.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "asoftd14pu",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "1iu0jtd817",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "axpdql1sfx",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "idyc2rfkjp",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "2exlvz5s5n",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "3.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "sbbrj9d2ag",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "4.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "f4pg22t46p",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "5.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "urul1qdxg0",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "6.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "vb44bp1fb5",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "5j96facrfq",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "b606gkduct",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "shz4x8pyt5",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "7.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "fx0tr3a1h9",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "dzwspp5lfe",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "8.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
];

/**
 * 🔹 How to edit:
 * Each service is stored as an object { title, description, image }.
 * To add a new service, copy one of the objects below and change its values.
 */

export const servicesData = [
  {
    title: "User Generated Content",
    description:
      "Product seeding campaigns to collect authentic content & find brand ambassadors that never stop CR8TING.",
    image: "/images/services-2/1.png",
  },
  {
    title: "Studio Content",
    description:
      "High production content that will WOW your customers and ELEV8TE your brand, all in one place.",
    image: "/images/services-2/2.jpg",
  },
  {
    title: "AI Generated Content",
    description:
      "Harnessing the power of AI, we generate hyper-realistic content that turns ordinary content into mind-blowing CR8TIVE.",
    image: "/images/services-2/3.jpg",
  },
];

/**
 * ===============================
 *   About Section Static Content
 * ===============================
 *
 * This file contains text and image data
 * for the "About" section of the website.
 *
 * 👉 Non-technical user guide:
 * - To change the NAME → update the "name" value
 * - To change the ROLE → update the "role" value
 * - To change the DESCRIPTION → edit the text in "description"
 * - To change the PHOTO → replace the file in /public/images
 *   and update the "image" path
 *
 * ⚠️ Important:
 * - Keep the text inside quotes (" ")
 * - Do not remove the commas at the end of each line
 * - The image path should start with "/images/"
 */

export const aboutData = {
  name: "Jeremiah.",
  role: "Creative Performance Architect",
  description:
    "I help brands grow by leveraging data-driven insights and creative strategies. From corporate strategist to leading innovative campaigns, I thrive in transforming brands.",
  image: "/images/me.png",
};

/**
 * ===============================
 *   FAQ Section Static Content
 * ===============================
 *
 * This file contains the list of Questions & Answers
 * for the "FAQ" section of the website.
 *
 * 👉 Non-technical user guide:
 * - To change a QUESTION → edit the "question" text
 * - To change an ANSWER → edit the "answer" text
 * - To ADD a new FAQ → copy one of the objects below
 *   (everything inside { ... }) and paste it above the last one,
 *   then change the question and answer.
 *
 * ⚠️ Important:
 * - Keep the text inside quotes (" ")
 * - Do not remove the commas between each item
 * - Make sure each FAQ has BOTH a "question" and an "answer"
 */

export const faqData = [
  {
    question: "Do you cover any additional advertising services?",
    answer:
      "Absolutely. You may want to consider additional add-ons such as scriptwriting and briefing. As our collaboration evolves, I may expand services to support more of your digital growth.",
  },
  {
    question: "What makes you different?",
    answer:
      "I'm proud of my core principles that set me apart in the creative marketing landscape. My approach is rooted in structured storytelling, performance-driven thinking, and authentic partnerships.",
  },
  {
    question: "How do we know your ads will work for our brand?",
    answer:
      "My process is deeply collaborative. I research your brand and audience, then build high-converting ad content backed by performance insights and consistent iteration.",
  },
  {
    question: "What does your pricing look like?",
    answer:
      "Pricing is tailored based on your goals and scope. I don't do generic packages—every quote is custom, clear, and value-focused with zero hidden fees.",
  },
  {
    question: "Why not hire a full-time editor or agency?",
    answer:
      "Great question. Hiring full-time costs $60k+ annually with overhead—and often, underutilization. Agencies? Add markup, bureaucracy, and delays. I deliver fast, strategic creative when and how you need it.",
  },
];
