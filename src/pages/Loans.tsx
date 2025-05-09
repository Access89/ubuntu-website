import Faq from "@/components/shared/FAQ";
import LoanOffers from "@/components/loans/LoanOffers";
import LoansHero from "@/components/loans/loansHero";

function Loans() {
  return (
    <div>
      <LoansHero type="loan" />
      <LoanOffers type="loan" />
      <Faq />
    </div>
  );
}
export default Loans;
