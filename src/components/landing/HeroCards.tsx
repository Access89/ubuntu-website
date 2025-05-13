import checkIcon from "@/assets/images/check.png";

function HeroCards() {
  const cards = [
    {
      title: "Borrow",
      description:
        "Our digital lending solution, providing your customers with quick and convenient access to the financing they need.",
    },
    {
      title: "Invest",
      description:
        "Simplified onboarding for businesses and customers with our intuitive, user-friendly digital platform.",
    },
    {
      title: "Loan Calculator",
      description:
        "Expand banking access with our agent network platform, connecting underserved areas to essential financial services through local intermediaries.",
    },
  ];

  return (
    <div className="relative md:absolute inset-x-0 md:bottom-0 xl:-bottom-[10%] max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 px-4 z-20 border lg:rounded-xl border-[#ACACAC]/50 bg-white pb-6 py-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white px-6  max-w-sm h-full md:border-r  w-full sm:w-auto border-[#ACACAC]/50 last:border-0 sm:last:hidden md:last:block"
        >
          <div className="text-blue-600 text-2xl mb-3"></div>
          <img src={checkIcon} alt="icon" className="w-5 h-5 mb-3" />
          <h3 className="text-lg md:text-xl text-[#1A1A1A] font-semibold mb-2">
            {card.title}
          </h3>
          <p className="text-[#575757] leading-[150%] text-base md:textlg line-clamp-2">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
export default HeroCards;
