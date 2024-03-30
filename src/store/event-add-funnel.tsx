"use client";

import { Funnel, useFunnel } from "@/hooks/useFunnel";
import { Priority } from "@/models/shared";
import { createContext, useContext, useState } from "react";

const STEPS = [
  "type",
  "name",
  "date",
  "friend",
  "priority",
  "overview",
  "complete",
];

type EventAddFunnelContextValue = {
  funnel: Funnel;
  eventType: string;
  name: string;
  priority: Priority | "";
  date?: Date;
  time: string;
  setEventType: (eventType: string) => void;
  setName: (name: string) => void;
  setPriority: (priority: Priority | "") => void;
  setDate: (date?: Date) => void;
  setTime: (time: string) => void;
};

export const EventAddFunnelContext =
  createContext<EventAddFunnelContextValue | null>(null);

export const EventAddFunnelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const funnel = useFunnel(STEPS);

  const [eventType, setEventType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [priority, setPriority] = useState<Priority | "">("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");

  const value = {
    funnel,
    eventType,
    name,
    priority,
    date,
    time,
    setEventType,
    setName,
    setPriority,
    setDate,
    setTime,
  };

  return (
    <EventAddFunnelContext.Provider value={value}>
      {children}
    </EventAddFunnelContext.Provider>
  );
};

export const useEventAddFunnelContext = () => {
  const context = useContext(EventAddFunnelContext);

  if (!context) {
    throw new Error(
      "useEventAddFunnelContext는 EventAddFunnelContextProvider 컴포넌트 안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
