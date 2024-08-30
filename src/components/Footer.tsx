import resumePdf from "../assets/Resume_Shrey_Prajapati.pdf";
export default function Footer() {
  return (
    <>
      <div className="mt-8 flex w-full flex-col items-start justify-center gap-4 bg-[var(--color-black-background)] p-4 text-white">
        <span>
          <p className="tracking-widest">💌CONTACT ME</p>
          <p className="w-full font-Cascadia text-[12px] text-white">
            <a
              href="mailto:shreyprajapati13@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              shreyprajapati13@gmail.com
            </a>
          </p>
        </span>
        <span>
          <p className="tracking-widest">🤝LET'S CONNECT</p>
          <p className="w-full flex items-center justify-start gap-4 font-Cascadia text-[12px] text-white">
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

        <span>
          <p className="tracking-widest">MADE WITH ❤️</p>
          <p className="w-full font-Cascadia text-[12px] text-white">
            By Shrey Prajapati
          </p>
        </span>
      </div>
    </>
  );
}
