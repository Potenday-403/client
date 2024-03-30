import { cn } from "@/utils/cn";
import React from "react";

interface DividerProps extends React.ComponentPropsWithoutRef<"hr"> {}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn("border-t border-accents-1", className)}
        {...props}
      />
    );
  },
);
Divider.displayName = "Divider";
