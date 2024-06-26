"use client";

import { Header } from "@/components/layout/Header";
import { EVENT_TYPE_LABEL, EventType } from "@/models/shared";
import { useGreetingsRecommendFunnelContext } from "@/store/greetings-recommend-funnel";
import { useRouter } from "next/navigation";
import { CTAContainer } from "../../layout/CTAContainer";
import { Badge } from "../../ui/Badge";
import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card";
import { Divider } from "../../ui/Divider";
import { SectionTitle } from "../../ui/SectionTitle";
import { Title } from "../../ui/Title";
import { RecommendInput } from "../RecommendInput";

const FUNNEL_STEP = "form";

const DUMMY_RELATIONSHIP = [
  "친한 친구",
  "친구",
  "직장 동료",
  "상사",
  "가족",
  "기타 관계",
];

const DUMMY_FAMILY = [
  "할머니",
  "할아버지",
  "어머니",
  "아버지",
  "언니",
  "오빠",
  "동생",
];

const DUMMY_ETC_RELATIONSHIP = ["은사님", "큰아버지", "필라테스 선생님"];

const DUMMY_ETC_EVENT_TYPE = ["새해", "설날", "추석"];

export const GreetingsRecommendForm = () => {
  const {
    funnel,
    selectedEventType,
    selectedRelationship,
    selectedFamily,
    selectedEtcRelationship,
    selectedEtcEventType,
    setSelectedEtcEventType,
    setSelectedEtcRelationship,
    setSelectedFamily,
    setSelectedEventType,
    setSelectedRelationship,
  } = useGreetingsRecommendFunnelContext();

  const router = useRouter();

  const canSubmit = selectedRelationship && selectedEventType;

  if (funnel.current !== FUNNEL_STEP) return null;

  return (
    <main className="px-4">
      <Header className="justify-end">
        <Header.Close onClick={() => router.push("/")} />
      </Header>
      <Title className="mt-5">{"경조사의\n인사말을 추천해드릴게요"}</Title>
      <SectionTitle className="mt-10">나와의 관계</SectionTitle>
      <div className="mt-4 flex flex-wrap gap-3">
        {DUMMY_RELATIONSHIP.map((relationship) => (
          <Badge
            key={relationship}
            variant={selectedRelationship === relationship ? "primary" : "gray"}
            onClick={() => setSelectedRelationship(relationship)}
          >
            {relationship}
          </Badge>
        ))}
      </div>
      {selectedRelationship === "가족" && (
        <Card className="mt-3">
          <Card.Content className="flex flex-wrap">
            {DUMMY_FAMILY.map((family) => (
              <Badge
                key={family}
                variant={selectedFamily === family ? "primary" : "white"}
                className="mb-2 mr-2"
                onClick={() => setSelectedFamily(family)}
              >
                {family}
              </Badge>
            ))}
          </Card.Content>
        </Card>
      )}
      {selectedRelationship === "기타 관계" && (
        <RecommendInput className="mt-3" placeholder="관계를 입력해주세요">
          {DUMMY_ETC_RELATIONSHIP.map((relationship) => (
            <Badge
              key={relationship}
              variant={
                selectedEtcRelationship === relationship ? "primary" : "white"
              }
              onClick={() => setSelectedEtcRelationship(relationship)}
            >
              {relationship}
            </Badge>
          ))}
        </RecommendInput>
      )}
      <Divider className="mt-5" />
      <SectionTitle className="mt-5">경조사 종류</SectionTitle>
      <div className="mt-4 flex flex-wrap gap-3">
        {Object.entries(EVENT_TYPE_LABEL).map(([value, label]) => (
          <Badge
            key={value}
            variant={selectedEventType === value ? "primary" : "gray"}
            onClick={() => setSelectedEventType(value as EventType)}
          >
            {label}
          </Badge>
        ))}
      </div>
      {selectedEventType === "ETC" && (
        <RecommendInput className="mt-3" placeholder="경조사를 입력해주세요">
          {DUMMY_ETC_EVENT_TYPE.map((eventType) => (
            <Badge
              key={eventType}
              variant={selectedEtcEventType === eventType ? "primary" : "white"}
              onClick={() => setSelectedEtcEventType(eventType)}
            >
              {eventType}
            </Badge>
          ))}
        </RecommendInput>
      )}
      <CTAContainer>
        <Button
          size="large"
          disabled={!canSubmit}
          variant="primary"
          onClick={funnel.next}
        >
          다음
        </Button>
      </CTAContainer>
    </main>
  );
};
