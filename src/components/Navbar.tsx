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
          " flex h-[10vh] w-full items-center justify-between bg-[rgba(11,11,11,.25)] px-4 md:px-8 ",
          className,
        )}
      >
         <span className="hidden lg:block">
          <a href="mailto:shreyprajapati13@gmail.com" title="Send Mail" rel="noreferrer">
            <img src={MailLogo} alt="Mail" className=" md:size-16" />
          </a>
        </span>

        <div className="flex items-center justify-center">
          <img src={NameLogo} alt="Logo" className=" md:h-8" />
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
