import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocation } from "react-router-dom";

const defaultFaqs = [
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

const investmentFaqs = [
  {
    question: "How can I open an Investment Account?",
    answer:
      "Choose an investment product, provide ID and required documents, complete the application, fund your account, and start investing.",
  },
  {
    question: "What types of investment plans do you offer?",
    answer:
      "We offer short-term, long-term, and goal-based investment plans designed to match your financial goals.",
  },
  {
    question: "What is the expected return on investment?",
    answer:
      "Returns vary based on the plan selected. We offer both fixed and market-linked options. Check individual plan details for estimated returns.",
  },
  {
    question: "Can I withdraw my investment before maturity?",
    answer:
      "Yes, but early withdrawal terms depend on the specific product. Some may incur penalties or affect your returns.",
  },
  {
    question: "Is my investment safe?",
    answer:
      "We prioritize your financial safety and only offer products that meet regulatory and risk guidelines. However, all investments carry some level of risk.",
  },
  {
    question: "Who can apply for an Investment Account?",
    answer:
      "Anyone over 18 with valid documentation can open an investment account. Business and joint accounts are also supported.",
  },
  {
    question: "How do I monitor my investment performance?",
    answer:
      "You can track your investments through our online dashboard, which provides real-time updates on returns and growth.",
  },
];

const loanFaqs = [
  {
    question: "How do I apply for a loan?",
    answer:
      "You can apply for a loan by visiting our website or office and completing the application process.",
  },
  {
    question: "What documents are needed for a loan application?",
    answer:
      "Typically, you need proof of income, a valid ID, employment verification, and sometimes a guarantor form.",
  },
  {
    question: "How long does loan approval take?",
    answer:
      "Loan approval typically takes 24–72 hours after submitting all required documents.",
  },
  {
    question: "What is the maximum loan amount I can apply for?",
    answer:
      "The maximum loan amount depends on your income level, creditworthiness, and the loan product you choose.",
  },
  {
    question: "Can I repay my loan early?",
    answer:
      "Yes, early repayment is allowed. In fact, it may reduce your overall interest payments. Please review your loan terms for any prepayment fees.",
  },
  {
    question: "Is collateral required for all loan types?",
    answer:
      "Not all loans require collateral. Unsecured loans are available, but secured loans may offer better interest rates.",
  },
  {
    question: "What are the interest rates on your loans?",
    answer:
      "Interest rates vary based on the loan product, term, and applicant’s financial profile. Contact us or check our website for current rates.",
  },
];

const Faq = () => {
  const location = useLocation();
  const isLoans = location.pathname === "/loans";
  const isInvestments = location.pathname === "/investments";
  const faqsToShow = isLoans
    ? loanFaqs
    : isInvestments
    ? investmentFaqs
    : defaultFaqs;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl lg:mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-16 md:mx-16">
        {/* Intro Section */}
        <div className="md:w-1/2">
          <p className="text-[#235EA6] font-light text-xl mb-2">Support</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">FAQs</h2>
          <p className="text-[#ACACAC] max-w-md text-lg lg:text-xl leading-[150%] font-[300]">
            Everything you need to know about our products and services. Can’t
            find the answer you’re looking for? Please contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="md:w-1/2">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqsToShow.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-0"
              >
                <AccordionTrigger className="text-lg lg:text-2xl sm:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#434244]/70 text-sm sm:text-base lg:text-lg leading-[150%] font-[300]">
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
