import { useGSAP } from "@gsap/react";
import About from "./About";
import Projects from "../pages/Home/Projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalContainer() {
  useGSAP(() => {
    const sections = gsap.utils.toArray('.horizonal-scroll_section');
    console.log(sections)

    gsap.to(sections,{
    xPercent: -100 * ( sections.length - 1 ),
    ease: 'none',
    scrollTrigger:{
      trigger: '.horizontal_scroll__wrapper',
      pin: true,
      scrub: true,
      end: '+=2400',
    }
    })
  })
  return (
    <div className="horizontal_scroll__wrapper overflow-x-hidden">
      <div
        className="horizontal_scroll_container h-[100vh] flex flex-row  w-[200vw]"
      >
        <About />
        <Projects />
      </div>
    </div>
  );
}
