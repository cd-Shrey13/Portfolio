import { twMerge } from "tailwind-merge";

export default function Card({ className, children }) {
  return (
    <>
      <div className={twMerge("rounded-[12px] bg-(--color-card-primary) p-4 text-(--color-font-primary) border-solid border-[1px] border-(--color-card-border) ", className)}>
        {children}
      </div>
    </>
  );
}
