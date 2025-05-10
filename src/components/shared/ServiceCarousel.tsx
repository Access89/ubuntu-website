"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
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

export default function ServiceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const location = useLocation();
  const isLoans = location.pathname === "/loans";
  const isInvestments = location.pathname === "/investments";
  const visibleServices = isLoans
    ? services.slice(2, 5)
    : isInvestments
    ? services.slice(0, 2)
    : services;

  return (
    <div className={`relative mx-auto ${isInvestments ? "max-w-7xl" : ""}`}>
      {/* Carousel viewport */}
      <div
        className={`overflow-hidden px-6 sm:px-12 w-full ${
          isInvestments ? "xl:px-0" : "xl:px-[calc((100vw-1280px)/2)]"
        }`}
        ref={emblaRef}
      >
        <div
          className={`flex gap-4 touch-pan-y cursor-grab active:cursor-grabbing ${
            isInvestments ? "lg:grid lg:grid-cols-2" : ""
          } `}
        >
          {visibleServices.map((service, idx) => (
            <div
              key={idx}
              className={`embla__slide min-w-[280px] min-h-[300px] sm:min-w-[400px] max-w-[300px] shrink-0 ${
                isInvestments ? "lg:max-w-full lg:w-full " : ""
              }`}
              onClick={() =>
                service.href && window.open(service.href, "_blank")
              }
            >
              <div className="relative h-full flex flex-col gap-4 bg-white rounded-4xl p-8 pt-12 md:p-12 md:pb-20 items-start transition duration-300 cursor-pointer">
                <img src={service.icon} alt="icon" className="w-6 h-6" />
                <div className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </div>
                <p className="text-gray-600 text-lg line-clamp-2">
                  {service.text}
                </p>
                <div className="absolute bottom-5 sm:right-10 right-5 flex items-center justify-end bg-[#272729] rounded-full p-2 text-white mt-2">
                  <Icon
                    icon="weui:arrow-filled"
                    className="w-6 h-6 font-bold"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div
        className={`justify-end sm:pr-12 lg:pr-20 mt-16 gap-4 -translate-y-1/2 w-full flex px-4 z-10 ${
          isInvestments ? "lg:hidden" : ""
        }`}
      >
        <button
          type="button"
          title="Scroll to previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`bg-white shadow rounded-full p-2 transition duration-300 ${
            canScrollPrev
              ? "hover:bg-gray-100"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="rotate-180 w-6 h-6 text-gray-800" />
        </button>
        <button
          type="button"
          title="Scroll to Next"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`bg-white shadow rounded-full p-2 transition duration-300 ${
            canScrollNext
              ? "hover:bg-gray-100"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
}
