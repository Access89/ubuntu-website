import Hero from "@/components/landing/Hero";
import Products from "@/components/landing/Products";
import Impact from "@/components/landing/Impact";
import CallToAction from "@/components/landing/CallToAction";
import Mission from "@/components/landing/Mission";
import Faq from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";

function Landing() {
  return (
    <div className="bg-white min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <Products />
        <div className="max-w-7xl mx-auto">
          <Impact />
          <CallToAction />
          <Mission />
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
