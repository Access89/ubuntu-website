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
    <section className="relative pt-24 md:pt-5 pb-32">
      {/* Hero Image */}
      <div className="relative w-full">
        <img
          src="src/assets/hero-image.png"
          alt="hero"
          className="w-full sm:w-[85%] lg:w-[60%] mx-auto relative z-10"
        />

        {/* Noise Overlay */}
        <img
          src="src/assets/Noise.png"
          alt="noise"
          className="absolute inset-0 w-full h-auto opacity-70 z-0"
        />

        {/* Cards */}
        <div className="relative md:absolute inset-x-0 bottom-20 max-w-7xl lg:w-[70%]  mx-auto grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6 px-4 z-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-4xl p-6 max-w-sm h-full  w-full sm:w-auto border border-[#ACACAC]/50"
            >
              <div className="text-blue-600 text-2xl mb-3"></div>
              <img
                src="src/assets/check.png"
                alt="icon"
                className="w-5 h-5 mb-3"
              />
              <h3 className="text-[15px] text-[#1A1A1A] font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-[#575757] leading-[150%] text-xs">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
