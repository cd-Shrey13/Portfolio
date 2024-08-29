import { twMerge } from "tailwind-merge";

interface buttonProps {
  className?: string;
  children: string;
}

export default function Button({ className, children }: buttonProps) {
  return (
    <>
      <button
        type="button"
        className={twMerge(
          "rounded-[12px] bg-[#2a8aff] px-6 py-2 font-Poppins font-[600] text-white transition-all hover:bg-[#3c7ecf]",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
}
