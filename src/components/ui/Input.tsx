import { cn } from "@/utils/cn";
import React from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-[33px] w-full border-b border-[#D9D9D9] pb-2",
          "placeholder:text-accents-4",
          "focus-visible:outline-none",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
