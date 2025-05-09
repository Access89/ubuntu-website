import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Investments from "./pages/Investments";
import Landing from "./pages/Landing";
import Loans from "./pages/Loans";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const isLandingPage = window.location.pathname === "/";

  return (
    <div className="bg-white min-h-screen">
      {!isLandingPage && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!isLandingPage && <Footer />}
    </div>
  );
};

export default App;
