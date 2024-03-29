import { cn } from "@/utils/cn";
import React from "react";

interface SubtitleProps extends React.ComponentPropsWithoutRef<"h2"> {}

export const Subtitle = React.forwardRef<HTMLHeadingElement, SubtitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "mt-2 whitespace-pre-wrap text-[18px] font-medium text-accents-4",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h2>
    );
  },
);
Subtitle.displayName = "Subtitle";
