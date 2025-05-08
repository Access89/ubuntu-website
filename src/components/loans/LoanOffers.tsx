import ServiceCarousel from "../ServiceCarousel";

function LoanOffers() {
  return (
    <div className="bg-[#225EA6]/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto mb-12 gap-6 px-6 sm:px-12 lg:px-0 flex flex-col md:flex-row md:items-end justify-between">
        <h1 className="text-3xl md:text-4xl max-w-md font-semibold text-gray-900">
          Need a loan? These are variousloans offers
        </h1>
      </div>
      <ServiceCarousel />
    </div>
  );
}
export default LoanOffers;
