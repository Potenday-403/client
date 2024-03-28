import { iconbutton } from "@/types/iconbutton";
import { Download } from "lucide-react";

export function DownloadIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Download className="h-5 w-5 " />
    </button>
  );
}
