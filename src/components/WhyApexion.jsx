import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaChartLine,
  FaCubes,
  FaCloudUploadAlt,
} from "react-icons/fa";

const WhyApexion = () => {
  const features = [
    {
      icon: <FaMicrochip className="text-[#0f1a75] text-4xl mb-4" />,
      title: "AI Innovation",
      desc: "Empowering businesses through next-gen artificial intelligence and smart automation for future-ready growth.",
    },
    {
      icon: <FaChartLine className="text-[#0f1a75] text-4xl mb-4" />,
      title: "Data Intelligence",
      desc: "Turning data into strategy — delivering deep insights to drive precision, performance, and informed decisions.",
    },
    {
      icon: <FaCubes className="text-[#0f1a75] text-4xl mb-4" />,
      title: "Digital Architecture",
      desc: "Designing intelligent digital ecosystems that combine creativity, scalability, and seamless functionality.",
    },
    {
      icon: <FaCloudUploadAlt className="text-[#0f1a75] text-4xl mb-4" />,
      title: "Cloud Transformation",
      desc: "Deploying secure, agile, and scalable cloud infrastructures to power innovation and operational efficiency.",
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-20 px-6 sm:px-10 md:px-20">
      <motion.div
        className="mb-12 sm:mb-16 text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <div className="w-10 sm:w-12 h-[2px] bg-[#0f1a75]" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#0f1a75] to-black">
            Why Apexion?
          </h2>
        </div>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg font-inter max-w-2xl">
          We redefine innovation through intelligent architecture, AI-driven design, and sustainable digital transformation.
          Apexion builds technology that’s future-ready, impactful, and beautifully engineered.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mt-8 sm:mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

  );
};

export default WhyApexion;
