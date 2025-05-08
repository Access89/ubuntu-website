import ServiceCarousel from "./ServiceCarousel";

export default function Products() {
  return (
    <section className="bg-[#f5f5f7] py-16">
      {/* Text Section - Similar to Apple's */}
      <div className="max-w-7xl mx-auto mb-12 gap-6 flex flex-col md:flex-row items-end justify-between">
        <h1 className="text-3xl md:text-4xl w-md font-semibold text-gray-900">
          Why Ubuntu is the best place to grow your finances.
        </h1>

        {/* <button className="inline-flex items-center px-6 py-3  text-[#0066cc] hover:underline text-lg rounded-full font-[300]  transition">
          Explore Products{" "}
          <Icon icon="weui:arrow-outlined" className="ml-2 w-4 h-4" />
        </button> */}
      </div>

      {/* Carousel Section */}
      <ServiceCarousel />
    </section>
  );
}
