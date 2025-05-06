import Header from "./components/Header";
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
        <Impact />
        <CallToAction />
        <Mission />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
