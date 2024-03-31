"use client";

import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RotateCwIcon, SendIcon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { EVENT_TYPE, PRIORITY, RELATIONSHIP } from "@/models/shared";
import { useGenerateGreetingsByCategory } from "@/services/greetings";
import { useGreetingsRecommendFunnelContext } from "@/store/greetings-recommend-funnel";

const FUNNEL_STEP = "result";

export const GreetingsRecommendResult = () => {
  const { funnel } = useGreetingsRecommendFunnelContext();

  const { data } = useGenerateGreetingsByCategory({
    eventPriority: PRIORITY.CRUCIAL,
    eventType: EVENT_TYPE.BIRTHDAY,
    relationship: RELATIONSHIP.CLOSE_FRIEND,
  });

  if (funnel.current !== FUNNEL_STEP) return null;

  return (
    <main className="px-4">
      <Header>
        <Header.Previous />
        <Header.Close />
      </Header>
      <div className="mt-5 flex items-center justify-center text-center">
        <SectionTitle className="leading-9">
          <Badge variant="primary" className="mr-1">
            할아버지
          </Badge>
          <Badge className="mr-2" variant="primary">
            팔순잔치
          </Badge>
          를 위한
          <br />
          인사말 추천이에요
        </SectionTitle>
      </div>
      {/* TODO: 캐러셀로 변경 */}
      {data && (
        <>
          <div className="mt-[54px] flex flex-col gap-4">
            {data.greetings.map((greeting, index) => (
              <GreetingsCard key={index} content={greeting} />
            ))}
          </div>
          <div className="mt-[100px] flex justify-center gap-[10px]">
            <Button className="h-10" size="small" startIcon={<RotateCwIcon />}>
              다시 생성
            </Button>
            <Button className="h-10" size="small" startIcon={<SendIcon />}>
              공유하기
            </Button>
          </div>
        </>
      )}
    </main>
  );
};

interface GreetingsCardProps {
  content: string;
}

// TODO: 이미지 변경 기능 추가
const GreetingsCard = ({ content }: GreetingsCardProps) => {
  return (
    <Card>
      <Card.Content className="h-[286px] min-w-[250px] overflow-y-auto p-6 text-sm">
        {content}
      </Card.Content>
    </Card>
  );
};
