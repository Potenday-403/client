import { DateString, EventType } from "@/models/shared";

export type Gift = {
  type: EventType;
  name: string;
  price: number;
  isReceived: boolean;
  date: DateString;
};
