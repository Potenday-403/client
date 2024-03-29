import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const avatarVariants = cva(cn("rounded-full object-cover"), {
  variants: {
    size: {
      medium: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const avatarSize = {
  medium: 40,
} as const;

interface AvatarProps
  extends React.ComponentPropsWithoutRef<"img">,
    VariantProps<typeof avatarVariants> {
  size?: "medium";
  imageUrl?: string;
}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ imageUrl, size = "medium", className, alt = "Avatar", ...props }, ref) => {
    const Comp = "img";

    const imageSize = avatarSize[size];

    return (
      <Comp
        className={cn(avatarVariants({ size, className }))}
        width={imageSize}
        height={imageSize}
        src={imageUrl}
        alt={alt}
        ref={ref}
        {...props}
      />
    );
  },
);
Avatar.displayName = "Avatar";
