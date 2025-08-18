import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import About from './pages/About';
import Investments from './pages/Investments';
import Landing from './pages/Landing';
import Loans from './pages/Loans';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SupportPage from './pages/Support';
import BackToTopButton from './components/shared/BackToTopButton';
import NotFound from './components/shared/NotFound';
import Gallery from './pages/gallery';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
