"use client";

import { EventAddComplete } from "@/components/event/add-funnel/EventAddComplete";
import { EventAddDate } from "@/components/event/add-funnel/EventAddDate";
import { EventAddFriend } from "@/components/event/add-funnel/EventAddFriend";
import { EventAddName } from "@/components/event/add-funnel/EventAddName";
import { EventAddOverview } from "@/components/event/add-funnel/EventAddOverview";
import { EventAddPriority } from "@/components/event/add-funnel/EventAddPriority";
import { EventAddType } from "@/components/event/add-funnel/EventAddType";
import { ChevronLeftIcon, XIcon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import {
  EventAddFunnelContextProvider,
  useEventAddFunnelContext,
} from "@/store/event-add-funnel";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

const STEPS = [
  "type",
  "name",
  "date",
  "friend",
  "priority",
  "overview",
  "complete",
];

export const EventAddFunnel = () => {
  return (
    <EventAddFunnelContextProvider steps={STEPS}>
      <PageHeader />
      <FunnelList />
    </EventAddFunnelContextProvider>
  );
};

const FunnelList = () => {
  const { funnel } = useEventAddFunnelContext();

  return (
    <>
      {funnel.current === "type" && <EventAddType />}
      {funnel.current === "name" && <EventAddName />}
      {funnel.current === "date" && <EventAddDate />}
      {funnel.current === "friend" && <EventAddFriend />}
      {funnel.current === "priority" && <EventAddPriority />}
      {funnel.current === "overview" && <EventAddOverview />}
      {funnel.current === "complete" && <EventAddComplete />}
    </>
  );
};

const PageHeader = () => {
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
        <IconButton size="large" onClick={funnel.previous}>
          <ChevronLeftIcon />
        </IconButton>
      )}
      <IconButton size="large" onClick={() => router.push("/")}>
        <XIcon />
      </IconButton>
    </div>
  );
};
