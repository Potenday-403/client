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
        "flex h-6 min-w-6 items-center justify-center rounded-full border-[1.5px] border-accents-1 bg-white",
        checked && "border-yellow-light bg-primary text-white",
        className,
      )}
      {...props}
    >
      {checked && <CheckIcon className="w-4 translate-y-[1px]" />}
    </div>
  );
};
