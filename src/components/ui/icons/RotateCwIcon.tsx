import { iconbutton } from "@/types/iconbutton";
import { RotateCw } from "lucide-react";

export function RotateCwIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <RotateCw className="h-5 w-5 " />
    </button>
  );
}
