import { cn } from "@/utils/cn";
import { CheckIcon } from "@/components/ui/Icon";

interface CheckIndicatorProps extends React.ComponentPropsWithoutRef<"div"> {
  checked?: boolean;
}

export const CheckIndicator = ({
  className,
  checked,
  ...props
}: CheckIndicatorProps) => {
  return (
    <div
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-full border border-accents-1 bg-white",
        checked && "bg-primary text-white",
        className,
      )}
      {...props}
    >
      {checked && <CheckIcon />}
    </div>
  );
};
