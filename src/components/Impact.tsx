export default function ImpactSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 xl:px-0 lg:min-h-screen flex items-center justify-center">
      <div className="max-w-7xl lg:mx-auto space-y-6 md:mx-16">
        <div className="flex flex-col items-start sm:items-center gap-6 sm:gap-8 lg:gap-12 w-full sm:text-center text-left lg:w-[80%] mx-auto">
          <h2 className="text-3xl sm:text-[2rem] lg:text-[2.5rem] font-[600] text-gray-900  leading-[110%]">
            Transforming Vision into Value: A Look at Our Impact Through the
            Numbers
          </h2>
          <p className="text-xl lg:text-2xl leading-[150%] font-[300]">
            Ubuntu Capital Microfinance is driving financial inclusion across
            Ghana by empowering over 45,000 clients in 8 regions with access to
            ethical and reliable financial services. With over GHS 120 million
            disbursed in microloans—primarily to women, youth, and small
            businesses—we’re fueling local enterprise and community resilience.
            Our digital platforms have enabled 250,000+ mobile transactions,
            while our financial literacy programs are helping thousands build
            lasting financial habits. Every number tells a story of progress,
            purpose, and people.
          </p>
          {/* Stats */}
          <div className="w-full mt-4 md:mt-6 lg:mt-8 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-12 md:gap-x-16 gap-y-8">
            <div>
              <h3 className="text-5xl sm:text-5xl md:text-[5rem] text-[#225EA6] font-[500]">
                100K
              </h3>
              <p className="text-base lg:text-lg text-[#929292]">Customer</p>
            </div>
            <div>
              <h3 className="text-5xl sm:text-6xl md:text-[5rem] text-[#225EA6] font-[500]">
                97%
              </h3>
              <p className="text-base lg:text-lg text-[#929292]">
                Customer satisfaction
              </p>
            </div>
            <div>
              <h3 className="text-5xl sm:text-6xl md:text-[5rem] text-[#225EA6] font-[500]">
                40%
              </h3>
              <p className="text-base lg:text-lg text-[#929292]">
                Yearly growth
              </p>
            </div>
            <div>
              <h3 className="text-5xl sm:text-6xl md:text-[5rem] text-[#225EA6] font-[500]">
                300B
              </h3>
              <p className="text-base lg:text-lg text-[#929292]">
                Current Money Managed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
