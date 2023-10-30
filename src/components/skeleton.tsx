import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ISkeleton extends ComponentProps<"div"> {}

export function Skeleton({ className, ...props }: ISkeleton) {
  return (
    <div
      className={twMerge("animate-pulse rounded-md bg-zinc-50/10", className)}
      {...props}
    />
  );
}
