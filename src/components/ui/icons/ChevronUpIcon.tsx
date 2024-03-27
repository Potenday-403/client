import { iconbutton } from "@/types/iconbutton";
import { ChevronUp } from "lucide-react";

export function ChevronUpIcon({ onClick, size }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <ChevronUp
        className={
          size === "32px" ? "h-8 w-8" : size === "24px" ? "h-6 w-6" : "h-5 w-5"
        }
      />
    </button>
  );
}
