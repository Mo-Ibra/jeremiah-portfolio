const Services = () => {
  return (
    <div className="services">
      <h2>My Services</h2>
      <div className="services-cards">
        <div className="service-card">
          <h3>Service 1</h3>
          <p>
            Placeholder text about the service offered. This could be your main
            service offering or a key area of expertise.
          </p>
          <img src="https://via.placeholder.com/300x200" alt="Service Image" />
        </div>
        <div className="service-card">
          <h3>Service 2</h3>
          <p>
            Placeholder text about the service offered. This could be another
            service you provide to clients.
          </p>
          <img src="https://via.placeholder.com/300x200" alt="Service Image" />
        </div>
        <div className="service-card">
          <h3>Service 3</h3>
          <p>
            Placeholder text about the service offered. A third area of focus or
            a unique value proposition.
          </p>
          <img src="https://via.placeholder.com/300x200" alt="Service Image" />
        </div>
      </div>
    </div>
  );
};

export default Services;