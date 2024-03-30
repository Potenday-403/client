import { cn } from "@/utils/cn";

interface ProgressBarProps extends React.ComponentPropsWithoutRef<"div"> {
  progress: number;
}

export const ProgressBar = ({
  progress,
  className,
  ...props
}: ProgressBarProps) => {
  return (
    <div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={`${progress}%`}
      className={cn(
        "h-4 w-full overflow-hidden rounded-full bg-accents-1",
        className,
      )}
      {...props}
    >
      <div
        className="h-full rounded-l-full bg-primary transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
