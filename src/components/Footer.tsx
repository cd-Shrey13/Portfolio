import resumePdf from "../assets/Resume_Shrey_Prajapati.pdf";
export default function Footer() {
  return (
    <>
      <div className=" flex w-full max-w-[1024px] flex-col items-start justify-center gap-4 bg-(--color-black-background) p-8  md:gap-8 md:p-8 lg:mt-0 lg:flex-row lg:justify-between ">
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
              href="https://www.linkedin.com/in/shreyp13"
              target="_blank"
              rel="noreferrer"
            >
              LinkdIn
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
