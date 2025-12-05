import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Ribbon } from "lucide-react";

const faqs = [
  {
    question: "What is Apexion?",
    answer:
      "Apexion is a next-generation architectural technology agency. We redefine innovation through intelligent architecture, AI-driven design, and sustainable digital transformation, delivering solutions that are future-ready and impactful.",
  },
  {
    question: "What services does Apexion offer?",
    answer:
      "We provide a range of services including AI-assisted architectural design, smart building solutions, sustainable planning, digital transformation consulting, and technology integration for enterprises.",
  },
  {
    question: "How does Apexion use AI in architecture?",
    answer:
      "Our AI-driven design tools analyze data, optimize building performance, and generate innovative design options. This allows us to create smarter, sustainable, and highly efficient architectural solutions.",
  },
  {
    question: "Who can benefit from Apexion’s services?",
    answer:
      "Our services cater to architects, developers, corporate clients, and governments looking to leverage technology and innovation for smarter, sustainable, and future-ready building solutions.",
  },
  {
    question: "Is Apexion focused on sustainability?",
    answer:
      "Absolutely. Sustainability is at the core of our design philosophy. We integrate energy-efficient solutions, eco-friendly materials, and data-driven planning to reduce environmental impact.",
  },
  {
    question: "How can I collaborate with Apexion?",
    answer:
      "You can collaborate with us by reaching out through our website. We offer tailored solutions for projects of all sizes, helping clients achieve innovative and efficient architectural outcomes.",
  },
  {
    question: "Does Apexion provide global services?",
    answer:
      "Yes, Apexion works with clients worldwide. Our approach is scalable and adaptable, combining global architectural trends with cutting-edge technology to deliver impactful solutions.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="bg-black text-white py-20 px-6 sm:px-10 md:px-20 relative font-[Poppins]"
      style={{
        backgroundImage: `url('line-vector.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="flex gap-2 items-center mb-20">
        <Ribbon className="text-blue-800"/>
        <p className="text-xs tracking-wide text-[#ffffff]/80">FAQ’s</p>
      </div>


      <div className="grid place-items-start md:grid-cols-2 grid-cols-1 gap-20">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0f1a75] to-[#ffffff] mb-5"
          >
            Redefining Innovation Through Intelligent Design
          </motion.h1>

          <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
            At Apexion, we merge architecture with technology to create
            sustainable, intelligent, and future-ready solutions. Our mission
            is to empower clients with innovative designs, AI-driven insights,
            and seamless digital transformation strategies.
          </p>
        </div>


        <div className="relative max-w-4xl mx-auto h-[500px] scrollbar-thin scrollbar-thumb-[#0f1a75] scrollbar-track-[#1a1a1a] overflow-y-auto overflow-x-hidden">
          <h2 className="text-3xl font-semibold mb-10 text-center text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md shadow-md hover:shadow-[#0f1a75]/40 transition-all duration-300"
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-medium"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-sm text-[#ffffff]/90">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-sm text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
