import { iconbutton } from "@/types/iconbutton";
import { CircleChevronRight } from "lucide-react";

export function CircleChevronRightIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <CircleChevronRight className="h-6 w-6 " />
    </button>
  );
}
