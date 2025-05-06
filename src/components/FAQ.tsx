import React, { useState } from "react";

const faqs = [
  {
    question: "How can I open an Investment Account?",
    answer: "Choose an investment product, provide ID and required documents, complete the application, fund your account, and start investing.",
  },
  { question: "How do I apply for a loan?", answer: "Visit our loan section, fill out the application, and submit the required documents." },
  { question: "How do I contact Customer Service?", answer: "You can contact us via phone, email, or our support page." },
  { question: "Who can apply for an Investment Account?", answer: "Anyone who meets our eligibility criteria can apply." },
  { question: "How and where can I apply from?", answer: "You can apply online or visit any of our branches." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.question}
                <span>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="mt-2 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}