import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CircleX, Ribbon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

const Navbar = ({ activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("✅ Form Data:", data);
  };

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        style={{ willChange: "transform, background, filter, box-shadow" }}
        animate={{
          background: isScrolled
            ? "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
            : "rgba(0,0,0,0)",
          border: isScrolled
            ? "1px solid var(--blue)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 4px 25px var(--blue)"
            : "0 4px 30px rgba(0,0,0,0)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          scale: isScrolled ? 0.97 : 1,
          width: isScrolled ? "80%" : "90%",
        }}
        transition={{
          background: { duration: 0.25, ease: "easeInOut" },
          border: { duration: 0.2, ease: "easeOut" },
          boxShadow: { duration: 0.25, ease: "easeInOut" },
          backdropFilter: { duration: 0.3, ease: "easeOut" },
          scale: { duration: 0.2, ease: "easeOut" },
          width: { duration: 0.25, ease: "easeInOut" },
        }}
        className="mx-auto flex items-center justify-center md:justify-between px-6 py-4 rounded-full mt-2 transition-all duration-300"
      >

        {/* MOBILE HEADER (Logo Left + Toggle Right) */}
        <div className="md:hidden flex w-full justify-between items-center">
          <Link to="/">
            <img src="logo.png" alt="Logo" className="w-[35px]" />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gray-300 transition"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* DESKTOP LOGO */}
        <motion.div
          animate={{ scale: isScrolled ? 0.9 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="hidden md:flex items-center space-x-2"
        >
          <Link to="/">
            <img src="logo.png" alt="Logo" className="w-[35px]" />
          </Link>
        </motion.div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center space-x-10">
          {["Home", "About", "Contact"].map((name) => (
            <Link
              key={name}
              to={`/${name === "Home" ? "" : name.toLowerCase()}`}
              className={`text-white hover:text-[var(--blue)] hover:-translate-y-1 hover:font-bold font-medium transition ${
                activePage === name.toLowerCase() ? "text-[var(--blue)] font-bold" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="md:flex hidden bg-gradient-to-l from-[var(--blue)] to-[var(--black)] text-white font-semibold px-5 py-2 text-sm rounded-full transition-all duration-300 shadow-md"
          >
            Speak to an expert
          </button>
        </motion.div>
      </motion.div>

      {/* =============================
           MOBILE MENU (SLIDES FROM RIGHT)
      ============================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed top-0 right-0 h-full w-[70%] bg-black/50 backdrop-blur-lg border-l border-[var(--blue)] z-40 px-4 py-6"
          >
            <div className="space-y-4 mt-10">
              {["Home", "About", "Contact"].map((name) => (
                <Link
                  key={name}
                  to={`/${name === "Home" ? "" : name.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-white hover:text-black transition ${
                    activePage === name.toLowerCase() ? "text-black font-bold" : ""
                  }`}
                >
                  {name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-gradient-to-l from-[var(--blue)] to-[var(--black)] hover:bg-[var(--blue)] text-white text-center py-2 rounded-full font-medium"
              >
                Join Now
              </Link>

              <Link
                onClick={() => setIsModalOpen(true)}
                className="block bg-gradient-to-l from-[var(--blue)] to-var[(--black)] hover:bg-[var(--blue) ] text-white text-center py-2 rounded-full font-medium"
              >
                Speak to an Expert
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =============================
           MODAL (UNCHANGED)
      ============================== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="modal"
            className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="shadow-[0_4px_25px_rgba(0,255,100,0.15)] backdrop-blur-md border border-white/10 p-8 w-[90%] sm:w-[800px] bg-white"
            >
              <div className="flex items-center justify-between text-[12px] mb-10 gap-2">
                <div className="flex gap-2 items-center">
                  <Ribbon className="text-blue-800 text-sm" />
                  <p className="text-black">Let’s Get Started</p>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-[var(--blue)] transition"
                >
                  <CircleX className="w-6 h-6" />
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
                This Could Be the Start of <br className="hidden sm:block" />
                Something Incredible!
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="form-group grid md:grid-cols-2 grid-cols-1 gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name*"
                      {...register("name")}
                      className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email*"
                      {...register("email")}
                      className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Company Name "
                    {...register("company")}
                    className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
                  />
                </div>

                <div>
                  <textarea
                    rows="3"
                    placeholder="Your Message*"
                    {...register("message")}
                    className="w-full border border-gray-300 px-4 py-2 focus:outline-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-l text-white font-bold from-[var(--blue)] to-[var(--black)] hover:bg-black py-2 rounded-full transition px-16"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
