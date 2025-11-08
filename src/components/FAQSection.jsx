import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Wellnex Systems?",
    answer:
      "Wellnex Systems is a next-generation HealthTech ecosystem that unites wellness, fitness, and technology. We create digital solutions that empower individuals, gyms, and wellness providers to thrive in a connected, intelligent, and human-centered environment.",
  },
  {
    question:
      "How does Wellnex Systems integrate wellness, fitness, and technology?",
    answer:
      "Wellnex integrates physical, mental, and emotional wellness through a suite of intelligent apps. From telehealth and diagnostics to fitness access and mindfulness, our platform uses AI, cloud infrastructure, and real-time data to deliver personalized wellness experiences.",
  },
  {
    question:
      "Who can use Wellnex Systems — individuals, gyms, or healthcare providers?",
    answer:
      "Wellnex is built for everyone in the wellness ecosystem — individuals seeking better health, gyms wanting smarter operations, and healthcare providers offering personalized care. Each user group benefits from tools tailored to their unique needs within one connected platform.",
  },
  {
    question:
      "Is Wellnex Systems available globally or only in select regions?",
    answer:
      "Currently, Wellnex is launching across select regions with a focus on the UAE and South Asia, but we’re expanding globally soon. Our apps and services are designed to be scalable and accessible worldwide.",
  },
  {
    question: "How does Wellnex protect my personal health and fitness data?",
    answer:
      "We take data security seriously. Wellnex uses end-to-end encryption, secure cloud infrastructure, and strict compliance with global privacy standards to ensure your health and fitness data stays private and protected at all times.",
  },
  {
    question:
      "What makes Wellnex different from other fitness and wellness apps?",
    answer:
      "Unlike traditional wellness apps, Wellnex connects every aspect of well-being—physical, mental, and emotional—into a single intelligent ecosystem. Our AI-driven personalization, seamless integration for providers, and future-ready technology set us apart.",
  },
  {
    question: "How can I join the Wellnex movement?",
    answer:
      "You can join the Wellnex movement by exploring our flagship apps—SoulWhispers and GymKey—or by signing up for early access to the unified Wellnex Platform. Visit our website or click 'Join the Movement' to get started.",
  },
  {
    question: "Does Wellnex offer corporate or enterprise wellness solutions?",
    answer:
      "Yes, Wellnex provides scalable wellness solutions for organizations and fitness providers. From corporate wellness dashboards to multi-branch gym management tools, our platform supports businesses aiming to improve employee well-being and operational efficiency.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section 
    className="bg-black text-white py-20 px-6 sm:px-10 md:px-20 relative"
    style={{
          backgroundImage: `linear-gradient(rgba(0, 60, 0, 0.15), rgba(0, 0, 0, 0.85)), url('line-vector.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
    >
      <div className="flex gap-2 items-center mb-20">
        <img src="./movingIcon.gif" width={20} />
        <p className="text-xs">FAQ’s</p>
      </div>

      <div className="grid place-items-start md:grid-cols-2 grid-cols-1 gap-20">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#f8faf9] mb-4 sm:mb-5"
          >
            Redefining the Future of Health and <br /> Fitness.
          </motion.h1>

          <p className="text-sm">
            At Wellnex Systems, we merge wellness with intelligence—engineering
            digital ecosystems that empower lives. From AI-powered diagnostics
            and personalized mindfulness to smart gym connectivity and
            data-driven wellness insights, we’re building technology that
            listens, learns, and evolves with you. Our mission is simple: to
            create human-centered HealthTech solutions that make well-being
            accessible, intelligent, and deeply personal.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto h-[500px] scrollbar-thin scrollbar-thumb-[#34C759] scrollbar-track-[#0f0f0f] overflow-y-auto overflow-x-hidden">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-2xl overflow-hidden bg-[#0a0a0a]/60 backdrop-blur-sm"
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-medium"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-sm">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#34C759]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#34C759]" />
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
                      <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
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
