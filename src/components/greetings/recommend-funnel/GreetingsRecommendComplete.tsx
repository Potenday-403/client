"use client";

import { useGreetingsRecommendFunnelContext } from "@/store/greetings-recommend-funnel";

const FUNNEL_STEP = "complete";

export const GreetingsRecommendComplete = () => {
  const { funnel } = useGreetingsRecommendFunnelContext();

  if (funnel.current !== FUNNEL_STEP) return null;

  return <main className="px-4">완료</main>;
};
