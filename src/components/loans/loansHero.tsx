import React from "react";
import hero from "@/assets/images/loans-hero.png";
import noise from "@/assets/images/loans-noise.png";

const LoansHero: React.FC = () => {
  return (
    <section className="bg-white py-16 pt-32 container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl lg:max-w-[90%] gap-y-12">
        {/* Left Image */}
        <div className=" relative w-full h-[85vh] md:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Happy woman with laptop and cash"
            className="w-full rounded-md h-full object-cover"
          />
          <img
            src={noise}
            alt="noise"
            className="absolute inset-0 w-full h-auto lg:h-full opacity-10 z-0"
          />
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute inset-0 right-0 w-28 bg-gradient-to-r from-white to-transparent" />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[100%]">
            Need Cash Fast? Try Our Digital Loans!
          </h1>
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl leading-[150%]">
            Get instant access to flexible micro loans—anytime, anywhere.No
            paperwork. No queues. Just apply and get funded in minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoansHero;
