import React from "react";
import hero from "@/assets/images/loans-hero.png";

const LoansHero: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={hero}
          alt="Happy woman with laptop and cash"
          className="max-w-sm rounded-md object-cover"
        />
      </div>

      {/* Right Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Digital</h2>
        <h1 className="text-5xl font-bold mb-6">
          Need Cash Fast? Try Our Digital Loans!
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          With our Mobile Banking App, you have round-the-clock access to manage
          your eligible accounts, make payments, transfer funds, and handle
          financial transactions securely, conveniently, and swiftly, all from
          the palm of your hand – whether you are an existing customer or not.
        </p>
      </div>
    </section>
  );
};

export default LoansHero;
