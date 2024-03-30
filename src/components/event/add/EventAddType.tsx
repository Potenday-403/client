import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import { EVENT_TYPE_LABEL } from "@/models/shared";
import { useEventAddFunnelStore } from "@/store/event";

export const EventAddType = () => {
  const { moveToNext, eventType, setEventType } = useEventAddFunnelStore();

  const onEventTypeSelect = (eventType: string) => {
    setEventType(eventType);
  };

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
      <Button
        variant="primary"
        className="sticky bottom-5 left-4 right-4"
        disabled={!eventType}
        onClick={moveToNext}
      >
        다음
      </Button>
    </div>
  );
};
