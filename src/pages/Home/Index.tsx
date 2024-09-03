import Hero from "./Hero";
import Navbar from "../../components/Navbar";
import Projects from "./Projects";
import Footer from "../../components/Footer";
import About from "./About";

function Index() {
  return (
    <>
      <header className="bg- sticky left-0 top-0 z-[999] items-center justify-between backdrop-blur-md lg:flex lg:flex-col">
        <Navbar />
      </header>
      <main>
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
