"use client";

import {
  GreetingsRecommendFunnelContextProvider,
  useGreetingsRecommendFunnelContext,
} from "@/store/greetings-recommend-funnel";
import { GreetingsRecommendComplete } from "./GreetingsRecommendComplete";
import { GreetingsRecommendForm } from "./GreetingsRecommendForm";
import { GreetingsRecommendResult } from "./GreetingsRecommendResult";

const STEPS = ["form", "result", "complete"];

export const GreetingsRecommendFunnel = () => {
  return (
    <GreetingsRecommendFunnelContextProvider steps={STEPS}>
      <FunnelList />
    </GreetingsRecommendFunnelContextProvider>
  );
};

const FunnelList = () => {
  const { funnel } = useGreetingsRecommendFunnelContext();

  return (
    <>
      {funnel.current === "form" && <GreetingsRecommendForm />}
      {funnel.current === "result" && <GreetingsRecommendResult />}
      {funnel.current === "complete" && <GreetingsRecommendComplete />}
    </>
  );
};
