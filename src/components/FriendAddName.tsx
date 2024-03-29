"use client";

import { Button } from "@/components/ui/Button";
import { friendaddpage } from "@/app/friends/add/page";
import { XIcon } from "@/components/ui/Icon";
import { useRouter } from "next/navigation";
import { IconButton } from "@/components/ui/IconButton";

export function FriendAddName({
  changeStep,
  changeFriendInfo,
  registerData,
}: friendaddpage) {
  const navigation = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    changeFriendInfo((prv) => ({ ...prv, name: e.target.value }));
  };
  const handleClick = () => {
    navigation.push("/friends");
  };
  return (
    <div className="relative flex w-full flex-col justify-between">
      <div className="absolute -top-[60px] right-0">
        <IconButton size="large" onClick={handleClick}>
          <XIcon />
        </IconButton>
      </div>
      <div>
        <p className="text-[26px] font-semibold">
          추가할 친구의
          <br />
          이름을 입력해주세요
        </p>
        <input type="text" onChange={handleChange} />
      </div>
      <div className="mb-14">
        <Button
          disabled={registerData.name.length === 0}
          variant="primary"
          size="large"
          onClick={() => {
            changeStep("age");
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
