import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const iconButtonVariants = cva(
  cn(
    "border border-transparent rounded-md",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",
  ),
  {
    variants: {
      size: {
        medium: "w-6 h-6",
        large: "w-8 h-8",
      },
    },
  },
);

interface IconButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, size, className, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ size, className }))}
        ref={ref}
        type="button"
        role="button"
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        <Slot className={cn(iconButtonVariants({ size }))}>{children}</Slot>
      </button>
    );
  },
);
IconButton.displayName = "IconButton";
