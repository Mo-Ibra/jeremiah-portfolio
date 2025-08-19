import Image from "next/image";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div
      className="service-card"
    >
      <div className="service-card-content">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
