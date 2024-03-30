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
import {
  EventAddFunnelContextProvider,
  useEventAddFunnelContext,
} from "@/store/event-add-funnel";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

export default function EventAddPage() {
  return (
    <EventAddFunnelContextProvider>
      <main className="flex flex-1 flex-col px-4 pt-4">
        <Header />
        <EventAddType />
        <EventAddName />
        <EventAddDate />
        <EventAddFriend />
        <EventAddPriority />
        <EventAddOverview />
        <EventAddComplete />
      </main>
    </EventAddFunnelContextProvider>
  );
}

const Header = () => {
  const { funnel } = useEventAddFunnelContext();

  const router = useRouter();

  return (
    <div
      className={cn(
        "flex justify-between",
        !funnel.canMoveToPrevious && "justify-end",
      )}
    >
      {funnel.canMoveToPrevious && (
        <IconButton size="large">
          <ChevronLeftIcon />
        </IconButton>
      )}
      <IconButton size="large" onClick={() => router.push("/")}>
        <XIcon />
      </IconButton>
    </div>
  );
};
