import { Badge } from "./ui/Badge";
import { MoveLeftIcon } from "./ui/icons/MoveLeftIcon";
import { MoveRightIcon } from "./ui/icons/MoveRightIcon";

export function WithCard() {
  return (
    <div className="flex h-[102px] w-[330px]">
      <div className="flex flex-col items-center">
        <p className="mb-[10px]  text-sm">2023.03.10</p>
        <div className="h-16 w-1 bg-accents-1"></div>
      </div>
      <div className="ml-4 w-full rounded-lg bg-accents-0 pl-4 pt-3">
        <Badge
          bgcolor="white"
          text="김밤비님으로부터"
          textcolor="primary"
          icon={<MoveLeftIcon></MoveLeftIcon>}
          // icon={<MoveRightIcon></MoveRightIcon>}
        />
        <p>김인간 생일</p>
        <p>오마카세 150,000원</p>
      </div>
    </div>
  );
}
