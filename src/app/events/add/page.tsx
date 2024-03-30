"use client";

import { EventAddComplete } from "@/components/event/add/EventAddComplete";
import { EventAddDate } from "@/components/event/add/EventAddDate";
import { EventAddFriend } from "@/components/event/add/EventAddFriend";
import { EventAddName } from "@/components/event/add/EventAddName";
import { EventAddOverview } from "@/components/event/add/EventAddOverview";
import { EventAddPriority } from "@/components/event/add/EventAddPriority";
import { EventAddType } from "@/components/event/add/EventAddType";
import { ChevronLeftIcon, XIcon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { useEventAddFunnelStore } from "@/store/event";
import { cn } from "@/utils/cn";

export default function EventAddPage() {
  const { step } = useEventAddFunnelStore();

  const canMoveToPrevious = step !== "type";

  return (
    <main className="flex flex-col px-4 pb-4 pt-11">
      <div
        className={cn(
          "flex justify-between",
          !canMoveToPrevious && "justify-end",
        )}
      >
        {canMoveToPrevious && (
          <IconButton size="large">
            <ChevronLeftIcon />
          </IconButton>
        )}
        <IconButton size="large">
          <XIcon />
        </IconButton>
      </div>
      {step === "type" && <EventAddType />}
      {step === "name" && <EventAddName />}
      {step === "date" && <EventAddDate />}
      {step === "friend" && <EventAddFriend />}
      {step === "priority" && <EventAddPriority />}
      {step === "overview" && <EventAddOverview />}
      {step === "complete" && <EventAddComplete />}
    </main>
  );
}
