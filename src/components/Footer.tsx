export default function Footer() {
  return (
    <>
      <div className="mt-8 flex w-full flex-col items-start justify-center bg-[var(--color-black-background)] text-white gap-4 p-4">
        <span>
          <p>💌CONTACT ME</p>
          <p className="w-full font-Cascadia text-[12px] text-white">
            shreyprajapati13@gmail.com
          </p>
        </span>
        <span>
          <p>🤝LET'S CONNECT</p>
          <p>
            <a href="#">Resume</a>|<a href="#">LinkdIn</a>|
            <a href="#">GitHub</a>|<a href="#">X</a>
          </p>
        </span>

        <span>
          <p>MADE WITH ❤️</p>
          <p className="w-full font-Cascadia text-[12px] text-white">
            By Shrey Prajapati
          </p>
        </span>
      </div>
    </>
  );
}
