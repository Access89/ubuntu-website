import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      className="py-12 bg-white max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between  p-8 rounded-3xl"
      style={{
        backgroundImage: "url('src/assets/images/CTA.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-left space-y-4">
        <h3 className="text-3xl font-[700] text-[#010101] max-w-md mb-10">
          Open an investment account today and experience next-gen services
        </h3>
        <button className="inline-flex items-center px-6 py-3 bg-[#225EA6] border hover:text-[#225EA6] border-[#225EA6] text-white rounded-full text-sm font-medium hover:bg-white transition duration-300">
          Call Us Now <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0"></div>
    </section>
  );
}
