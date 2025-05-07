import { ArrowRight } from "lucide-react";
import CTA from "@/assets/images/CTA.png";

export default function CallToAction() {
  return (
    <section
      className="realtive pt-12 pb-4 px-6 md:px-10 lg:px-12 bg-white max-w-7xl lg:mx-auto h-fit flex flex-col md:flex-row flex-wrap items-center justify-between gap-8 rounded-none md:rounded-2xl lg:rounded-3xl border border-[#E5E5E5] relative md:mx-16 "
      style={{
        backgroundImage: `url(${CTA})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#225EA6]/50 to-[#225EA6]/40 md:hidden"></div>

      {/* Text and Button */}
      <div className="w-full md:w-1/2 text-left z-30">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white md:text-[#010101] max-w-[500px] pb-4 lg:pb-8">
          Open an investment account today and experience next-gen services
        </h3>
        <button className="inline-flex items-center px-6 py-3 bg-[#225EA6] border hover:text-[#225EA6] border-[#225EA6] text-white rounded-full text-sm font-medium hover:bg-white transition duration-300">
          Call Us Now <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Placeholder or Image Space (if any in the future) */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0"></div>
    </section>
  );
}
