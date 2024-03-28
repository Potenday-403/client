import { iconbutton } from "@/types/iconbutton";
import { MessagesSquare } from "lucide-react";

export function MessagesSquareIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <MessagesSquare className="h-6 w-6" />
    </button>
  );
}
