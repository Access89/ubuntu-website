import React from "react";
import hero from "@/assets/images/loans-hero.png";

const LoansHero: React.FC = () => {
  return (
    <section className="bg-white py-16 pt-32 container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl lg:max-w-[90%] gap-y-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Happy woman with laptop and cash"
            className="w-full rounded-md h-full object-cover"
          />
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
