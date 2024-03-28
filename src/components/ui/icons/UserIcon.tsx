import { iconbutton } from "@/types/iconbutton";
import { SquareUserRound } from "lucide-react";

export function SquareUserRoundIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <SquareUserRound className="h-6 w-6" />
    </button>
  );
}
