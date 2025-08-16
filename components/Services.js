import Image from "next/image";

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
            <Image
              src="/images/services-2/1.png"
              alt="Service Image"
              width={600}
              height={400}
            />
          </div>
          <div className="service-card">
            <h3>Studio Content</h3>
            <p>
              High production content that will WOW your customers and ELEV8TE
              your brand.
            </p>
            <Image
              src="/images/services-2/2.jpg"
              alt="Service Image"
              width={600}
              height={400}
            />
          </div>
          <div className="service-card">
            <h3>AI Generated Content</h3>
            <p>
              Harnessing the power of AI, we generate hyper-realistic content
              that turns ordinary content into mind-blowing CR8TIVE.
            </p>
            <Image
              src="/images/services-2/3.jpg"
              alt="Service Image"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
