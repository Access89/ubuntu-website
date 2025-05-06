import React from "react";

export default function Mission() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="border-l-4 border-blue-700 pl-6">
          <div className="text-5xl font-bold text-gray-800 leading-tight" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>
            The Money Center
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Discover the mission & story behind our company</h2>
          <p className="text-gray-600 mb-4">
            Ubuntu Capital Microfinance is a deposit-taking tier 2 micro finance company incorporated to provide financial services through efficient and well motivated workforce, state of the art technology and innovative and cutting edge products that will satisfy the financial needs of our customers.
          </p>
          <a href="#" className="text-blue-700 font-semibold hover:underline">About us &rarr;</a>
        </div>
      </div>
    </section>
  );
}