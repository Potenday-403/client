import { iconbutton } from "@/types/iconbutton";
import { CirclePlus } from "lucide-react";

export function CirclePlusIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <CirclePlus className="h-6 w-6" />
    </button>
  );
}
