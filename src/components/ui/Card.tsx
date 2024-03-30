import { cn } from "@/utils/cn";
import React from "react";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-lg bg-accents-0", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
CardRoot.displayName = "Card";

interface CardContentProps extends React.ComponentPropsWithoutRef<"div"> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-4", className)} {...props}>
        {children}
      </div>
    );
  },
);
CardContent.displayName = "Card.Content";

export const Card = Object.assign(CardRoot, {
  Content: CardContent,
});
