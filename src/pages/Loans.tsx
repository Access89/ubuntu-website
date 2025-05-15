import Faq from "@/components/shared/FAQ";
import LoanOffers from "@/components/loans/LoanOffers";
import LoansHero from "@/components/loans/loansHero";
import { LoanCalculator } from "@/components/loans/loan-calculator";

function Loans() {
  return (
    <div>
      <LoansHero type="loan" />
      <LoanOffers type="loan" />
      <LoanCalculator />
      <Faq />
    </div>
  );
}
export default Loans;
