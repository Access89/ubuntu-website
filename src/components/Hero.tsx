import React from "react";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome to Ubuntu Capital</h1>
          <p className="text-lg text-gray-600 mb-6">Your trusted partner for loans, investments, and financial growth.</p>
          <div className="flex space-x-4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-blue-700 font-bold text-xl">Loan Amount</div>
              <div className="text-2xl font-bold">₵75,000</div>
              <div className="text-gray-500 text-sm">9.5% APR</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-blue-700 font-bold text-xl">Loan Calculator</div>
              <div className="text-gray-500 text-sm">Estimate your loan easily</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img src="/assets/hero-mockup.png" alt="App Mockup" className="w-full max-w-md rounded-2xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
}