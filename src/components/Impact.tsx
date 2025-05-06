import React from "react";

const metrics = [
  { value: "100K", label: "Customer" },
  { value: "40%", label: "Yearly growth" },
  { value: "97%", label: "Customer satisfaction" },
  { value: "300B", label: "Current Money Managed" },
];

export default function Impact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <img src="/assets/impact-image.jpg" alt="Impact" className="rounded-xl shadow-lg w-full h-64 object-cover" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Our impact in numbers</h2>
          <div className="grid grid-cols-2 gap-6 mb-6">
            {metrics.map((m, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-gray-900">{m.value}</div>
                <div className="text-gray-600">{m.label}</div>
              </div>
            ))}
          </div>
          <a href="#" className="inline-block bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-800 transition">Get Started</a>
        </div>
      </div>
    </section>
  );
}