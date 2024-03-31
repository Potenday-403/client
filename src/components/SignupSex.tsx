"use clinet";
import { signuppage } from "@/app/signup/page";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { ChevronLeftIcon } from "@/components/ui/Icon";

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
    <div className="relative flex w-full flex-col justify-between">
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
        <div className="flex justify-between gap-[10px]">
          <Button
            variant={selectedGender === "MAIL" ? "primary" : "default"}
            onClick={() => {
              handleGenderButtonClick("MAIL");
            }}
          >
            남성
          </Button>
          <Button
            variant={selectedGender === "FEMAIL" ? "primary" : "default"}
            onClick={() => {
              handleGenderButtonClick("FEMAIL");
            }}
          >
            여성
          </Button>
        </div>
      </div>
      <Button
        className="mb-14"
        disabled={!selectedGender}
        size="large"
        onClick={() => {
          changeStep("job");
        }}
      >
        다음
      </Button>
    </div>
  );
}
