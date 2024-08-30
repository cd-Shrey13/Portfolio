import { twMerge } from "tailwind-merge";

interface buttonProps {
  className?: string;
  children: string;
  onClickHandler?: any;
}

export default function Button({
  className,
  children,
  onClickHandler,
}: buttonProps) {
  return (
    <>
      <button
        type="button"
        className={twMerge(
          "rounded-[8px] bg-[#2a8aff] px-4 py-2 font-Poppins text-xs font-[600] text-white transition-all hover:bg-[#3c7ecf] md:px-6 md:py-3 md:text-base",
          className,
        )}
        onClick={onClickHandler}
      >
        {children}
      </button>
    </>
  );
}
