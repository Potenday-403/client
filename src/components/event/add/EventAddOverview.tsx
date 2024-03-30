import { PriorityBadge } from "@/components/PriorityBadge";
import { CTAContainer } from "@/components/layout/CTAContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { CalendarIcon, Clock2Icon } from "@/components/ui/Icon";
import { Title } from "@/components/ui/Title";
import { EVENT_TYPE_LABEL } from "@/models/shared";
import { useEventAddFunnelContext } from "@/store/event-add-funnel";
import { format } from "date-fns";

const FUNNEL_STEP = "overview";

export const EventAddOverview = () => {
  const { funnel, eventType, name, time, date, priority } =
    useEventAddFunnelContext();

  const onConfirm = async () => {
    // TODO: 경조사 추가
    funnel.next();
  };

  if (funnel.current !== FUNNEL_STEP) return null;

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">경조사 등록 전 확인해주세요</Title>
        <Card className="mt-10">
          <Card.Content>
            <p className="text-[20px] font-semibold text-accents-5">{name}</p>
            <div className="mt-[18px] flex gap-4 font-medium text-accents-5">
              {date && (
                <p className="flex items-center">
                  <CalendarIcon className="mr-2 w-5" />
                  {format(date, "yyyy.MM.dd")}
                </p>
              )}
              <p className="flex items-center">
                <Clock2Icon className="mr-2 w-5" />
                {time}
              </p>
            </div>
            <Divider className="mt-3" />
            <div className="mt-5 flex items-center">
              <p className="mr-8 font-medium">이벤트 종류</p>
              <Badge>
                {EVENT_TYPE_LABEL[eventType as keyof typeof EVENT_TYPE_LABEL]}
              </Badge>
            </div>
            <div className="mt-5 flex items-center">
              <p className="mr-8 font-medium">이벤트 중요도</p>
              {priority && <PriorityBadge priority={priority} />}
            </div>
          </Card.Content>
        </Card>
      </div>
      <CTAContainer>
        <Button variant="primary" disabled={!priority} onClick={onConfirm}>
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
