import { iconbutton } from "@/types/iconbutton";
import { ImagePlus } from "lucide-react";

export function ImagePlusIcon({ onClick, size }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <ImagePlus className="h-6 w-6" />
    </button>
  );
}
