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
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "b606gkduct",
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
    videoId: "vb44bp1fb5",
    views: "4.1M",
    platform: "Instagram",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
];
