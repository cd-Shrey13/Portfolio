import Card from "../../components/Card";
import Picture from "../../assets/profile-pic (2).png";
import FrontendIllustration from "../../assets/Developer activity-bro.svg";
import BackendIllustration from "../../assets/Cloud hosting-pana.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  useGSAP(() => {


    gsap.from(".animate", {
      opacity: 0,
      y: 100,
      stagger: .5,
    });
  }, []);

  return (
    <>
      <section className="animate_section h-[50vh] w-full bg-[var(--color-black-background)]">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
          <Card className="animate col-span-2 flex h-[185px] items-center justify-between">
            <span className="flex w-[40%] items-center justify-center">
              <img className="size-[94px]" src={Picture} alt="Pictue of Me!" />
            </span>

            <div className="flex w-[60%] flex-col items-start justify-center">
              <h1 className="name text-nowrap bg-gradient-to-b from-[#ffffff] to-[#ffffff] bg-clip-text font-Poppins text-[21px] font-[800] leading-[2.8rem] text-transparent">
                Shrey Prajapati
              </h1>
              <p className="w-full font-Cascadia text-[12px] text-white">
                Student at
                <br />
                L.D. College of Engineering
              </p>
              <span></span>
            </div>
          </Card>

          <Card className="animate col-start-1 row-start-2 flex flex-col items-center justify-center gap-4">
            <span className="items-cente flex justify-center">
              <img className="size-24" src={FrontendIllustration} alt="image" />
            </span>

            <span>
              <p className="w-full text-center font-Cascadia text-[12px] text-white">
                Frontend <br />
                Web Development
              </p>
            </span>
          </Card>

          <Card className="animate col-start-2 row-start-2 flex flex-col items-center justify-center gap-4">
            <span className="items-cente flex justify-center">
              <img className="h-24" src={BackendIllustration} alt="image" />
            </span>

            <span>
              <p className="w-full text-center font-Cascadia text-[12px] text-white">
                Frontend <br />
                Web Development
              </p>
            </span>
          </Card>
        </div>
      </section>
    </>
  );
}
