import {
  picture,
  frontendIllustration,
  backendIllustration,
} from "../../assets/asset.js";
import Card from "../../components/Card";
import { redirect, useNavigate } from "react-router-dom";

export default function Hero() {
  let navigate = useNavigate();

  return (
    <>
      <section className="animate_section mt-8 w-full md:mt-0">
        <div className="auto-rows-[minmax(1fr, 2fr)] grid grid-cols-2 gap-4 bg-transparent md:gap-8 lg:flex lg:w-full lg:flex-col">
          <span className="bottom-12 hidden h-full w-full flex-col items-center justify-center gap-2 lg:flex">
            <img
              className="hero_animate size-28 rounded-full bg-center object-cover md:size-52 lg:size-64"
              src={picture}
              alt="Pictue of Me!"
            />

            <span className="absolute top-auto -z-10 hidden size-140 rounded-full bg-[rgba(77,74,74,0.27)] blur-[300px] lg:block"></span>

            <p className="hero_animate font-Poppins hidden text-3xl font-bold text-(--color-font-primary) text-shadow-2xs lg:mt-4 lg:block">
              Hello, I'm{" "}
              <span className="rounded-sm border-[1px] border-amber-700 bg-(--color-font-highlight) px-[4px]">
                Shrey
              </span>
              👋🏻
            </p>

            <h1 className="hero_animate font-Poppins hidden bg-clip-text text-5xl font-bold text-nowrap text-(--color-font-primary) text-shadow-lg lg:block">
              Full Stack Web Developer
            </h1>

            <p className="hero_animate max-w-55ch hidden w-full text-center font-sans text-sm font-bold text-(--color-font-primary) lg:block">
              I code Beautifully simple things and I love what I do.
            </p>
            <a
              href={"mailto:shreyprajapati13@gmail.com"}
              target="_black"
              className="font-Poppins mt-2 rounded-[8px] border-1 border-(--color-button-border) bg-(--color-button-primary) px-4 py-2 text-xs font-semibold text-(--color-font-primary) transition-all hover:cursor-pointer hover:bg-(--color-button-hover) md:px-6 md:py-3 md:text-base"
            >
              Contact Now
            </a>
          </span>

          <Card
            className={
              "col-span-2 flex w-full items-center justify-between gap-4 py-8 md:my-12 md:gap-8 lg:hidden"
            }
          >
            <span className="relative flex w-[40%] items-center justify-center">
              <img
                className="size-28 rounded-full md:size-52 lg:size-64"
                src={picture}
                alt="Pictue of Me!"
              />
            </span>

            <div
              className={
                "flex w-[60%] flex-col items-start justify-center gap-2 md:space-y-4"
              }
            >
              <h1 className="font-Poppins text-2xl font-extrabold md:text-5xl md:leading-14">
                <span className="rounded-sm border-[1px] border-amber-700 bg-(--color-font-highlight) px-[4px] text-shadow-xs">
                  Shrey
                </span>{" "}
                Prajapati
              </h1>
              <p className="w-full font-sans text-xs md:text-xl">
                Student at
                <br className="md:hidden" /> L.D. College of Engineering
              </p>

              <button
                onClick={() => navigate("/about")}
                className="font-Poppins mt-2 rounded-[8px] border-1 border-(--color-button-border) bg-(--color-button-primary) px-4 py-2 text-xs font-semibold text-(--color-font-primary) transition-all hover:bg-(--color-button-hover) md:px-6 md:py-3 md:text-base"
              >
                Know More
              </button>
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
              <p className="w-full text-center font-sans text-[12px] md:text-lg">
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
              <p className="w-full text-center font-sans text-[12px] md:text-lg">
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
