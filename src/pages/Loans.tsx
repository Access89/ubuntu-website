import Faq from "@/components/FAQ";
import LoanOffers from "@/components/loans/LoanOffers";
import LoansHero from "@/components/loans/loansHero";

function Loans() {
  return (
    <div>
      <LoansHero />
      <LoanOffers />
      <Faq />
    </div>
  );
}
export default Loans;
