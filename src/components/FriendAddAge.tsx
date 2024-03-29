"use client";

import { Button } from "@/components/ui/Button";
import { ChevronLeftIcon } from "@/components/ui/Icon";
import { friendaddpage } from "@/app/friends/add/page";
import { useRouter } from "next/navigation";
import { XIcon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { Input } from "./ui/Input";

export function FriendAddAge({
  changeStep,
  changeFriendInfo,
  registerData,
}: friendaddpage) {
  const navigation = useRouter();
  const handleBack = () => {
    changeFriendInfo((prv) => ({ ...prv, age: 0 }));
    changeStep("name");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    changeFriendInfo((prv) => ({ ...prv, age: Number(e.target.value) }));
  };
  const handleClick = () => {
    navigation.push("/friends");
  };

  return (
    <div className="relative flex flex-col justify-between">
      <div className="absolute -top-[60px]">
        <IconButton size="large" onClick={handleBack}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <div className="absolute -top-[60px] right-0">
        <IconButton size="large" onClick={handleClick}>
          <XIcon />
        </IconButton>
      </div>
      <div>
        <p className="mb-4 text-[26px] font-semibold">
          {registerData.name}님의
          <br />
          나이가 궁금해요!
        </p>
        <Input allowNumberOnly onChange={handleChange} />
      </div>
      <div className="mb-14">
        <Button
          variant="primary"
          size="large"
          disabled={registerData.age === 0}
          onClick={() => {
            changeStep("sex");
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
