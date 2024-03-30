import { CTAContainer } from "@/components/layout/CTAContainer";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import { EVENT_TYPE_LABEL } from "@/models/shared";
import { useEventAddFunnelContext } from "@/store/event-add-funnel";

const FUNNEL_STEP = "type";

export const EventAddType = () => {
  const { funnel, eventType, setEventType } = useEventAddFunnelContext();

  const onEventTypeSelect = (eventType: string) => {
    setEventType(eventType);
  };

  if (funnel.current !== FUNNEL_STEP) return null;

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">어떤 경조사를 등록할까요?</Title>
        <div className="mt-10 flex flex-col gap-[10px]">
          {Object.entries(EVENT_TYPE_LABEL).map(([value, label]) => (
            <Button
              size="large"
              align="left"
              key={value}
              onClick={() => onEventTypeSelect(value)}
              variant={value === eventType ? "primary" : "default"}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      <CTAContainer>
        <Button variant="primary" disabled={!eventType} onClick={funnel.next}>
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
