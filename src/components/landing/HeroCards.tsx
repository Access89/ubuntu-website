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
    <div className="relative md:absolut inset-x-0 md:bottom-5 xl:-bottom-[30%] max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 px-4 z-20">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-4xl px-6 py-5 max-w-sm h-full border-r  w-full sm:w-auto border border-[#ACACAC]/50 sm:last:hidden md:last:block"
        >
          <div className="text-blue-600 text-2xl mb-3"></div>
          <img src={checkIcon} alt="icon" className="w-5 h-5 mb-3" />
          <h3 className="text-lg md:text-[15px] text-[#1A1A1A] font-semibold mb-2">
            {card.title}
          </h3>
          <p className="text-[#575757] leading-[150%] text-base md:text-lg lg:text-xl">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
export default HeroCards;
