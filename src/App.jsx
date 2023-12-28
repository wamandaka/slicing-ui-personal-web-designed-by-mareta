import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import ProjectDesign from "./components/ProjectDesign";
import ProjectCode from "./components/ProjectCode";
import Skill from "./components/Skill";
import Socmed from "./components/Socmed";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <ProjectDesign />
      <ProjectCode />
      <Skill />
      <Socmed />
      <Footer />
    </>
  );
}

export default App;
