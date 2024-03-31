"use client";

import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RotateCwIcon, SendIcon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useGreetingsRecommendFunnelContext } from "@/store/greetings-recommend-funnel";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const DUMMY_GREETINGS = [
  "생신 축하드립니다. 오늘 하루 행복하게 보내세요.",
  "생신 축하드립니다. 오늘 하루 행복하게 보내세요.",
  "생신 축하드립니다. 오늘 하루 행복하게 보내세요.",
];

const FUNNEL_STEP = "result";

export const GreetingsRecommendResult = () => {
  const { funnel } = useGreetingsRecommendFunnelContext();

  // const { data } = useGenerateGreetingsByCategory({
  //   eventPriority: PRIORITY.CRUCIAL,
  //   eventType: EVENT_TYPE.BIRTHDAY,
  //   relationship: RELATIONSHIP.CLOSE_FRIEND,
  // });

  const data = {
    greetings: DUMMY_GREETINGS,
  };

  if (funnel.current !== FUNNEL_STEP) return null;

  return (
    <main>
      <Header className="px-4">
        <Header.Previous />
        <Header.Close />
      </Header>
      <div className="mt-5 flex items-center justify-center px-4 text-center">
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
      {/* TODO: 스타일 추가 */}
      {data && (
        <>
          <div className="mt-[54px]">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={24}
              pagination={{ clickable: true }}
              loop
            >
              {data.greetings.map((greeting, index) => (
                <SwiperSlide key={index} className="px-4 pb-10">
                  <GreetingsCard content={greeting} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-[100px] flex justify-center gap-[10px] px-4">
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
    <Card className="mx-auto h-[286px] w-full max-w-[250px]">
      <Card.Content className="overflow-y-auto p-6 text-sm">
        {content}
      </Card.Content>
    </Card>
  );
};
