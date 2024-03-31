"use client";

import { signuppage } from "@/app/signup/page";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { ChevronLeftIcon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { api } from "@/services/axios";
import { useRouter } from "next/navigation";

export function SignupJob({
  changeStep,
  changeUserInfo,
  registerData,
}: signuppage) {
  const navigation = useRouter();
  const [selectedJob, setSelectedJob] = useState("");
  const handleJobButtonClick = (job: string) => {
    setSelectedJob(job);
    changeUserInfo((prv) => ({ ...prv, job: job }));
  };
  const handleBack = () => {
    changeUserInfo((prv) => ({ ...prv, job: "" }));
    changeStep("sex");
  };

  const handleSubmit = () => {
    api
      .post("/signup", registerData)
      .then((response) => {
        // 성공 시 처리
        console.log("API 호출 성공", response);
        navigation.push("/");
      })
      .catch((error) => {
        // 실패 시 처리
        console.error("API 호출 실패", error);
        alert("회원가입실패");
      });
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
        <IconButton size="large" onClick={handleBack}>
          <ChevronLeftIcon />
        </IconButton>
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
            <Button key={i} onClick={() => handleJobButtonClick(button.value)}>
              {button.text}
            </Button>
          ))}
        </div>
      </div>
      <div className="mb-14">
        <Button
          variant="primary"
          size="large"
          disabled={selectedJob.length === 0}
          onClick={handleSubmit}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
