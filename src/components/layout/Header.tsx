import { ChevronLeftIcon, XIcon } from "@/components/ui/Icon";
import { cn } from "@/utils/cn";
import { IconButton, IconButtonProps } from "../ui/IconButton";

interface HeaderProps extends React.ComponentPropsWithoutRef<"nav"> {}

const HeaderImpl = ({ children, className, ...props }: HeaderProps) => {
  return (
    <nav
      className={cn("flex h-[52px] items-center justify-between", className)}
      {...props}
    >
      {children}
    </nav>
  );
};

const HeaderPreviousButton = ({ ...props }: IconButtonProps) => {
  return (
    <IconButton size="large" {...props}>
      <ChevronLeftIcon />
    </IconButton>
  );
};

const HeaderCloseButton = ({ ...props }: IconButtonProps) => {
  return (
    <IconButton size="large" {...props}>
      <XIcon />
    </IconButton>
  );
};

export const Header = Object.assign(HeaderImpl, {
  Previous: HeaderPreviousButton,
  Close: HeaderCloseButton,
});
