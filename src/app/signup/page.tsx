"use client";

import { SignupAge } from "@/components/SignupAge";
import { SignupJob } from "@/components/SignupJob";
import { SignupName } from "@/components/SignupName";
import { SignupSex } from "@/components/SignupSex";
import { useState } from "react";

type signupinfo = { name: string; age: number; sex: string; job: string };
export type signuppage = {
  registerData: signupinfo;
  changeStep: React.Dispatch<
    React.SetStateAction<"name" | "age" | "sex" | "job">
  >;
  changeUserInfo: React.Dispatch<React.SetStateAction<signupinfo>>;
};

export default function SignupPage() {
  const [registerData, setRegisterData] = useState({
    name: "",
    age: 0,
    sex: "",
    job: "",
  });
  const [step, setStep] = useState<"name" | "age" | "sex" | "job">("name");
  console.log(registerData);

  return (
    <div className="flex min-h-main bg-blue-200 px-4 pt-[116px]">
      {step === "name" && (
        <SignupName
          changeStep={setStep}
          registerData={registerData}
          changeUserInfo={setRegisterData}
        />
      )}
      {step === "age" && (
        <SignupAge
          changeStep={setStep}
          registerData={registerData}
          changeUserInfo={setRegisterData}
        />
      )}
      {step === "sex" && (
        <SignupSex
          changeStep={setStep}
          registerData={registerData}
          changeUserInfo={setRegisterData}
        />
      )}
      {step === "job" && (
        <SignupJob
          changeStep={setStep}
          registerData={registerData}
          changeUserInfo={setRegisterData}
        />
      )}
    </div>
  );
}
