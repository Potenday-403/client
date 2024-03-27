import fillIcon from "@/../public/icons/Property 1=lucide-fill.svg";
import { iconbutton } from "@/types/iconbutton";
import Image from "next/image";

export function FillIcon({ onClick }: iconbutton) {
  return (
    <button onClick={() => onClick && onClick()}>
      <Image src={fillIcon} alt="fillIcon" width={24} height={24} />
    </button>
  );
}
