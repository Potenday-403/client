import { iconbutton } from "@/types/iconbutton";
import { CalendarPlus } from "lucide-react";

export function CalendarPlusIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <CalendarPlus className="h-6 w-6" />
    </button>
  );
}
