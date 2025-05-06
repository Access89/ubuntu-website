import React from "react";

const products = [
  { title: "Ubuntu Fixed Deposit Investment", icon: "💰" },
  { title: "Ubuntu Future Investment Plan", icon: "📈" },
  { title: "Salaried Loans", icon: "💳" },
  { title: "Ubuntu Capital FastSME Loans", icon: "🏦" },
];

export default function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Browse our set of products and services</h2>
        <p className="text-gray-600 mb-8">We offer a variety of tools and resources to help you manage your finances effectively.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{p.icon}</div>
              <div className="text-lg font-semibold text-center">{p.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}