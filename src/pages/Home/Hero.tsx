import Card from "../../components/Card";
import Picture from "../../assets/profile-pic (2).png";
import FrontendIllustration from "../../assets/Developer activity-bro.svg";
import BackendIllustration from "../../assets/Cloud hosting-pana.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../../components/Button";

export default function Hero() {
  const [accordaintVisibility, setAccordaintVisibility] = useState(false);

  useGSAP(() => {
    gsap.from(".animate", {
      opacity: 0,
      y: 100,
      stagger: 0.5,
    });
  }, []);

  return (
    <>
      <section className="animate_section mt-8 w-full bg-[var(--color-black-background)] md:mt-0 lg:my-36 ">
        <div className="auto-rows-[minmax(1fr, 2fr)] grid grid-cols-2 gap-4 p-4 md:gap-8 md:p-8 lg:flex  lg:w-full bg-transparent">
          <Card className="animate col-span-2 flex flex-col items-center justify-between gap-4 transition-all duration-1000 ease-in-out md:gap-8 lg:w-full lg:bg-transparent">
            <div
              className={twMerge(
                "my-4 flex w-full items-center justify-between gap-4 md:my-12 md:gap-8 lg:h-full lg:justify-center lg:my-0",
                accordaintVisibility ? "flex-col" : "",
              )}
            >
              <span
                className={twMerge(
                  "relative lg:bottom-16 flex w-[40%] items-center justify-center lg:h-full lg:w-full lg:flex-col lg:gap-2 lg:bg-transparent  ",
                  accordaintVisibility ? "w-full" : "",
                )}
              >
                <img
                  className="size-28 md:size-52 lg:size-64"
                  src={Picture}
                  alt="Pictue of Me!"
                />

                <span className="hidden lg:block absolute top-auto -z-10 size-[35rem] bg-[rgba(77,74,74,0.27)]   rounded-full blur-[300px]">
                  
                </span>

                <p className="font-Roboto hidden text-3xl font-[50] text-white lg:block">
                  Hello, I'm Shrey👋🏻
                </p>

                <h1 className="hidden text-nowrap bg-gradient-to-b from-[#ffffff] to-[#999999] bg-clip-text font-Poppins text-5xl font-[700] text-transparent lg:block">
                  Full Stack Web Developer
                </h1>

                <p className="hidden lg:block  max-w-55ch w-full text-center font-Cascadia text-[#999999] text-sm">
                  I code Beautifully simple things and I love what I do.
                  <br />📍🇮🇳
                </p>
              </span>

              <div
                className={twMerge(
                  "flex w-[60%] flex-col items-start justify-center gap-2 md:space-y-4 lg:hidden",
                  accordaintVisibility ? "w-full items-center text-center" : "",
                )}
              >
                <h1 className="name text-nowrap bg-gradient-to-b from-[#ffffff] to-[#ffffff] bg-clip-text font-Poppins text-2xl font-[800] text-transparent md:text-5xl md:leading-[3.5rem]">
                  Shrey Prajapati
                </h1>
                <p className="w-full font-Cascadia text-xs text-white md:text-xl">
                  Student at
                  <br className="md:hidden" /> L.D. College of Engineering
                </p>
                <span className="flex flex-col items-center justify-evenly gap-4">
                  {accordaintVisibility && (
                    <span>
                      <article className="space-y-4">
                        <p className="max-w-60ch w-full text-center font-Cascadia text-[12px] text-white md:text-lg">
                          I'm a Full Stack Web Developer building the Front-end
                          of Websites and Web Applications that leads to the
                          success of the overall product.
                        </p>
                        <p className="max-w-60ch w-full text-center font-Cascadia text-[12px] text-white md:text-lg">
                          Check out some of my work in the Projects section. I
                          also like sharing content related to the stuff that I
                          have learned in Web Development so it can help other
                          people of the Dev Community.
                        </p>
                        <p className="max-w-60ch w-full text-center font-Cascadia text-[12px] text-white md:text-lg">
                          Feel free to Connect.I'm open to Job opportunities
                          where I can contribute, learn and grow. If you have a
                          good opportunity that matches my skills and experience
                          then don't hesitate to contact me.
                        </p>
                      </article>
                    </span>
                  )}
                  <Button
                    onClickHandler={() => {
                      setAccordaintVisibility((prev) => !prev);
                    }}
                    className="mt-2"
                  >
                    {accordaintVisibility ? "Read Less" : "Read More"}
                  </Button>
                </span>
              </div>
            </div>
          </Card>

          <Card className="animate col-start-1 row-start-2 flex flex-col items-center justify-center gap-4 lg:hidden">
            <span className="items-cente flex justify-center">
              <img
                className="size-24 md:size-44"
                src={FrontendIllustration}
                alt="image"
              />
            </span>

            <span>
              <p className="w-full text-center font-Cascadia text-[12px] text-white md:text-lg">
                Frontend <br />
                Web Development
              </p>
            </span>
          </Card>

          <Card className="animate col-start-2 row-start-2 flex flex-col items-center justify-center gap-4 lg:hidden">
            <span className="items-cente flex justify-center">
              <img
                className="h-24 md:h-44"
                src={BackendIllustration}
                alt="image"
              />
            </span>

            <span>
              <p className="w-full text-center font-Cascadia text-[12px] text-white md:text-lg">
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
