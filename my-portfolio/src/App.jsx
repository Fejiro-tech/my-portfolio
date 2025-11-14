
import "./App.css";
import Nav from "./components/Nav";
import Header, { bgStyle } from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center"/>
      <Nav />
      <div style={bgStyle} className=" w-full pt-4 lg:pt-12">
        <Header />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
