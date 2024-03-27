import { iconbutton } from "@/types/iconbutton";
import { Send } from "lucide-react";

export function SendIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Send className="h-5 w-5 " />
    </button>
  );
}
