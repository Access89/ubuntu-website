import heroImage from "../assets/images/hero-image.png";
import checkIcon from "../assets/images/check.png";
import noise from "../assets/images/Noise.png";
import Header from "./Header";

export default function Hero() {
  const cards = [
    {
      icon: "📝",
      title: "Borrow",
      description:
        "Our digital lending solution, providing your customers with quick and convenient access to the financing they need.",
    },
    {
      icon: "💼",
      title: "Invest",
      description:
        "Simplified onboarding for businesses and customers with our intuitive, user-friendly digital platform.",
    },
    {
      icon: "📊",
      title: "Loan Calculator",
      description:
        "Expand banking access with our agent network platform, connecting underserved areas to essential financial services through local intermediaries.",
    },
  ];

  return (
    <section className="relative min-h-[700px] lg:min-h-screen pt24 md:pt-0 pb-32 md:pb-5">
      {/* Hero Image */}
      <div className="relative w-full">
        <Header />

        <img
          src={heroImage}
          alt="hero"
          className="w-full sm:w-[85%] lg:w-[60%] mx-auto pt-24 relative z-10"
        />

        {/* Noise Overlay */}
        <img
          src={noise}
          alt="noise"
          className="absolute inset-0 w-full h-auto lg:h-screen opacity-70 z-0"
        />

        {/* Cards */}
        <div className="relative md:absolute inset-x-0 md:bottom-10 xl:bottom-20 max-w-7xl md:w-[90%] lg:w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 px-4 z-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-4xl px-6 py-5 max-w-sm h-full  w-full sm:w-auto border border-[#ACACAC]/50 sm:last:hidden md:last:block"
            >
              <div className="text-blue-600 text-2xl mb-3"></div>
              <img src={checkIcon} alt="icon" className="w-5 h-5 mb-3" />
              <h3 className="text-lg text-[15px] text-[#1A1A1A] font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-[#575757] leading-[150%] text-base lg:text-xs">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
