"use client";

import {
  GiftAddFunnelContextProvider,
  useGiftAddFunnelContext,
} from "@/store/gift-add-funnel";
import { GiftAddType } from "./GiftAddType";

const STEPS = ["type", "date", "form", "complete"];

export const GiftAddFunnel = () => {
  return (
    <GiftAddFunnelContextProvider steps={STEPS}>
      <FunnelList />
    </GiftAddFunnelContextProvider>
  );
};

const FunnelList = () => {
  const { funnel } = useGiftAddFunnelContext();

  return <>{funnel.current === "type" && <GiftAddType />}</>;
};
