import { twMerge } from "tailwind-merge";

export default function Card({ className, children }) {
  return (
    <>
      <div className={twMerge("rounded-[12px] bg-(--color-background-primary) p-4 text-white ", className)}>
        {children}
      </div>
    </>
  );
}
