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
      "Choose an investment product, provide ID and required documents, complete the application, fund your account, and start investing.",
  },
  {
    question: "How do I apply for a loan?",
    answer:
      "You can apply for a loan by visiting our website or office and completing the application process.",
  },
  {
    question: "How do I contact Customer Service?",
    answer:
      "You can contact customer service via phone, email, or the contact form on our website.",
  },
  {
    question: "Who can apply for an Investment Account?",
    answer:
      "Anyone who meets the eligibility criteria and provides valid documentation can apply.",
  },
  {
    question: "How and where can I apply from?",
    answer: "You can apply online from anywhere or visit our branches.",
  },
];

const Faq = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl flex gap-16 mx-auto px-6">
        {/* Intro Section */}
        <div className="flex-1">
          <p className="text-[#235EA6] font-[100] text-xl mb-2">Support</p>
          <h2 className="text-4xl font-[500] mb-4">FAQs</h2>
          <p className="text-[#ACACAC] max-w-md">
            Everything you need to know about our products and services. Can’t
            find the answer you’re looking for? Please contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex-1">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className=" border-0"
              >
                <AccordionTrigger className="text-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#434244]/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
