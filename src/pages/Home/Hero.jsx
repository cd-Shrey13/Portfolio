import {
  picture,
  frontendIllustration,
  backendIllustration,
} from "../../assets/asset.js";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../../components/Button";
import Card from "../../components/Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { Button } from "@/components/ui/button"



export default function Hero() {
  const [accordaintVisibility, setAccordaintVisibility] = useState(false);

  useGSAP(() => {
    gsap.from('.hero_animate',{
      y: 200,
      opacity: 0,
      stagger: .5,
      ease: 'power1.out'
    })
  },[])

  return (
    <>
      <section className="animate_section mt-8 w-full md:mt-0 ">
        <div className="auto-rows-[minmax(1fr, 2fr)] grid grid-cols-2 gap-4 bg-transparent p-4 md:gap-8 md:p-8 lg:flex lg:w-full lg:flex-col">
          <span className="bottom-16 hidden h-full w-full flex-col items-center justify-center gap-2 bg-transparent lg:flex">
            <img
              className="hero_animate size-28 md:size-52 lg:size-64 object-cover rounded-full bg-center"
              src={picture}
              alt="Pictue of Me!"
            />

            <span className="absolute top-auto -z-10 hidden size-140 rounded-full bg-[rgba(77,74,74,0.27)] blur-[300px] lg:block"></span>

            <p className="hero_animate hidden font-Poppins text-3xl text-(--color-font-primary) lg:block font-bold text-shadow-2xs">
              Hello, I'm Shrey👋🏻
            </p>

            <h1 className="hero_animate hidden text-nowrap  text-(--color-font-primary) bg-clip-text font-Poppins text-5xl  text-shadow-lg font-bold  lg:block">
              Full Stack Web Developer
            </h1>

            <p className="hero_animate max-w-55ch hidden w-full text-center font-Cascadia font-bold text-sm text-(--color-font-primary) lg:block">
              I code Beautifully simple things and I love what I do.
              <br />
              📍🇮🇳
            </p>
          </span>

          <Card
            className={twMerge(
              "col-span-2 flex w-full items-center justify-between gap-4 py-8 md:my-12 md:gap-8 lg:hidden",
              accordaintVisibility ? "flex-col" : "",
            )}
          >
            <span className="relative flex w-[40%] items-center justify-center">
              <img
                className="size-28 md:size-52 lg:size-64 rounded-full"
                src={picture}
                alt="Pictue of Me!"
              />
            </span>

            <div
              className={twMerge(
                "flex w-[60%] flex-col items-start justify-center gap-2 md:space-y-4",
                accordaintVisibility
                  ? "w-full items-center justify-evenly gap-4 text-center"
                  : "",
              )}
            >
              <h1 className="font-Poppins text-2xl font-extrabold md:text-5xl md:leading-14">
                Shrey Prajapati
              </h1>
              <p className="w-full font-Cascadia text-xs md:text-xl">
                Student at
                <br className="md:hidden" /> L.D. College of Engineering
              </p>

              {accordaintVisibility && (
                <article className="space-y-4">
                  <p className="max-w-60ch w-full text-center font-Cascadia text-[12px] text-(--color-font-primary) md:text-lg">
                    I'm a Full Stack Web Developer building the Front-end of
                    Websites and Web Applications that leads to the success of
                    the overall product. <br />
                    Check out some of my work in the Projects section. I also
                    like sharing content related to the stuff that I have
                    learned in Web Development so it can help other people of
                    the Dev Community. <br />
                    Feel free to Connect.I'm open to Job opportunities where I
                    can contribute, learn and grow. If you have a good
                    opportunity that matches my skills and experience then don't
                    hesitate to contact me.
                  </p>
                </article>
              )}
              <Button onClick={() => {
                setAccordaintVisibility((prev) => !prev)
              } }
                className="mt-2 bg-(--color-button-primary) border-1 border-purple-200"
              >
                {accordaintVisibility ? "Read Less" : "Read More"}
              </Button>
            </div>
          </Card>

          <Card className="col-start-1 row-start-2 flex flex-col items-center justify-center gap-4 lg:hidden">
            <span className="items-cente flex justify-center">
              <img
                className="size-24 md:size-44"
                src={frontendIllustration}
                alt="image"
              />
            </span>

            <span>
              <p className="w-full text-center font-Cascadia text-[12px] md:text-lg">
                Frontend <br />
                Web Development
              </p>
            </span>
          </Card>

          <Card className="col-start-2 row-start-2 flex flex-col items-center justify-center gap-4 lg:hidden">
            <span className="items-cente flex justify-center">
              <img
                className="h-24 md:h-44"
                src={backendIllustration}
                alt="image"
              />
            </span>

            <span>
              <p className="w-full text-center font-Cascadia text-[12px] md:text-lg">
                Backend <br />
                Web Development
              </p>
            </span>
          </Card>
        </div>
      </section>
    </>
  );
}
