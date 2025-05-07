import { ArrowRight } from "lucide-react";
import wallet from "../assets/images/wallet-line.png";
import futurePlan from "../assets/images/future-plan.png";
import loans from "../assets/images/loans.png";
import SME from "../assets/images/SME.png";

const services = [
  {
    title: "Ubuntu Fixed Deposit Investment",
    icon: wallet,
  },
  {
    title: "Ubuntu Future Investment Plan",
    icon: futurePlan,
  },
  {
    title: "Salaried Loans",
    icon: loans,
  },
  {
    title: "Ubuntu Capital FastSME Loans",
    icon: SME,
  },
];

export default function Products() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[110%] text-gray-900">
            Browse our set of
            <br /> products and services
          </h2>
          <p className="text-[#9E9E9E] font-medium text-lg md:text-xl mb-6 md:mb-10">
            We offer a variety of tools and resources
            <br className="hidden md:block" />
            to help you manage your finances effectively.
          </p>
          <button className="inline-flex items-center px-6 lg:px-10 lg:py-4 py-3 bg-[#225EA6] text-white text-base md:text-lg lg:text-xl rounded-full font-medium hover:bg-[#225EA6]/80 transition">
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-6 bg-[#A9CAF2]/50 rounded-3xl px-6 py-10 items-start hover:shadow-lg transition duration-300 h-[250px] lg:h-[300px] "
            >
              <div className="bg-white p-4 rounded-2xl">
                {/* <Icon icon={service.icon} className="w-8 h-8 text-[#225EA6]" /> */}
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-[1.5rem] h-[1.5rem]"
                />
              </div>
              <div className="text-xl md:text-2xl font-semibold text-gray-900">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
