import Hero from "./Hero";
import Navbar from "../../components/Navbar";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Footer from "../../components/Footer";
import About from "./About";
// import HorizontalContainer from "./components/HorizontalContainer";
// import Projects from "./components/Projects";

function Index() {
  return (
    <>
      <header className="bg- sticky left-0 top-0 z-[999] backdrop-blur-md lg:flex lg:flex-col items-center justify-between">
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Blogs /> */}
      </main>
      <footer className="justify-center lg:mb-4 lg:flex">
        <Footer />
      </footer>
      {/* <HorizontalContainer /> */}
    </>
  );
}

export default Index;
