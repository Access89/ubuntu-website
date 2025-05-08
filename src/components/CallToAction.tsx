import { Icon } from "@iconify/react/dist/iconify.js";

export default function CallToAction() {
  return (
    <div className="bg-[#225EA6] mx-4 sm:mx-auto sm:w-[75%] lg:w-full text-white rounded-3xl p-6 md:p-8 lg:p-10 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <div className="space-y-2 max-w-3xl">
        <h3 className="text-xl lg:text-xl leading-[150%] font-[300] mb-2 md:mb-3">
          Access Loans, Savings & More Instantly
        </h3>

        <p className=" text-xl lg:text-2xl font-[300] fontsemibold leading-[#150]">
          Dial <span className="font-bold">*789*712#</span> to manage your
          account, apply for a loan, or check your balance—anytime, anywhere, on
          any phone. No internet? No problem. Ubuntu Capital is just a dial
          away.
        </p>
      </div>

      {/* CTA Button */}
      <button className="lg:border-2 border-white rounded-full lg:px-6 lg:py-2 font-semibold hover:bg-white hover:text-[#120B27] transition-colors">
        <span className="lg:hidden">
          <Icon icon={"maki:arrow"} />
        </span>
        <span className="hidden lg:block text-xl leading-[150%] font-[300]">
          Start now
        </span>
      </button>
    </div>
  );
}
