import { SearchIcon } from "@/components/ui/Icon";
import { Card } from "../ui/Card";
import { Divider } from "../ui/Divider";

interface RecommendInputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const RecommendInput = ({
  className,
  children,
  ...props
}: RecommendInputProps) => {
  return (
    <Card className={className}>
      <Card.Content className="flex flex-col">
        <div className="relative flex items-center">
          <SearchIcon className="absolute top-0 w-5" />
          <input
            className="w-full bg-inherit pb-[10px] pl-7 placeholder:text-accents-3 focus-visible:outline-none"
            {...props}
          />
        </div>
        <Divider />
        <div className="mt-2 flex flex-wrap gap-3">{children}</div>
      </Card.Content>
    </Card>
  );
};
