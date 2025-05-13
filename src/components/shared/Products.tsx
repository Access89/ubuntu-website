import wallet from "@/assets/images/wallet-line.png";
import futurePlan from "@/assets/images/future-plan.png";
import loans from "@/assets/images/loans.png";
import SME from "@/assets/images/SME.png";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

const services = [
  {
    title: "Ubuntu Fixed Deposit Investment",
    icon: wallet,
    text: "This offers customers specific interest rates for depositing funds over periods of 91, 182, or 365 days.",
  },
  {
    title: "Ubuntu Future Investment Plan",
    icon: futurePlan,
    text: "This aims to maximize returns through scheduled deposits over a fixed term, offering customers flexible deposit options to invest, save, and plan for the future while benefiting from a fixed-term investment structure.",
  },
  {
    title: "Salaried Loans",
    icon: loans,
    href: "https://digital.foundry-platform.com/ubuntu-capital",
    text: "This short-term financial product, with a tenure of one to six months, targets individuals with a fixed monthly income who have been employed for at least six months or have completed their probation period.",
  },
  {
    title: "Ubuntu Capital FastSME Loans",
    icon: SME,
    href: "https://digital.foundry-platform.com/ubuntu-capital",
    text: "This loan product is designed for micro and small businesses with predictable cash flow. It has a 50-working-day tenure, a 72-hour turnaround time, and requires daily repayment via USSD. Start-up businesses are not eligible.",
  },
  {
    title: "Ubuntu Capital Business loans",
    icon: SME,
    href: "https://digital.foundry-platform.com/ubuntu-capital",
    text: "This loan product is designed for micro and small businesses with predictable cash flow. It has a 50-working-day tenure, a 72-hour turnaround time, and requires daily repayment via USSD. Start-up businesses are not eligible.",
  },
];

function Products() {
  const location = useLocation();
  const isLoans = location.pathname === "/loans";
  const isInvestments = location.pathname === "/investments";
  const visibleServices = isLoans
    ? services.slice(2, 5)
    : isInvestments
    ? services.slice(0, 2)
    : services;

  // Split services: first 3, then the remaining
  const firstRow = visibleServices.slice(0, 3);
  const secondRow = visibleServices.slice(3);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-20 2xl:px-0 ">
      {/* First Row - 3 columns */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 ${
          isInvestments ? "lg:grid-cols-2" : "lg:grid-cols-3"
        }`}
      >
        {firstRow.map((service, idx) => (
          <Card
            key={idx}
            service={service}
            className={idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
          />
        ))}
      </div>

      {/* Second Row - 2 columns */}
      {secondRow.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {secondRow.map((service, idx) => (
            <Card key={idx + 3} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}

// Card component
function Card({
  service,
  className = "",
}: {
  service: any;
  className?: string;
}) {
  return (
    <div className={`min-h-[250px] ${className}`}>
      <div className="relative h-full flex flex-col gap-4 bg-white rounded-3xl p-8 pt-10 md:p-10 md:pb-16 items-start transition duration-300 cursor-pointer">
        <div className="text-2xl font-semibold text-gray-900">
          {service.title}
        </div>
        <p className="text-gray-600 text-base line-clamp-4">{service.text}</p>
        <div className="absolute bottom-5 sm:right-10 right-5 flex items-center justify-end text-black hover:bg-gray-800 rounded-full p-2 hover:text-white mt-2 transition duration-300 ">
          <Icon
            icon="mingcute:arrow-right-fill"
            className="w-7 h-7 font-bold"
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
