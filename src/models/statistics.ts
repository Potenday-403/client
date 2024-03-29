import { EventType, Priority, EVENT_TYPE } from "@/models/shared";

export type ExpenseStatisticsByCategory = {
  // TODO: enum 으로 변경
  categories: {
    ageGroup: string;
    gender: string;
    occupation: string;
    eventType: EventType;
    eventPriority: Priority;
  };
  amounts: {
    max: number;
    min: number;
    avg: number;
    med: number;
  };
  headcount: number;
};

export type ExpenseStatisticsByDate = {
  year: number;
  month: number;
  total: number;
  types: {
    [EVENT_TYPE.BIRTHDAY]: number;
    [EVENT_TYPE.WEDDING]: number;
  };
};
