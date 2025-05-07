export default function Mission() {
  return (
    <section className="min-h-screen w-full flex items-center justify-between px-10 lg:px-16 bg-white">
      {/* Left - Logo / Brand */}
      <div className="text-[#754C2A] text-left">
        <div className="border-l-7 border-[#754C2A] pl-6">
          <h1 className="text-8xl font-light leading-tight">The</h1>
          <h1 className="text-8xl font-light leading-tight">Money</h1>
          <h1 className="text-8xl font-light leading-tight">Center</h1>
        </div>
      </div>

      {/* Right - Content */}
      <div className="max-w-xl">
        <h2 className="text-4xl lg:text-5xl font-bold leading-snug mb-6">
          Discover the mission &<br /> story behind our company
        </h2>
        <p className="text-[#010101]/70 leading-[211%] text-base mb-6">
          Ubuntu Capital Microfinance is a deposit-taking tier 2 micro finance
          company incorporate to provide financial services through efficient
          and well motivated workforce, state of the art technology and
          innovative and cutting edge products that will satisfy the financial
          needs of our customers.
        </p>
        <a
          href="#"
          className="text-[#225EA6] text-lg font-semibold hover:underline inline-flex items-center"
        >
          About us
          <span className="ml-1">→</span>
        </a>
      </div>
    </section>
  );
}
