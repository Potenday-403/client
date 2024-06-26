import { CTAContainer } from "@/components/layout/CTAContainer";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { Title } from "@/components/ui/Title";
import { useEventAddFunnelContext } from "@/store/event-add-funnel";

const FUNNEL_STEP = "date";

export const EventAddDate = () => {
  const { funnel, time, setTime, date, setDate } = useEventAddFunnelContext();

  if (funnel.current !== FUNNEL_STEP) return null;

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">경조사 일정을 입력해주세요.</Title>
        <div className="mt-10 flex flex-col gap-[10px]">
          <Calendar selected={date} onSelect={setDate} disablePastDates />
          {/* TODO: 스타일 추가 */}
          <input
            className="mt-4 h-10"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <CTAContainer>
        <Button
          variant="primary"
          disabled={!date || !time}
          onClick={funnel.next}
        >
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
