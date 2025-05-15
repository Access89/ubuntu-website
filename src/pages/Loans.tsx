import Faq from "@/components/shared/FAQ";
import LoanOffers from "@/components/loans/LoanOffers";
import LoansHero from "@/components/loans/loansHero";
import { LoanCalculator } from "@/components/loans/loan-calculator";

function Loans() {
  return (
    <div>
      <LoansHero type="loan" />
      <LoanOffers type="loan" />
      <div>
        <div className="max-w-7xl mx-auto mt-12 gap-6 px-6 sm:px-12 lg:px-0">
          {/* Section Header */}
          <div id="loan-calculator" className="mb-10 text-left md:text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Loan Calculator
            </h2>
            <p className="text-[#929292] mt-2 text-lg md:text-xl">
              Estimate your monthly payments and find the loan that works for
              you.
            </p>
          </div>

          <LoanCalculator />
        </div>
      </div>

      <Faq />
    </div>
  );
}
export default Loans;
