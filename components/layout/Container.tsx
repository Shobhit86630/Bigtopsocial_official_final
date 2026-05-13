import type { ReactNode } from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={["mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
