import { CTAContainer } from "@/components/layout/CTAContainer";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CirclePlusIcon } from "@/components/ui/Icon";
import { Title } from "@/components/ui/Title";
import { useEventAddFunnelStore } from "@/store/event";
import { useState } from "react";

const FREINDS_INPUT_TYPE = {
  GET_FRIENDS: "GET_FRIENDS",
  EVENT_ONLY: "EVENT_ONLY",
} as const;

type FriendsInputType =
  (typeof FREINDS_INPUT_TYPE)[keyof typeof FREINDS_INPUT_TYPE];

export const EventAddFriend = () => {
  const [inputType, setInputType] = useState<FriendsInputType | "">("");

  const { moveToNext } = useEventAddFunnelStore();

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">친구 정보를 입력해주세요.</Title>
        <div className="mt-10 flex flex-col gap-[10px]">
          <Button
            align="left"
            size="large"
            disabled
            className="opacity-50"
            startIcon={<CirclePlusIcon />}
            onClick={() => setInputType(FREINDS_INPUT_TYPE.GET_FRIENDS)}
          >
            친구 정보 가져오기
          </Button>
          <Button
            align="left"
            size="large"
            variant={
              inputType === FREINDS_INPUT_TYPE.EVENT_ONLY
                ? "primary"
                : "default"
            }
            startIcon={<ArrowRightIcon />}
            onClick={() => setInputType(FREINDS_INPUT_TYPE.EVENT_ONLY)}
          >
            이벤트만 등록하기
          </Button>
        </div>
      </div>
      <CTAContainer>
        <Button variant="primary" disabled={!inputType} onClick={moveToNext}>
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
