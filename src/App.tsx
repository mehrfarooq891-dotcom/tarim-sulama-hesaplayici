import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Calendar from "./pages/Calendar";
import DripIrrigation from "./pages/DripIrrigation";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
          <Navbar />
          <main className="flex-1 pt-24 lg:pt-32">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/rehber" element={<PageWrapper><Guide /></PageWrapper>} />
                <Route path="/takvim" element={<PageWrapper><Calendar /></PageWrapper>} />
                <Route path="/damla-sulama" element={<PageWrapper><DripIrrigation /></PageWrapper>} />
                <Route path="/hakkimizda" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/sss" element={<PageWrapper><FAQ /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
