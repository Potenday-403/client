import newIcon from "@/../public/icons/Property 1=lucide-new.svg";
import { iconbutton } from "@/types/iconbutton";
import Image from "next/image";

export function NewIcon({ onClick }: iconbutton) {
  return (
    <button onClick={() => onClick && onClick()}>
      <Image src={newIcon} alt="newIcon" width={20} height={20} />
    </button>
  );
}
