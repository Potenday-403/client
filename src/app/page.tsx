import { EventCard } from "@/components/EventCard";
import { Calendar, Event } from "@/components/ui/Calendar";

const DUMMY_EVENTS: Event[] = [
  {
    id: "1",
    title: "김밤비 결혼식",
    date: new Date(),
    importance: "low",
  },
  {
    id: "2",
    title: "김밤비 결혼식",
    date: new Date(Date.now() - 24 * 60 * 60 * 1000),
    importance: "medium",
  },
  {
    id: "3",
    title: "김밤비 결혼식",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    importance: "high",
  },
];

export default function HomePage() {
  return (
    <div className="flex justify-center">
      <main className="h-screen w-full max-w-[375px] border px-4 pt-8">
        <Calendar events={DUMMY_EVENTS} />
        <div className="mt-8 flex flex-col">
          {DUMMY_EVENTS.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </main>
    </div>
  );
}
