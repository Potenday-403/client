import { iconbutton } from "@/types/iconbutton";
import { CirclePlus } from "lucide-react";

export function CirclePlusOpacityIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <CirclePlus className="h-6 w-6 opacity-50 " />
    </button>
  );
}
