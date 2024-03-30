"use client";

import { PriorityBadge } from "@/components/PriorityBadge";
import { WithCard } from "@/components/WithCard";
import { ChatBubble } from "@/components/event/detail/ChatBubble";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import {
  ChevronRightIcon,
  Clock2Icon,
  FilesIcon,
  XIcon,
} from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Title } from "@/components/ui/Title";
import { Event } from "@/models/event";
import { EVENT_TYPE, EVENT_TYPE_LABEL, PRIORITY } from "@/models/shared";
import { getDaysLeft } from "@/utils/date";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useParams, useRouter } from "next/navigation";

const DUMMY_RELATIONSHIP = "친한친구";

const DUMMY_EVENT: Event = {
  id: 1,
  name: "김밤비 결혼식",
  priority: PRIORITY.CRUCIAL,
  scheduledAt: new Date().toISOString(),
  type: EVENT_TYPE.WEDDING,
  expectedAmount: 100000,
  recommendedGreetings: "검은머리 파뿌리 될때까지 행복하게\n잘 살아, 축하해!",
};

export default function EventDetailPage() {
  const params = useParams() as { slug: string };
  const id = params.slug;

  const router = useRouter();

  const event = DUMMY_EVENT;

  return (
    <main>
      <div className="px-4">
        <div className="flex h-11 items-center justify-end">
          <IconButton onClick={() => router.push("/")} size="large">
            <XIcon />
          </IconButton>
        </div>
        <div className="flex items-center">
          <p className="mr-[10px] text-[32px] font-bold">
            D-{getDaysLeft(new Date(event.scheduledAt))}
          </p>
          <PriorityBadge priority={event.priority} />
        </div>
        <Title className="mt-4">{event.name}</Title>
        <p className="mt-3 flex items-center font-medium text-[#8A8A8A]">
          <Clock2Icon className="mr-0.5 w-4" />
          {format(event.scheduledAt, "aaaa hh:mm yyyy.MM.dd", { locale: ko })}
        </p>
        <Divider className="mt-2" />
        <div className="mt-7 flex items-center">
          <SectionTitle className="mr-4">경조사 종류</SectionTitle>
          <Badge variant="gray">{EVENT_TYPE_LABEL[event.type]}</Badge>
        </div>
        <div className="mt-10 flex items-center">
          <SectionTitle className="mr-4">나와의 관계</SectionTitle>
          <Badge variant="gray">{DUMMY_RELATIONSHIP}</Badge>
        </div>
        <SectionTitle className="mt-10">함께한 내역</SectionTitle>
        <div className="mt-6 flex flex-col gap-5">
          <WithCard />
          <WithCard />
          <WithCard />
        </div>
      </div>
      <Divider variant="space" className="mt-10" />
      <div className="px-4">
        <SectionTitle className="mt-7">맞춤 인사말 추천</SectionTitle>
        <div className="mt-4 flex flex-col gap-8 rounded-[8px] border-[1.5px] border-[#E5E5E5] p-4">
          <ChatBubble side="right" label="경비서의 맞춤 인사말,">
            {"경조사 맞춤\n인사말 추천이 도착했어요!"}
          </ChatBubble>
          <ChatBubble
            side="left"
            label="새로운 인생을 시작하는 친구에게,"
            variant="primary"
          >
            <div className="flex gap-1">
              <FilesIcon className="w-5" />
              {event.recommendedGreetings}
            </div>
          </ChatBubble>
        </div>
        <Button
          align="between"
          size="large"
          className="mt-5"
          endIcon={<ChevronRightIcon />}
        >
          김밤비 상세 정보
        </Button>
      </div>
    </main>
  );
}
