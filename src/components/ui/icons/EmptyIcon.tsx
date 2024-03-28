import emptyIcon from "@/../public/icons/Property 1=lucide-empty.svg";
import { iconbutton } from "@/types/iconbutton";
import Image from "next/image";

export function EmptyIcon({ onClick }: iconbutton) {
  return (
    <button onClick={() => onClick && onClick()}>
      <Image src={emptyIcon} alt="emptyIcon" width={24} height={24} />
    </button>
  );
}
