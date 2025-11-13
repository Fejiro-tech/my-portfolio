
import "./App.css";
import Nav from "./components/Nav";
import Header, { bgStyle } from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <div style={bgStyle} className=" overflow-y-scroll scrollbar-hide h-screen pt-4 lg:pt-12">
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
