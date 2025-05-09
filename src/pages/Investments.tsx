import Faq from "@/components/shared/FAQ";
import LoanOffers from "@/components/loans/LoanOffers";
import LoansHero from "@/components/loans/loansHero";

function Investments() {
  return (
    <div>
      <LoansHero type="investment" />
      <LoanOffers type="investment" />
      <Faq />
    </div>
  );
}
export default Investments;
