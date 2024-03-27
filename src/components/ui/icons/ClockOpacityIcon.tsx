import { iconbutton } from "@/types/iconbutton";
import { Clock } from "lucide-react";

export function ClockOpacityIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Clock className="h-6 w-6 opacity-50" />
    </button>
  );
}
