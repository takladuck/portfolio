"use client";

import React, { useState } from "react";
import Image from "next/image";

type AvatarSize = "sm" | "md" | "lg";

type AvatarProps = {
  src?: string | null;
  alt?: string;
  name: string;
  size?: AvatarSize;
  animate?: boolean;
  className?: string;
};

const sizeMap: Record<AvatarSize, { outer: string; inner: string; text: string; px: number }> = {
  sm: { outer: "size-14", inner: "size-12", text: "text-base", px: 48 },
  md: { outer: "size-24", inner: "size-[86px]", text: "text-2xl", px: 86 },
  lg: { outer: "size-36", inner: "size-[132px]", text: "text-4xl", px: 132 },
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  className = "",
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);
  const { outer, inner, text, px } = sizeMap[size];

  return (
    <div
      className={[
        "relative inline-flex items-center justify-center rounded-xl border border-border-strong bg-bg-elevated p-1 shadow-sm",
        outer,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      {src && !imageError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt || name}
          onError={() => setImageError(true)}
          className={`${inner} rounded-lg object-cover transition-all duration-200 hover:scale-[1.02]`}
        />
      ) : (
        <span
          className={[
            "flex items-center justify-center rounded-lg border border-border",
            "bg-bg-subtle font-mono font-semibold text-text",
            inner,
            text,
          ].join(" ")}
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}
