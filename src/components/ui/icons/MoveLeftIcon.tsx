import { iconbutton } from "@/types/iconbutton";
import { MoveLeft } from "lucide-react";

export function MoveLeftIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <MoveLeft className="h-5 w-5 " />
    </button>
  );
}
