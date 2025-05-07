import Header from "./assets/images/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Impact from "./components/Impact";
import CallToAction from "./components/CallToAction";
import Mission from "./components/Mission";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <div className="max-w-7xl mx-auto">
          <Impact />
          <CallToAction />
          <Mission />
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
