import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I open an Investment Account?",
    answer:
      "Simply choose your preferred investment product, submit a valid ID and required documents, complete our application form, and fund your account to start earning.",
  },
  {
    question: "What are the interest rates on your investment products?",
    answer:
      "Interest rates vary by product and market conditions. Contact us or visit a branch to get current rates and tailored advice.",
  },
  {
    question: "Can I access my investment funds before maturity?",
    answer:
      "Early withdrawals may be possible depending on the product, but may attract penalties. Please check your specific product terms or contact us.",
  },
  {
    question: "How secure is my money with Ubuntu Capital?",
    answer:
      "We are a licensed deposit-taking microfinance institution regulated by the Bank of Ghana. Your funds are managed with the highest standards of safety and transparency.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us via phone, email, or by visiting any of our branches. Our support team is ready to help you with any questions.",
  },
];

export default function SupportPage() {
  return (
    <section className="bg-white py-16 pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-[#225EA6] mb-4">
            We're Here to Help
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our services, investments, or operations? Find
            answers below or reach out to us directly. We're committed to
            supporting your financial journey.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-[#225EA6] mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg text-[#225EA6] font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="bg-[#F5F8FA] rounded-xl p-10 text-center">
          <h3 className="text-2xl font-semibold text-[#225EA6] mb-4">
            Still Need Help?
          </h3>
          <p className="text-gray-600 mb-6">
            Our customer support team is ready to assist you. Whether you need
            account guidance, product info, or technical support, we've got you
            covered.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#225EA6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1C4D8E] transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
