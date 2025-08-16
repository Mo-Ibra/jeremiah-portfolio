import Image from "next/image";

const VideoReelCard = ({
  aspectRatio = "9/16",
  videoId,
  views,
  platform = "TikTok",
  hasTestimonial = false,
  testimonialText = "",
  testimonialImageSrc = "1.jpg",
  authorName = "Jeremiah Smith",
  authorRole = "CEO, Company Name",
}) => {
  return (
    <div className="reel-card">
      <div className="reel-wrapper" style={{ aspectRatio: aspectRatio }}>
        <div
          className={`wistia_embed wistia_async_${videoId}`}
          style={{ height: "100%", width: "100%" }}
        ></div>

        <div className="reel-overlay">
          <div className="reel-info">
            <span className="reel-metric">{views} views</span>
            <span className="reel-platform">{platform}</span>
          </div>
        </div>
      </div>

      {hasTestimonial && (
        <div className="reel-testimonial">
          <p>
            {testimonialText}
          </p>
          <div className="reel-testimonial-author">
            <Image
              src={`/images/testimonials/${testimonialImageSrc}`}
              alt="Testimonial Author"
              width={60}
              height={60}
              className="author-image"
            />
            <div className="author-info">
              <p className="author-name">{authorName}</p>
              <p className="author-title">{authorRole}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoReelCard;