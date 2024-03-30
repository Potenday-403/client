import { Priority } from "@/models/shared";
import { create } from "zustand";

const STEPS = [
  "type",
  "name",
  "date",
  "friend",
  "priority",
  "overview",
  "complete",
];

interface EventAddFunnelStore {
  step: (typeof STEPS)[number];
  eventType: string;
  name: string;
  priority: Priority | "";
  date?: Date;
  time: string;
  moveToNext: () => void;
  moveToPrevious: () => void;
  setEventType: (eventType: string) => void;
  setName: (name: string) => void;
  setPriority: (priority: Priority | "") => void;
  setDate: (date?: Date) => void;
  setTime: (time: string) => void;
}

export const useEventAddFunnelStore = create<EventAddFunnelStore>()(
  (set, get) => ({
    step: "type",
    eventType: "",
    name: "",
    priority: "",
    date: undefined,
    time: "",
    moveToNext: () => {
      const currentStep = get().step;
      const currentStepIndex = STEPS.findIndex((step) => step === currentStep);

      if (currentStepIndex !== STEPS.length - 1) {
        const nextStep = STEPS[currentStepIndex + 1];
        set({ step: nextStep });
      }
    },
    moveToPrevious: () => {
      const currentStep = get().step;
      const currentStepIndex = STEPS.findIndex((step) => step === currentStep);

      if (currentStepIndex !== 0) {
        const previousStep = STEPS[currentStepIndex - 1];
        set({ step: previousStep });
      }
    },
    setEventType: (eventType) => set({ eventType }),
    setName: (name) => set({ name }),
    setPriority: (priority) => set({ priority }),
    setDate: (date) => set({ date }),
    setTime: (time) => set({ time }),
  }),
);
