import { twMerge } from "tailwind-merge";
import { nameLogo, mailLogo } from "../assets/asset.js";

export default function Navbar({ className }) {
  return (
    <>
      <nav
        className={twMerge(
          "flex h-[10vh] w-full items-center justify-between bg-[rgba(11,11,11,.25)] px-4 md:px-8",
          className,
        )}
      >
        <div className="flex items-center justify-center">
          <img src={nameLogo} alt="Logo" className="md:h-6" />
        </div>

        <span>
          <a
            href="mailto:shreyprajapati13@gmail.com"
            title="Send Mail"
            rel="noreferrer"
          >
            <img src={mailLogo} alt="Mail" className="md:size-16 lg:size-12" />
          </a>
        </span>
      </nav>
      {/* <span className="h-1 w-[100%] lg:border-b lg:border-solid lg:border-[#d9d9d9]"></span> */}
    </>
  );
}
