const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 pt-20 ">
      <div className="px-6 md:px-16 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Intro Section */}
          <div className="text-center max-w-4xl mx-auto pt-16">
            <h2 className="text-[#225EA6] font-semibold text-sm uppercase tracking-wider mb-3">
              About Ubuntu Capital
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Empowering Growth with Trust, Respect & Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Ubuntu Capital Microfinance Limited is a tier 2 deposit-taking
              institution established in 2014 and began operations in 2015. Our
              focus is to provide timely financial solutions and business
              support through innovation, technology, and a highly motivated
              team. We strive to help individuals and businesses grow
              sustainably within dynamic market conditions.
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16">
            <div className=" md:p-8 sm:border-r">
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6]">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the preferred money transmission enabler bridging the
                gap between the banked and unbanked, and the go-to microfinance
                institution in the industry.
              </p>
            </div>
            <div className=" md:p-8 md:border-r">
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6]">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the best microfinance company in Ghana that meets
                international standards in profitability, corporate governance,
                and stakeholder value.
              </p>
            </div>

            {/* Objectives Section */}
            {/* <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6] text-left">
                Our Objectives
              </h3>
              <ul className="list-disc list-inside space-y-4 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                <li>
                  To provide financial support to individuals and micro, small,
                  and medium enterprises (MSMEs).
                </li>
                <li>
                  To leverage technology to improve operational efficiency.
                </li>
                <li>
                  To delight customers by exceeding their expectations and
                  becoming their number one financial partner.
                </li>
              </ul>
            </div> */}

            {/* Compliance Section */}
            <div className="text-left max-w-4xl mx-auto md:p-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#225EA6]">
                Compliance & Integrity
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ubuntu Capital complies fully with the Bank of Ghana's
                regulations and other statutory guidelines. We uphold ethical
                standards and operate with integrity, respecting all legal
                frameworks guiding financial services in Ghana.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          {/* <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-[#225EA6]">
              Our Core Values
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {["Respect", "Trust", "Excellence"].map((value) => (
                <div
                  key={value}
                  className="bg-blue-50 text-[#225EA6] px-6 py-4 rounded-xl shadow-sm text-lg font-medium"
                >
                  {value}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      {/* Our Values */}
      <section className="bg-[#F5F8FA] py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12 text-[#225EA6]">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2 text-[#225EA6]">
                Respect
              </h3>
              <p className="text-gray-600 text-lg">
                We treat every individual with dignity and fairness, valuing the
                diversity of our clients and their unique financial needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-[#225EA6]">Trust</h3>
              <p className="text-gray-600 text-lg">
                We build lasting relationships through honesty, transparency,
                and reliability in every financial interaction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-[#225EA6]">
                Excellence
              </h3>
              <p className="text-gray-600 text-lg">
                We strive for superior service delivery and innovation, ensuring
                we exceed expectations and empower sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#225EA6] text-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Take Your Financial Future to the Next Level?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            Whether you're a growing business or an individual seeking financial
            support, Ubuntu Capital is here to help you thrive. Let’s build a
            better tomorrow—together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#225EA6] px-6 py-3 rounded-full font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
