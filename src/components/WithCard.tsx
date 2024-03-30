import { Badge } from "@/components/ui/Badge";
import { MoveRightIcon } from "@/components/ui/Icon";
import { Card } from "./ui/Card";

export function WithCard() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col items-center">
        <p className="mb-[10px] text-sm">2023.03.10</p>
        <div className="h-16 w-1 bg-accents-1"></div>
      </div>
      <Card className="ml-4 w-full">
        <Card.Content className="py-3">
          <Badge
            className="px-3 text-primary"
            variant="white"
            startIcon={<MoveRightIcon />}
          >
            김밤비님으로부터
          </Badge>
          <p className="mt-3">김인간 생일</p>
          <p>오마카세 150,000원</p>
        </Card.Content>
      </Card>
    </div>
  );
}
