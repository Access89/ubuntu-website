import Landing from "./pages/Landing";
import Loans from "./pages/Loans";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/fleet" element={<Loans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
