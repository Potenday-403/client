import { GreetingsRecommendComplete } from "@/components/greetings/recommend-funnel/GreetingsRecommendComplete";
import { GreetingsRecommendForm } from "@/components/greetings/recommend-funnel/GreetingsRecommendForm";
import { GreetingsRecommendResult } from "@/components/greetings/recommend-funnel/GreetingsRecommendResult";
import { GreetingsRecommendFunnelContextProvider } from "@/store/greetings-recommend-funnel";

export default function RecommendPage() {
  return (
    <GreetingsRecommendFunnelContextProvider>
      <GreetingsRecommendForm />
      <GreetingsRecommendResult />
      <GreetingsRecommendComplete />
    </GreetingsRecommendFunnelContextProvider>
  );
}
