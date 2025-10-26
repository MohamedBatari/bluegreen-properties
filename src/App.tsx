import { Route, Routes } from "react-router-dom";
import { ToTop } from "./components/ToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      {/* Fixed header at top */}
      <Navbar />

      {/* Page content offset by header height */}
      <main className="flex-1 pt-20 md:pt-24 -mt-px bg-gradient-to-b from-sky-50 via-white to-emerald-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <ToTop />
    </div>
  );
}
