import { DateString, EventType } from "@/models/shared";

export type Gift = {
  id: number;
  type: EventType;
  name: string;
  price: number;
  isReceived: boolean;
  date: DateString;
};
