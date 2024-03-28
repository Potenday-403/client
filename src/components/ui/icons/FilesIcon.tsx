import { iconbutton } from "@/types/iconbutton";
import { Files } from "lucide-react";

export function FilesIcon({ onClick, size }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Files className={size === "24px" ? "h-6 w-6" : "h-5 w-5"} />
    </button>
  );
}
