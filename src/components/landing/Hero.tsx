import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hero_1 from '@/assets/images/hero-1.jpg';
import hero_2 from '@/assets/images/hero-2.jpg';
import hero_3 from '@/assets/images/hero-3.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const images = [hero_1, hero_2, hero_3];

  const content = [
    // {
    //   title: (
    //     <>
    //       <motion.h1
    //         className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.2, duration: 0.6 }}
    //       >
    //         Empowering Growth. <br /> Enabling Dreams.
    //       </motion.h1>
    //     </>
    //   ),
    //   subText: (
    //     <>
    //       <motion.p
    //         className="mt-4 text-lg sm:text-xl xl:text-2xl text-gray-200 max-w-2xl mx-auto"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.5, duration: 0.6 }}
    //       >
    //         At Ubuntu Capital Microfinance, we bridge the gap between the banked
    //         and unbanked with trusted, technology-driven financial solutions for
    //         individuals and small businesses across Ghana.
    //       </motion.p>

    //       <motion.div
    //         className="mt-6"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.8, duration: 0.6 }}
    //       >
    //         <Link
    //           to="/loans"
    //           className="inline-flex items-center gap-2 bg-[#225EA6] text-white px-6 py-3 text-lg font-medium rounded-lg hover:bg-[#1E4F8C] transition duration-300"
    //         >
    //           Explore Our Solutions <span>→</span>
    //         </Link>
    //       </motion.div>
    //     </>
    //   ),
    // },
    {
      title: (
        <>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Dial <br /> *789*712#
          </motion.h1>
        </>
      ),
      subText: (
        <>
          <motion.p
            className="mt-4 text-lg sm:text-xl xl:text-2xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            To manage your account, apply for a loan, or check your
            balance—anytime, anywhere, on any phone. No internet? No problem.
            Ubuntu Capital is just a dial away.
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
        </>
      ),
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prev) => (prev + 1) % content.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <section
        id="herosection"
        className="relative flex items-center justify-center h-screen text-center text-white select-none"
      >
        {/* Background Image Slider using divs and backgroundImage */}
        <div className="absolute inset-0 z-0">
          {images.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${slide})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImage ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/70 md:to-[#0B2545]/10 to-[#0B2545]/30 " />
        </div>

        <div className="relative z-10 max-w-3xl px-6 mt-[5%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {content[currentContentIndex].title}
              {content[currentContentIndex].subText}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
