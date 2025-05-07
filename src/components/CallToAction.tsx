import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      className="py-12 px-6 md:px-10 lg:px-12 bg-white max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap items-center justify-between gap-8 rounded-none lg:rounded-3xl"
      style={{
        backgroundImage: "url('src/assets/CTA.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text and Button */}
      <div className="w-full md:w-1/2 space-y-6 text-left">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#010101] max-w-md">
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
