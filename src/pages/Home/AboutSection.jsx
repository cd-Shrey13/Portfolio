import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Techstack from "../../components/Techstack";

export default function AboutSection() {
  let navigate = useNavigate();
  return (
    <>
      <section className="about text-muted-forground flex w-full flex-col items-center justify-center gap-8">
        <span className="z-10 hidden flex-col items-center justify-center gap-8 lg:flex">
          <h2 className="name font-Poppins bg-linear-to-b from-[#ffffff] to-[#ffffff] bg-clip-text text-2xl font-extrabold text-transparent md:text-5xl md:md:leading-22 lg:font-semibold">
            About
          </h2>

          <article className="about_animate w-[100ch] space-y-4">
            <p className="max-w-55ch w-full text-center font-sans text-[12px] text-white md:text-lg">
              I'm a Full Stack Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product.
            </p>
            <p className="max-w-55ch w-full text-center font-sans text-[12px] text-white md:text-lg">
              Check out some of my work in the Projects section. I also like
              sharing content related to the stuff that I have learned in Web
              Development so it can help other people of the Dev Community.
            </p>
            <p className="max-w-55ch w-full text-center font-sans text-[12px] text-white md:text-lg">
              Feel free to Connect.I'm open to Job opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to contact
              me.
            </p>
          </article>
          <Button
            onClickHandler={() => navigate("/about")}
            className="transform border-[1px] border-solid border-(--color-button-border) bg-(--color-button-primary) text-(--color-font-primary) transition duration-300 ease-in-out hover:translate-y-1 hover:bg-(--color-button-hover) active:bg-(--color-button-active)"
          >
            Know More
          </Button>
        </span>
        <Techstack />
      </section>
    </>
  );
}
