"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-[13px]",
  md: "px-5 py-2.5 text-[14px]",
  lg: "px-6 py-3 text-[15px]",
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "size-8 text-[14px]",
  md: "size-10 text-[16px]",
  lg: "size-12 text-[18px]",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-accent text-white font-medium",
    "border border-accent-hover/30",
    "hover:bg-accent-hover",
    "shadow-sm active:scale-[0.98]",
  ].join(" "),
  secondary: [
    "bg-bg-elevated border border-border text-text",
    "hover:bg-bg-subtle hover:border-border-strong",
    "shadow-xs active:scale-[0.98]",
  ].join(" "),
  ghost: [
    "bg-transparent text-text-muted",
    "hover:text-text hover:bg-bg-subtle",
  ].join(" "),
  icon: [
    "bg-bg-elevated border border-border text-text-muted",
    "hover:text-text hover:bg-bg-subtle hover:border-accent/40",
  ].join(" "),
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    disabled = false,
    children,
    ...rest
  } = props;

  const isIcon = variant === "icon";

  const baseClasses = [
    "relative inline-flex items-center justify-center gap-2",
    "rounded-lg font-medium cursor-pointer",
    "transition-all duration-150",
    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    isIcon ? iconSizeClasses[size] : sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const motionProps = {
    whileTap: disabled ? undefined : { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 450, damping: 30 },
  };

  if ("href" in rest && rest.href != null) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    const isExternal =
      typeof href === "string" &&
      (href.startsWith("http") || href.startsWith("mailto:"));

    const externalProps = isExternal
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {};

    return (
      <motion.span {...motionProps} className="inline-flex">
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={baseClasses}
          aria-disabled={disabled || undefined}
          {...externalProps}
          {...linkRest}
        >
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      disabled={disabled}
      {...motionProps}
      {...(rest as Omit<ButtonAsButton, keyof ButtonBaseProps>)}
    >
      {children}
    </motion.button>
  );
});
