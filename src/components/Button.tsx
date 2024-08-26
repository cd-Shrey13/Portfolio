interface buttonProps {
  className?: string;
  children: string;
}

export default function Button({ className, children }: buttonProps) {
  return (
    <>
      <button type="button" className={className}>
        {children}
      </button>
    </>
  );
}