import { CTAContainer } from "@/components/layout/CTAContainer";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { Title } from "@/components/ui/Title";
import { useEventAddFunnelStore } from "@/store/event";

export const EventAddDate = () => {
  const { time, setTime, date, setDate, moveToNext } = useEventAddFunnelStore();

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">경조사 일정을 입력해주세요.</Title>
        <div className="mt-10 flex flex-col gap-[10px]">
          <Calendar selected={date} onSelect={setDate} />
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
          onClick={moveToNext}
        >
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
