"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { friendaddpage } from "@/app/friends/add/page";
import { FamilyButton } from "@/components/ui/FamilyButton";
import { Badge } from "@/components/ui/Badge";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { XIcon, ChevronUpIcon, ChevronDownIcon } from "@/components/ui/Icon";

export function FriendAddRelationship({
  changeStep,
  changeFriendInfo,
  registerData,
}: friendaddpage) {
  const navigation = useRouter();
  const [selectedRelationship, setSelectedRelationship] = useState("");
  const [showFamilyOptions, setShowFamilyOptions] = useState(false);
  const relationshipButtonClick = (relationship: string) => {
    setSelectedRelationship(relationship);
    changeFriendInfo((prv) => ({ ...prv, relationship }));
    if (relationship === "house") {
      setShowFamilyOptions(true);
    } else {
      setShowFamilyOptions(false);
    }
  };
  const handleFamilyOptionClick = () => {
    setSelectedRelationship("");
    setShowFamilyOptions((prev) => !prev);
  };
  const handleBack = () => {
    changeFriendInfo((prv) => ({ ...prv, relationship: "" }));
    changeStep("sex");
  };
  const handleClick = () => {
    navigation.push("/friends");
  };
  console.log(selectedRelationship);

  const buttonsData = [
    { text: "친한 친구", value: "bf" },
    { text: "친구", value: "friend" },
    { text: "직장동료", value: "work" },
    { text: "상사", value: "up" },
    { text: "가족", value: "house" },
    { text: "기타", value: "etc" },
  ];

  const familyOptions = [
    { text: "할머니", value: "grandmother" },
    { text: "할아버지", value: "grandfather" },
    { text: "어머니", value: "mother" },
    { text: "아버지", value: "father" },
    { text: "언니", value: "older_sister" },
    { text: "오빠", value: "older_brother" },
    { text: "동생", value: "younger_sibling" },
  ];

  return (
    <div className="relative flex flex-col justify-between">
      <div className="absolute  -top-[60px]">
        <IconButton size="large" onClick={handleBack}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <div className="absolute  -top-[60px] right-0">
        <IconButton size="large" onClick={handleClick}>
          <XIcon />
        </IconButton>
      </div>

      <div>
        <p className="mb-4 text-[26px] font-semibold">
          친구와의
          <br />
          관계를 선택해주세요
        </p>

        <div className="flex flex-col justify-between gap-2 ">
          {buttonsData.map((button, i) => (
            <div key={i}>
              {button.value === "house" && (
                <FamilyButton
                  textcolor="primary"
                  text={button.text}
                  icon={
                    showFamilyOptions === true ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )
                  }
                  onClick={handleFamilyOptionClick}
                />
              )}
              {button.value === "etc" && (
                <FamilyButton
                  textcolor={
                    selectedRelationship === button.value
                      ? "accents-0"
                      : "primary"
                  }
                  bgcolor={
                    selectedRelationship === "etc" ? "primary" : "bg-accents-0"
                  }
                  text={button.text}
                  onClick={() => relationshipButtonClick(button.value)}
                />
              )}
              {button.value === "house" && showFamilyOptions && (
                <div className="-mt-3 flex min-h-28 flex-wrap gap-3 rounded-lg bg-accents-0 px-4">
                  {familyOptions.map((familyOption, i) => (
                    <Badge
                      key={i}
                      variant={
                        selectedRelationship === familyOption.value
                          ? "primary"
                          : "white"
                      }
                      onClick={() => {
                        relationshipButtonClick(familyOption.value);
                        setShowFamilyOptions(true);
                      }}
                    >
                      {familyOption.text}
                    </Badge>
                  ))}
                </div>
              )}
              {button.value !== "house" && button.value !== "etc" && (
                <FamilyButton
                  textcolor={
                    selectedRelationship === button.value
                      ? "accents-0"
                      : "primary"
                  }
                  bgcolor={
                    button.value === selectedRelationship
                      ? "primary"
                      : "bg-accents-0"
                  }
                  text={button.text}
                  onClick={() => relationshipButtonClick(button.value)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <Button
          variant="primary"
          size="large"
          disabled={selectedRelationship.length === 0}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
