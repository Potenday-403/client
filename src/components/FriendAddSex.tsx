"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { ChevronLeftIcon, XIcon } from "@/components/ui/Icon";
import { friendaddpage } from "@/app/friends/add/page";
import { useRouter } from "next/navigation";
import { IconButton } from "./ui/IconButton";

export function FriendAddSex({
  changeStep,
  changeFriendInfo,
  registerData,
}: friendaddpage) {
  const navigation = useRouter();
  const [selectedGender, setSelectedGender] = useState("");
  const handleGenderButtonClick = (sex: string) => {
    setSelectedGender(sex);
    changeFriendInfo((prv) => ({ ...prv, sex }));
  };
  const handleBack = () => {
    changeFriendInfo((prv) => ({ ...prv, sex: "", age: 0 }));
    changeStep("age");
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
          성별을 선택해주세요
        </p>
        <p className="mb-[54px] text-lg font-medium text-accents-4">
          경조사비 통계에 이용돼요
        </p>
        <div className="flex justify-between ">
          <Button
            onClick={() => {
              handleGenderButtonClick("male");
            }}
          >
            남성
          </Button>
          <Button
            onClick={() => {
              handleGenderButtonClick("female");
            }}
          >
            여성
          </Button>
        </div>
      </div>
      <div className="mb-14">
        <Button
          variant="primary"
          disabled={selectedGender.length === 0}
          size="large"
          onClick={() => {
            changeStep("relationship");
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
