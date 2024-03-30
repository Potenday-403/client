import calendarImage from "@/assets/images/illust-1.png";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export const EventAddComplete = () => {
  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Image
          priority
          src={calendarImage}
          width={140}
          height={140}
          alt="Calendar"
        />
        <p className="mt-5 text-[26px] font-semibold text-accents-5">
          경조사가 등록됐어요
        </p>
        <p className="mt-2 text-accents-5">
          경조사는 홈화면에서 확인할 수 있어요
        </p>
      </div>
      <Button
        variant="primary"
        className="sticky bottom-5 left-4 right-4"
        asChild
      >
        <Link href="/events">확인</Link>
      </Button>
    </div>
  );
};
