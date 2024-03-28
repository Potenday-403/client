import { iconbutton } from "@/types/iconbutton";
import { CircleX } from "lucide-react";

export function CircleXIcon({ onClick, size }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <CircleX className="h-6 w-6" />
    </button>
  );
}
