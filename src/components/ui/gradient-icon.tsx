import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface GradientIconProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
}

export function GradientIcon({ children, className, size = 24 }: GradientIconProps) {
  const gradId = useId();

  return (
    <>
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--gradient-start))" />
            <stop offset="100%" stopColor="hsl(var(--gradient-end))" />
          </linearGradient>
        </defs>
      </svg>

      {React.cloneElement(children as React.ReactElement, {
        className: cn(className, (children as any)?.props?.className),
        size: size,
        color: `url(#${gradId})`,
        ...(children as any)?.props,
      })}
    </>
  );
}
