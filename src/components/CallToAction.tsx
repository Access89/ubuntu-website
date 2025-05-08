export default function CallToAction() {
  return (
    <div className="bg-[#225EA6] text-white rounded-3xl p-6 md:p-8 lg:p-10 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="space-y-2 max-w-3xl">
        <h3 className="text-[17px] font-semibold mb-4">
          Access Loans, Savings & More Instantly
        </h3>

        <p className="text-lg font-semibold leading-snug">
          Dial <span className="font-bold">*789*712#</span> to manage your
          account, apply for a loan, or check your balance—anytime, anywhere, on
          any phone. No internet? No problem. Ubuntu Capital is just a dial
          away.
        </p>
      </div>

      {/* CTA Button */}
      <button className="border-2 border-white rounded-full px-6 py-2 font-semibold hover:bg-white hover:text-[#120B27] transition-colors">
        Start now
      </button>
    </div>
  );
}
