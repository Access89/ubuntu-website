// import { Icon } from "@iconify/react/dist/iconify.js";
import ServiceCarousel from "./ServiceCarousel";

export default function Products() {
  return (
    <section className="bg-[#225EA6]/10 py-16 md:py-24">
      {/* Text Section - Similar to Apple's */}
      <div className="max-w-7xl mx-auto mb-12 gap-6  px-6 sm:px-12 lg:px-0 flex flex-col md:flex-row md:items-end justify-between">
        <h1 className="text-3xl md:text-4xl max-w-md font-semibold text-gray-900">
          Why Ubuntu is the best place to grow your finances.
        </h1>

        {/* <button className="inline-flex items-center   text-[#0066cc] hover:underline text-lg rounded-full font-[300]  transition">
          Explore Products
          <Icon icon="weui:arrow-outlined" className="ml-2 w-4 h-4" />
        </button> */}
      </div>

      {/* Carousel Section */}
      <ServiceCarousel />
    </section>
  );
}
