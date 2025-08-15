const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            <span className="title-word">My</span>
            <span className="title-word gradient-text">Services</span>
          </h2>
        </div>
        <div className="services-cards">
          <div className="service-card">
            <h3>User Generated Content</h3>
            <p>
              Product seeding campaigns to collect authentic content & find
              brand ambassadors that never stop CR8TING. ‹
            </p>
            <img
              src="/images/services/3.jpg"
              alt="Service Image"
              
            />
          </div>
          <div className="service-card">
            <h3>Studio Content</h3>
            <p>
              High production content that will WOW your customers and ELEV8TE
              your brand.
            </p>
            <img
              src="/images/services/2.jpg"
              alt="Service Image"
            />
          </div>
          <div className="service-card">
            <h3>AI Generated Content</h3>
            <p>
              Harnessing the power of AI, we generate hyper-realistic content
              that turns ordinary content into mind-blowing CR8TIVE.
            </p>
            <img
              src="/images/services/1.jpg"
              alt="Service Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
