import { iconbutton } from "@/types/iconbutton";
import { ArrowLeft } from "lucide-react";

export function ArrowLeftIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <ArrowLeft className="h-6 w-6 " />
    </button>
  );
}
