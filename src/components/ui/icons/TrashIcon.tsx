import { iconbutton } from "@/types/iconbutton";
import { Trash2 } from "lucide-react";

export function TrashIcon({ onClick, size }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Trash2 className="h-6 w-6" />
    </button>
  );
}
