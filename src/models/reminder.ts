import { Event } from "@/models/event";

export type Reminder = {
  id: number;
  name: Event["name"];
  scheduledAt: Event["scheduledAt"];
  priority: Event["priority"];
};
