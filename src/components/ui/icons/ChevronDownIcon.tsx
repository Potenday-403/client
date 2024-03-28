import { iconbutton } from "@/types/iconbutton";
import { ChevronDown } from "lucide-react";

export function ChevronDownIcon({ onClick, size }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <ChevronDown
        className={
          size === "32px" ? "h-8 w-8" : size === "24px" ? "h-6 w-6" : "h-5 w-5"
        }
      />
    </button>
  );
}
