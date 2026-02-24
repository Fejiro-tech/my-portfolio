
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
      <div  className="bg-black/80 backdrop-blur-md max-w-340 mx-auto ">
        <Header />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
