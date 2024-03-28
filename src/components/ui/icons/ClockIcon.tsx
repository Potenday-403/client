import { iconbutton } from "@/types/iconbutton";
import { Clock } from "lucide-react";

export function ClockIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Clock className="h-6 w-6 " />
    </button>
  );
}
