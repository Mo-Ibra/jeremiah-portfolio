import Image from "next/image";

const PortfolioReelCard = ({
  aspectRatio = "9/16",
  videoId,
  views,
  platform,
  hasTestimonial = false,
  testimonialText = "",
  testimonialImageSrc = "1.jpg",
  authorName = "Jeremiah Smith",
  authorRole = "CEO, Company Name",
}) => {
  return (
    <div className="portfolio-reel-card">
      <div
        className="portfolio-reel-wrapper"
        style={{ aspectRatio: aspectRatio }}
      >
        <div
          className={`wistia_embed wistia_async_${videoId}`}
          style={{ height: "100%", width: "100%" }}
        ></div>

        <div className="portfolio-overlay">
          <div className="portfolio-info">
            <span className="portfolio-metric">{views} views</span>
            <span className="portfolio-client">{platform}</span>
          </div>
        </div>
      </div>

      {hasTestimonial && (
        <div className="portfolio-testimonial">
          <p>
            {testimonialText}
          </p>
          <div className="portfolio-testimonial-author">
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

export default PortfolioReelCard;