import { cn } from "@/utils/cn";

interface HeaderProps extends React.ComponentPropsWithoutRef<"nav"> {}

export const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <nav
      className={cn("flex h-[52px] items-center justify-between", className)}
      {...props}
    >
      {children}
    </nav>
  );
};
