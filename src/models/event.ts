import { DateString, EventType, Priority } from "@/models/shared";

export type Event = {
  id: number;
  name: string;
  type: EventType;
  priority: Priority;
  recommendedGreetings: string;
  expectedAmount: number;
  scheduledAt: DateString;
};
