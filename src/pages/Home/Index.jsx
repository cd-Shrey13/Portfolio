import Hero from "./Hero";
import Navbar from "../../components/Navbar";
import Projects from "./ProjectSection";
import Footer from "../../components/Footer";
import About from "./AboutSection";

function Index() {
  return (
    <>
      <main className="flex flex-col lg:mt-36 lg:mb-24 lg:gap-36">
        <Hero />
        <About />
        <Projects />
      </main>
      <footer className="justify-center lg:mb-4 lg:flex">
        <Footer />
      </footer>
    </>
  );
}

export default Index;
