import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster position="top-center" />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Nav />
            <div className="bg-[#0A0A0A] backdrop-blur-md max-w-340 mx-auto">
              <Header />
              <About />
              <Skills />
              <Project />
              <Contact />
            </div>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;