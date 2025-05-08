import { ArrowRight } from "lucide-react";
import CTA from "@/assets/images/CTA.png";

export default function CallToAction() {
  return (
    <section
      className="realtive py-12 px-6 md:px-10 lg:px-12 bg-white max-w-7xl lg:mx-auto h-fit flex flex-col md:flex-row flex-wrap items-center justify-between gap-8 rounded-none md:rounded-2xl lg:rounded-3xl border border-[#E5E5E5] relative md:mx-16 "
      style={{
        backgroundImage: `url(${CTA})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#225EA6]/50 to-[#225EA6]/40 lg:hidden md:rounded-2xl"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full z-20">
        {/* Text and Button */}
        <div className="w-full lg:w-1/2 text-left z-30 flex flex-col items-center lg:items-start  justify-center ">
          <h3 className="text-2xl sm:text-3xl lg:text4xl font-semibold text-white lg:text-[#010101] max-w-[450px] text-center lg:text-left pb-4 lg:pb-8">
            Open an investment account today and experience next-gen services
          </h3>
          <button className="inline-flex items-center px-6 py-3 bg-[#225EA6] border hover:text-[#225EA6] border-[#225EA6] text-white rounded-full text-sm font-medium hover:bg-white transition duration-300">
            Call Us Now <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
        <div className="w-full lg:w-1/2 text-left z-30 flex flex-col items-center justify-center text-5xl uppercase text-white ">
          <p>ussd code</p>
          <p>*789*712#</p>
        </div>
      </div>
    </section>
  );
}
