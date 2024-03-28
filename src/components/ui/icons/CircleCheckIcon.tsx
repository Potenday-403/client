import { iconbutton } from "@/types/iconbutton";
import { CircleCheck } from "lucide-react";

export function CircleCheckIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <CircleCheck className="h-6 w-6" />
    </button>
  );
}
