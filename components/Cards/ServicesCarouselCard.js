import { ChevronLeft, ChevronRight } from "lucide-react";

const ServicesCarouselCard = ({ serviceIndex, service, currentSlides, prevSlide, nextSlide }) => {
  return (
    <div key={serviceIndex} className="service-card">
      <div>
        <div>
          <h3>{service.title}</h3>

          <p>{service.description}</p>

          <div className="image-container">
            <div className="image-wrapper">
              <img
                src={
                  service.imagesCarousel[currentSlides[serviceIndex]].image ||
                  "/placeholder.svg"
                }
                alt={service.imagesCarousel[currentSlides[serviceIndex]].alt}
              />
            </div>

            {/* Carousel Navigation */}
            <div className="navigation">
              <button
                className="nav-buttons"
                onClick={() => prevSlide(serviceIndex)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                }}
              >
                <ChevronLeft size={16} />
              </button>

              <button
                className="nav-buttons"
                onClick={() => nextSlide(serviceIndex)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="indicators">
              {service.imagesCarousel.map((_, itemIndex) => (
                <div
                  key={itemIndex}
                  className="indicator"
                  style={{
                    backgroundColor:
                      currentSlides[serviceIndex] === itemIndex
                        ? "white"
                        : "rgba(255, 255, 255, 0.5)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarouselCard;