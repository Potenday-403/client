import { iconbutton } from "@/types/iconbutton";
import { Plus } from "lucide-react";

export function PlusIcon({ onClick, size }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Plus className={size === "32px" ? "h-8 w-8" : "h-6 w-6"} />
    </button>
  );
}
