import Card from "../../components/Card";
import Picture from "../../assets/profile-pic (2).png";
import FrontendIllustration from "../../assets/Developer activity-bro.svg";
import BackendIllustration from "../../assets/Cloud hosting-pana.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
// import Button from "../../components/Button";
// import Arrow from "../../assets/Arrow.svg";
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
      <section className="animate_section w-full bg-[var(--color-black-background)]">
        <div className="auto-rows-[minmax(1fr, 2fr)] grid grid-cols-2 gap-4 p-4 md:gap-8 md:p-8">
          <Card className="animate col-span-2 flex flex-col items-center justify-between gap-4 transition-all duration-1000 ease-in-out md:gap-8">
            <div
              className={twMerge(
                "my-4 md:my-12 flex w-full items-center justify-between gap-4 md:gap-8",
                accordaintVisibility ? "flex-col" : "",
              )}
            >
              <span
                className={twMerge(
                  "flex w-[40%] items-center justify-center",
                  accordaintVisibility ? "w-full" : "",
                )}
              >
                <img
                  className="size-32 md:size-52"
                  src={Picture}
                  alt="Pictue of Me!"
                />
              </span>

              <div
                className={twMerge(
                  "flex w-[60%] flex-col items-start justify-center gap-2 md:space-y-4",
                  accordaintVisibility ? "w-full items-center text-center" : "",
                )}
              >
                <h1 className="name text-nowrap bg-gradient-to-b from-[#ffffff] to-[#ffffff] bg-clip-text font-Poppins text-2xl font-[800]  text-transparent md:text-5xl md:leading-[3.5rem]">
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

          <Card className="animate col-start-1 row-start-2 flex flex-col items-center justify-center gap-4">
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

          <Card className="animate col-start-2 row-start-2 flex flex-col items-center justify-center gap-4">
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
