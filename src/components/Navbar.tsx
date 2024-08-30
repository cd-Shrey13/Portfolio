import NameLogo from "../assets/name.svg";
import MailLogo from "../assets/Mail.svg";
import { twMerge } from "tailwind-merge";

type navProps = {
  className?: string;
};
export default function Navbar({ className }: navProps) {
  return (
    <>
      <nav
        className={twMerge(
          "flex h-[10vh] w-full items-center justify-between bg-[var(--color-black-background)] px-4",
          className,
        )}
      >
        <div className="flex items-center justify-center">
          <img src={NameLogo} alt="Logo" className=" md:h-12"/>
        </div>

        <span>
          <a href="mailto:shreyprajapati13@gmail.com" title="Send Mail" rel="noreferrer">
            <img src={MailLogo} alt="Mail" className=" md:size-16" />
          </a>
        </span>
        
      </nav>
    </>
  );
}
