"use client";

import { Button } from "./ui/Button";
import { useState } from "react";
import { ChevronLeftIcon } from "./ui/icons/ChevronLeftIcon";
import { friendaddpage } from "@/app/friends/add/page";
import { useRouter } from "next/navigation";
import { XIcon } from "./ui/icons/XIcon";

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
  const handleChange = (e: any) => {
    e.preventDefault();
    changeFriendInfo((prv) => ({ ...prv, age: e.target.value }));
  };
  const handleClick = () => {
    navigation.push("/friends");
  };

  return (
    <div className="relative flex flex-col justify-between">
      <div className="absolute  -top-[60px]">
        <ChevronLeftIcon size="32px" onClick={handleBack} />
      </div>
      <div className="absolute  -top-[60px] right-0">
        <XIcon size="32px" onClick={handleClick} />
      </div>
      <div>
        <p className="mb-4 text-[26px] font-semibold">
          {registerData.name}님의
          <br />
          나이가 궁금해요!
        </p>
        <input type="number" onChange={handleChange} />
      </div>
      <div className="mb-14">
        <Button
          disabled={registerData.age > 0 ? false : true}
          bgcolor={registerData.age > 0 ? "primary" : "accents-0"}
          textcolor={registerData.age > 0 ? "white" : "black"}
          text="다음"
          size="big"
          onClick={() => {
            changeStep("sex");
          }}
        />
      </div>
    </div>
  );
}
