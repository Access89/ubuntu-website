import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Impact from "@/components/Impact";
import CallToAction from "@/components/CallToAction";
import Mission from "@/components/Mission";
import Faq from "@/components/FAQ";
import Footer from "@/components/Footer";

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
