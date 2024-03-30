"use client";

import calendarImage from "@/assets/images/illust-1.png";
import { CTAContainer } from "@/components/layout/CTAContainer";
import { Button } from "@/components/ui/Button";
import { useEventAddFunnelContext } from "@/store/event-add-funnel";
import Image from "next/image";
import Link from "next/link";

const FUNNEL_STEP = "complete";

export const EventAddComplete = () => {
  const { funnel } = useEventAddFunnelContext();

  if (funnel.current !== FUNNEL_STEP) return null;

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
      <CTAContainer>
        <Button variant="primary" asChild>
          <Link href="/">확인</Link>
        </Button>
      </CTAContainer>
    </div>
  );
};
