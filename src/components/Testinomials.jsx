import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Ribbon } from "lucide-react";

const testimonials = [
  {
    name: "Salman Hameed.",
    text: "“Working with Apexion felt like working with a team that truly cared.They took time to understand what we needed and brought our ideas to life with clarity and creativity.The process was smooth, the communication was great, and the end result? Even better than we expected. Grateful for the collaboration!”",
    image: "./testimonial1.jpg",
  },
  {
    name: "M.Waseem Akram.",
    text: "“Big thanks to the team at  Apexion.  They really understood what I needed and brought my website idea to life better than I imagined. The process was smooth, the team stayed in touch throughout, and the final result was spot on. Super happy with the outcome..”",
    image: "./testimonial2.jpg",
  },
   {
    name: "M.Waseem Akram.",
    text: "“Big thanks to the team at  Apexion.  They really understood what I needed and brought my website idea to life better than I imagined. The process was smooth, the team stayed in touch throughout, and the final result was spot on. Super happy with the outcome..”",
    image: "./testimonial2.jpg",
  },
  
];

const Testimonials = () => {
  return (
    <section
      className="bg-black text-white py-24 px-6 md:px-16 lg:px-28"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 60, 0, 0.15), rgba(0, 0, 0, 0.85)), url('line-vector.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center text-[12px] mb-10 gap-2">
          <Ribbon className="text-blue-800"/>
          <p>Hear It Straight From Our Clients</p>
        </div>

        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-[#0f1a75]" />
            <h2 className="text-4xl md:text-5xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#0f1a75] to-[var(--light)]">
              What People Are Saying
            </h2>
          </div>
          <p className="text-gray-400 text-lg font-inter ms-16">
            Real voices. Real impact. Real transformation.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={500}
          loop={true}
          allowTouchMove={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl text-left relative hover:scale-[1.02] transition-transform duration-300"
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <FaQuoteLeft className="text-[#0f1a75] text-3xl mb-4 opacity-80" />
                <p className="text-gray-100 text-lg leading-relaxed font-inter mb-6 italic">
                  {item.text}
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#0f1a75]"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-lg font-poppins">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
