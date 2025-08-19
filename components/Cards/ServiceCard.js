import Image from "next/image";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, image }) => {
  return (
    <motion.div
      className="service-card"
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
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
    </motion.div>
  );
};

export default ServiceCard;
