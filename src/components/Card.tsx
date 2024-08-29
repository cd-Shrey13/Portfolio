import { twMerge } from "tailwind-merge";

type cardProps = {
  className?: string;
  children: React.ReactNode;
};
export default function Card({ className, children }: cardProps) {
  return (
    <>
      <div className={twMerge("rounded-[12px] bg-[#201e1e] p-4", className)}>
        {children}
      </div>
    </>
  );
}
