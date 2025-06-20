import resumePdf from "../assets/Resume_Shrey_Prajapati.pdf";
export default function Footer() {
  return (
    <>
      <div className=" flex w-full  flex-col items-start justify-center gap-4 p-8  md:gap-8 md:p-8 lg:w-[1024px] lg:mt-0 lg:flex-row lg: rounded-2xl lg:mb-4 lg:justify-between bg-(--color-background-primary)">
        <span className="flex-col items-center justify-center lg:flex ">
          <p className="tracking-widest md:text-xl">💌CONTACT ME</p>
          <p className="max-w-60ch w-full text-center font-Cascadia text-[12px]  md:text-lg">
            <a
              href="mailto:shreyprajapati13@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              shreyprajapati13@gmail.com
            </a>
          </p>
        </span>
        <span className="relative lg:-left-10 flex-col items-center justify-center lg:flex ">
          <p className="tracking-widest md:text-xl">LET'S CONNECT🫱🏼‍🫲🏼</p>
          <p className="max-w-60ch flex w-full items-center justify-start gap-4 text-center font-Cascadia text-[12px]  md:text-lg">
            <a href={resumePdf} target="_blank" rel="noreferrer">
              Resume
            </a>
            |
            <a
              href="https://github.com/cd-Shrey13/"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            |
            <a
              href="https://x.com/Shrey_Lad03"
              rel="noreferrer"
              target="_blank"
            >
              X
            </a>
          </p>
        </span>

        <span className="relative lg:-left-16 flex-col items-center justify-center lg:flex ">
          <p className="tracking-widest md:text-xl">MADE WITH ❤️</p>
          <p className="max-w-60ch w-full text-center font-Cascadia text-[12px]  md:text-lg">
            By Shrey Prajapati
          </p>
        </span>
      </div>
    </>
  );
}
