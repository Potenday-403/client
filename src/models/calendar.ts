import { Priority, TimeString } from "@/models/shared";

export type CalendarItem = {
  id: number;
  name: string;
  priority: Priority;
  time: TimeString;
};
