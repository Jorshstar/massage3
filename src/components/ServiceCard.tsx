import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  name: string;
  description: string;
  image: string;
  bookingLink: string;
  isReversed?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name = "Service Name",
  description = "This is a description of the service. It provides details about what the service entails and its benefits.",
  image = "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
  bookingLink = "#contact",
  isReversed = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} bg-white rounded-xl overflow-hidden shadow-lg mb-8`}
    >
      <div className="w-full md:w-2/5 h-64 md:h-auto relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-[#9d174d] font-serif">
            {name}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        </div>
        <motion.a
          href={bookingLink}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block self-start px-6 py-3 bg-[#9d174d] text-white rounded-md hover:bg-[#831843] transition-all duration-300 shadow-md hover:scale-105"
        >
          Schedule Appointment
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
