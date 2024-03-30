import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Title } from "@/components/ui/Title";
import { useEventAddFunnelStore } from "@/store/event";

export const EventAddName = () => {
  const { name, setName, moveToNext } = useEventAddFunnelStore();

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">경조사 이름을 입력해주세요.</Title>
        <div className="mt-10 flex flex-col gap-[10px]">
          <Input
            placeholder="이벤트 제목"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <Button
        variant="primary"
        className="sticky bottom-5 left-4 right-4"
        disabled={!name}
        onClick={moveToNext}
      >
        다음
      </Button>
    </div>
  );
};
