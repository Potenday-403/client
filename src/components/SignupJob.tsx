"use client";
import { signuppage } from "@/app/signup/page";
import { Button } from "./ui/Button";
import { useState } from "react";
import { ChevronLeftIcon } from "./ui/icons/ChevronLeftIcon";

export function SignupJob({
  changeStep,
  changeUserInfo,
  registerData,
}: signuppage) {
  const [selectedJob, setSelectedJob] = useState("");
  const handleJobButtonClick = (job: string) => {
    setSelectedJob(job);
    changeUserInfo((prv) => ({ ...prv, job: job }));
  };
  const handleBack = () => {
    changeUserInfo((prv) => ({ ...prv, job: "" }));
    changeStep("sex");
  };

  const buttonsData = [
    { text: "학생", value: "student" },
    { text: "자영업", value: "self" },
    { text: "회사원", value: "office" },
    { text: "공무원", value: "ball" },
    { text: "무직", value: "house" },
    { text: "프리랜서", value: "free" },
    { text: "기타", value: "etc" },
  ];

  return (
    <div className="relative flex flex-col justify-between">
      <div className="absolute  -top-[60px]">
        <ChevronLeftIcon size="32px" onClick={handleBack} />
      </div>
      <div>
        <p className="mb-4 text-[26px] font-semibold">
          {registerData.name}님의
          <br />
          직업을 입력해주세요
        </p>
        <p className="mb-[54px] text-lg font-medium text-accents-4">
          경조사비 통계에 이용돼요
        </p>
        <div className="flex flex-wrap justify-between gap-2 ">
          {buttonsData.map((button, i) => (
            <Button
              key={i}
              text={button.text}
              textcolor={selectedJob === button.value ? "white" : "black"}
              bgcolor={selectedJob === button.value ? "primary" : "accents-0"}
              size="normal"
              disabled={false}
              onClick={() => handleJobButtonClick(button.value)}
            />
          ))}
        </div>
      </div>
      <div className="mb-14">
        <Button
          disabled={selectedJob !== "" ? false : true}
          bgcolor={selectedJob !== "" ? "primary" : "accents-0"}
          textcolor={selectedJob !== "" ? "white" : "black"}
          text="다음"
          size="big"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
