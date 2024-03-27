import { iconbutton } from "@/types/iconbutton";
import { MoveRight } from "lucide-react";

export function MoveRightIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <MoveRight className="h-5 w-5 " />
    </button>
  );
}
