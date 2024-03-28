import { iconbutton } from "@/types/iconbutton";
import { Home } from "lucide-react";

export function HomeIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Home className="h-6 w-6" />
    </button>
  );
}
