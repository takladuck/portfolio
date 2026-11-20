import React from "react";

type CardProps = {
  children: React.ReactNode;
  glass?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({
  children,
  glass = false,
  className = "",
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        "rounded-xl border border-border bg-bg-elevated transition-colors",
        glass ? "backdrop-blur-md bg-bg-elevated/85" : "",
        "shadow-xs hover:border-border-strong",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
