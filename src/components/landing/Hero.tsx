import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero_1 from "@/assets/images/hero-1.jpg";
import hero_2 from "@/assets/images/hero-2.jpg";
import hero_3 from "@/assets/images/hero-3.jpg";
import { Link } from "react-router-dom";

const images = [hero_1, hero_2, hero_3];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <section
        id="herosection"
        className="relative flex items-center justify-center h-screen text-center text-white select-none mb-16"
      >
        {/* Background Image Slider using divs and backgroundImage */}
        <div className="absolute inset-0 overflow-hidden bg-[#225EA6] mt-16">
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Animated Content */}
        <div className="relative z-10 max-w-3xl px-6 mt-[5%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Empowering Growth. <br /> Enabling Dreams.
              </motion.h1>

              <motion.p
                className="mt-4 text-lg sm:text-xl xl:text-2xl text-gray-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                At Ubuntu Capital Microfinance, we bridge the gap between the
                banked and unbanked with trusted, technology-driven financial
                solutions for individuals and small businesses across Ghana.
              </motion.p>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link
                  to="/loans"
                  className="inline-flex items-center gap-2 bg-[#225EA6] text-white px-6 py-3 text-lg font-medium rounded-lg hover:bg-[#1E4F8C] transition duration-300"
                >
                  Explore Our Solutions <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
