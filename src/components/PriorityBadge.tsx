import { PRIORITY, PRIORITY_LABEL, Priority } from "@/models/shared";
import React from "react";
import { Badge } from "./ui/Badge";

const badgeVariant = {
  [PRIORITY.CRUCIAL]: "red",
  [PRIORITY.IMPORTANT]: "yellow",
  [PRIORITY.NORMAL]: "green",
} as const;

interface PriorityBadgeProps extends React.ComponentPropsWithoutRef<"div"> {
  priority: Priority;
}

export const PriorityBadge = ({
  className,
  children,
  priority,
  ...props
}: PriorityBadgeProps) => {
  return (
    <Badge variant={badgeVariant[priority]} className={className} {...props}>
      {PRIORITY_LABEL[priority]}
    </Badge>
  );
};
