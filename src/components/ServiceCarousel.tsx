"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import wallet from "../assets/images/wallet-line.png";
import futurePlan from "../assets/images/future-plan.png";
import loans from "../assets/images/loans.png";
import SME from "../assets/images/SME.png";
import { Icon } from "@iconify/react/dist/iconify.js";

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
];

export default function ServiceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative maxw-7xl mx-auto">
      {/* Carousel viewport */}
      <div className="overflow-hidden sm:px-12 lg:px-32 w-full" ref={emblaRef}>
        <div className="flex gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="min-w-[280px] min-h-[300px] sm:min-w-[400px] max-w-[300px] shrink-0"
              onClick={() =>
                service.href && window.open(service.href, "_blank")
              }
            >
              <div className="relative h-full flex flex-col gap-4 bg-white rounded-4xl p-6 md:p-12 md:pb-20 items-start transition duration-300 cursor-pointer">
                <img src={service.icon} alt="icon" className="w-6 h-6" />
                <div className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </div>
                <p className="text-gray-600 text-lg line-clamp-2">
                  {service.text}
                </p>
                <div className="absolute bottom-5 right-10 flex items-center justify-end bg-[#272729] rounded-full p-2  text-white mt-2">
                  {/* <ChevronRight className="w-5 h-5" /> */}
                  <Icon
                    icon={"weui:arrow-filled"}
                    className="w-6 h-6 font-bold"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="justify-end sm:pr-12 lg:pr-20 mt-16 gap-4 -translate-y-1/2 w-full flex px-4 z-10">
        <button
          type="button"
          title="Scroll to previous"
          onClick={scrollPrev}
          className="bg-[#e8e8ed] shadow rounded-full p-2 hover:bg-[#e6e6e9]/70 transition duration-300"
        >
          <ChevronRight className="rotate-180 w-6 h-6 text-gray-800" />
        </button>
        <button
          type="button"
          title="Scroll to Next"
          onClick={scrollNext}
          className="bg-[#e8e8ed] shadow rounded-full p-2 hover:bg-gray-100 transition duration-300"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
}
