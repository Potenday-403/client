"use clinet";
import { signuppage } from "@/app/signup/page";
import { Button } from "./ui/Button";
import { useState } from "react";
import { ChevronLeftIcon } from "./ui/icons/ChevronLeftIcon";

export function SignupSex({
  changeStep,
  changeUserInfo,
  registerData,
}: signuppage) {
  const [selectedGender, setSelectedGender] = useState("");
  const handleGenderButtonClick = (sex: string) => {
    setSelectedGender(sex);
    changeUserInfo((prv) => ({ ...prv, sex }));
  };
  const handleBack = () => {
    changeUserInfo((prv) => ({ ...prv, sex: "", age: 0 }));
    changeStep("age");
  };

  return (
    <div className="relative flex flex-col justify-between">
      <div className="absolute  -top-[60px]">
        <ChevronLeftIcon size="32px" onClick={handleBack} />
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
            text="남성"
            textcolor={selectedGender === "male" ? "white" : "black"}
            bgcolor={selectedGender === "male" ? "primary" : "accents-0"}
            size="normal"
            disabled={false}
            onClick={() => {
              handleGenderButtonClick("male");
            }}
          />
          <Button
            text="여성"
            textcolor={selectedGender === "female" ? "white" : "black"}
            bgcolor={selectedGender === "female" ? "primary" : "accents-0"}
            size="normal"
            disabled={false}
            onClick={() => {
              handleGenderButtonClick("female");
            }}
          />
        </div>
      </div>
      <div className="mb-14">
        <Button
          disabled={selectedGender !== "" ? false : true}
          bgcolor={selectedGender !== "" ? "primary" : "accents-0"}
          textcolor={selectedGender !== "" ? "white" : "black"}
          text="다음"
          size="big"
          onClick={() => {
            changeStep("job");
          }}
        />
      </div>
    </div>
  );
}
