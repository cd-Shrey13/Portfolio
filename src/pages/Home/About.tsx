import CurleyBraces from "../../components/CurleyBraces";
import Techstack from "../../components/Techstack";

export default function About() {
  return (
    <>
      <section className="flex items-center justify-center w-full flex-col gap-8">
        
          
        
        <span className="hidden lg:flex z-10 items-center justify-center flex-col gap-8">
          <CurleyBraces>
            About
          </CurleyBraces>
          <article className="space-y-4 w-[100ch]">
            <p className="max-w-55ch w-full text-center font-Cascadia text-[12px] text-white md:text-lg">
              I'm a Full Stack Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product.
            </p>
            <p className="max-w-55ch w-full text-center font-Cascadia text-[12px] text-white md:text-lg">
              Check out some of my work in the Projects section. I also like
              sharing content related to the stuff that I have learned in Web
              Development so it can help other people of the Dev Community.
            </p>
            <p className="max-w-55ch w-full text-center font-Cascadia text-[12px] text-white md:text-lg">
              Feel free to Connect.I'm open to Job opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to contact
              me.
            </p>
          </article>
        </span>
        <Techstack />
      </section>
    </>
  );
}
