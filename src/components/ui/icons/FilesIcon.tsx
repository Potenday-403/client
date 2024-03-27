import { iconbutton } from "@/types/iconbutton";
import { Files } from "lucide-react";

export function FilesIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Files className="h-6 w-6" />
    </button>
  );
}
