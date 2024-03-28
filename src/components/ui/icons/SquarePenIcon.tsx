import { iconbutton } from "@/types/iconbutton";
import { SquarePen } from "lucide-react";

export function SquarePenIcon({ onClick, size }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <SquarePen className="h-6 w-6" />
    </button>
  );
}
