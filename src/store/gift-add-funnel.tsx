"use client";

import { Funnel, useFunnel } from "@/hooks/useFunnel";
import { createContext, useContext, useState } from "react";

const STEPS = ["type", "date", "form", "complete"];

type GiftAddFunnelContextValue = {
  funnel: Funnel;
  type?: string;
  date?: Date;
  setGiftType: (giftType: string) => void;
  setDate: (date: Date) => void;
};

const GiftAddFunnelContext = createContext<GiftAddFunnelContextValue | null>(
  null,
);

export const GiftAddFunnelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const funnel = useFunnel(STEPS);

  const [type, setGiftType] = useState<string>();
  const [date, setDate] = useState<Date>();

  const value = {
    funnel,
    type,
    date,
    setGiftType,
    setDate,
  };

  return (
    <GiftAddFunnelContext.Provider value={value}>
      {children}
    </GiftAddFunnelContext.Provider>
  );
};

export const useGiftAddFunnel = () => {
  const context = useContext(GiftAddFunnelContext);

  if (!context) {
    throw new Error(
      "useGiftAddFunnel은 GiftAddFunnelContextProvider 컴포넌트 안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
