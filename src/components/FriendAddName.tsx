"use client";

import { Button } from "./ui/Button";
import { friendaddpage } from "@/app/friends/add/page";
import { XIcon } from "./ui/icons/XIcon";
import { useRouter } from "next/navigation";

export function FriendAddName({
  changeStep,
  changeFriendInfo,
  registerData,
}: friendaddpage) {
  const navigation = useRouter();
  const handleChange = (e: any) => {
    e.preventDefault();
    changeFriendInfo((prv) => ({ ...prv, name: e.target.value }));
  };
  const handleClick = () => {
    navigation.push("/friends");
  };
  return (
    <div className="relative flex flex-col justify-between">
      <div className="absolute  -top-[60px] right-0">
        <XIcon size="32px" onClick={handleClick} />
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
          disabled={registerData.name.length > 1 ? false : true}
          bgcolor={registerData.name.length > 1 ? "primary" : "accents-0"}
          textcolor={registerData.name.length > 1 ? "white" : "black"}
          text="다음"
          size="big"
          onClick={() => {
            changeStep("age");
          }}
        />
      </div>
    </div>
  );
}
