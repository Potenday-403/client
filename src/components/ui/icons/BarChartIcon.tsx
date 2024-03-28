import { iconbutton } from "@/types/iconbutton";
import { BarChartBig } from "lucide-react";

export function BarChartBigIcon({ onClick }: iconbutton) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
    >
      <BarChartBig className="h-6 w-6" />
    </button>
  );
}
