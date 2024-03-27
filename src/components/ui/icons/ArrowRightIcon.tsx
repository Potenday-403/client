import { iconbutton } from "@/types/iconbutton";
import { ArrowRight } from "lucide-react";

export function ArrowRightIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <ArrowRight className="h-6 w-6 " />
    </button>
  );
}
