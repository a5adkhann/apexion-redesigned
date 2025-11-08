import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  challenge: z.string().min(3, "Please describe your challenge or goal"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid corporate email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  nda: z.boolean().optional(),
  message: z.string().min(10, "Please provide a bit more detail"),
});

const ContactFormSection = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("✅ Form submitted:", data);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] border-t-2 border-l-2  border-gray-600 flex justify-center items-center p-10 md:p-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="  w-full max-w-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-col items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#34C759]" />
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#FFF]">
              Get In. Get Fit.
            </h2>
            <p className="text-white font-bold">JOIN THE TRIBE</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 text-white"
          >
            <div>
              <input
                {...register("challenge")}
                type="text"
                placeholder="Your challenge / goal*"
                className="w-full px-4 py-3 border border-gray-800 bg-transparent focus:ring-1 focus:ring-[#34C759] outline-none"
              />
              {errors.challenge && (
                <p className="text-red-500 text-sm mt-1">{errors.challenge.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name*"
                  className="w-full px-4 py-3 border border-gray-800 bg-transparent focus:ring-1 focus:ring-[#34C759] outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Corporate email*"
                  className="w-full px-4 py-3 border border-gray-800 bg-transparent focus:ring-1 focus:ring-[#34C759] outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("phone")}
                  type="text"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 border border-gray-800 bg-transparent focus:ring-1 focus:ring-[#34C759] outline-none"
                />
              </div>

              <div>
                <input
                  {...register("company")}
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 border border-gray-800 bg-transparent focus:ring-1 focus:ring-[#34C759] outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                {...register("nda")}
                className="accent-[#34C759]"
              />
              <span>Secure data with NDA first</span>
            </div>

            <div>
              <textarea
                {...register("message")}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-800 bg-transparent focus:ring-1 focus:ring-[#34C759] outline-none resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-l from-green-600 to-green-950 text-white py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default ContactFormSection;
