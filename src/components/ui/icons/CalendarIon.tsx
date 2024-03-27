import { iconbutton } from "@/types/iconbutton";
import { Calendar } from "lucide-react";

export function CalendarIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Calendar className="h-5 w-5 " />
    </button>
  );
}
