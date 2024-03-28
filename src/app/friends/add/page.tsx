"use client";

import { FriendAddAge } from "@/components/FriendAddAge";
import { FriendAddName } from "@/components/FriendAddName";
import { FriendAddRelationship } from "@/components/FriendAddRelationship";
import { FriendAddSex } from "@/components/FriendAddSex";
import { useState } from "react";

export type friendinfo = {
  name: string;
  age: number;
  sex: string;
  relationship: string;
};
export type friendaddpage = {
  registerData: friendinfo;
  changeStep: React.Dispatch<
    React.SetStateAction<"name" | "age" | "sex" | "relationship">
  >;
  changeFriendInfo: React.Dispatch<React.SetStateAction<friendinfo>>;
};
export default function FiendsAddPage() {
  const [registerData, setRegisterData] = useState({
    name: "",
    age: 0,
    sex: "",
    relationship: "",
  });
  const [step, setStep] = useState<"name" | "age" | "sex" | "relationship">(
    "name",
  );
  console.log(registerData);
  return (
    <div className="flex min-h-main bg-white px-4 pt-[116px]">
      {step === "name" && (
        <FriendAddName
          changeStep={setStep}
          registerData={registerData}
          changeFriendInfo={setRegisterData}
        />
      )}
      {step === "age" && (
        <FriendAddAge
          changeStep={setStep}
          registerData={registerData}
          changeFriendInfo={setRegisterData}
        />
      )}
      {step === "sex" && (
        <FriendAddSex
          changeStep={setStep}
          registerData={registerData}
          changeFriendInfo={setRegisterData}
        />
      )}
      {step === "relationship" && (
        <FriendAddRelationship
          changeStep={setStep}
          registerData={registerData}
          changeFriendInfo={setRegisterData}
        />
      )}
    </div>
  );
}
