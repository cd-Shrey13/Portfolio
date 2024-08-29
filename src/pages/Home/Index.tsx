import Hero from "./Hero";
import Navbar from "../../components/Navbar";
import Techstack from "./Techstack";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Footer from "../../components/Footer";
// import HorizontalContainer from "./components/HorizontalContainer";
// import Projects from "./components/Projects";

function Index() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Techstack />
        <Projects />
        <Blogs />
      </main>
      <footer>
        <Footer />
      </footer>
      {/* <HorizontalContainer /> */}
    </>
  );
}

export default Index;
