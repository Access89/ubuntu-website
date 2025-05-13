import Hero from "@/components/landing/Hero";
import Impact from "@/components/landing/Impact";
import CallToAction from "@/components/landing/CallToAction";
import Mission from "@/components/landing/Mission";
import Faq from "@/components/shared/FAQ";
import LoanOffers from "@/components/loans/LoanOffers";
import HeroCards from "@/components/landing/HeroCards";

function Landing() {
  return (
    <div className="bg-white min-h-screen">
      <main>
        <Hero />
        <HeroCards />
        <LoanOffers />
        <div className="max-w-7xl mx-auto">
          <Impact />
          <CallToAction />
          <Mission />
          <Faq />
        </div>
      </main>
    </div>
  );
}

export default Landing;
