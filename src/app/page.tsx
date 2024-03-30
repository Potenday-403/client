"use client";

import { EventCard } from "@/components/home/EventCard";
import { ReminderCard } from "@/components/home/ReminderCard";
import { ReminderPlaceholder } from "@/components/home/ReminderPlaceholder";
import { Calendar } from "@/components/ui/Calendar";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Subtitle } from "@/components/ui/Subtitle";
import { Title } from "@/components/ui/Title";
import { useCalendar } from "@/hooks/useCalender";
import { useCheckboxGroup } from "@/hooks/useCheckboxGroup";
import { Reminder } from "@/models/reminder";
import { PRIORITY } from "@/models/shared";
import { isIn10DaysFromNow } from "@/utils/cn";
import { format, isSameDay } from "date-fns";
import { ko } from "date-fns/locale";

const DUMMY_REMINDERS: Reminder[] = [
  {
    id: 1,
    name: "김밤비 결혼식",
    priority: PRIORITY.CRUCIAL,
    scheduledAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "김밤비 결혼식",
    priority: PRIORITY.CRUCIAL,
    scheduledAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "김밤비 결혼식",
    priority: PRIORITY.CRUCIAL,
    scheduledAt: new Date().toISOString(),
  },
];

export default function HomePage() {
  const calendar = useCalendar();
  const reminderCheckGroup = useCheckboxGroup();
  const eventCheckGroup = useCheckboxGroup();

  const reminders = DUMMY_REMINDERS;

  const remindersIn10Days = reminders.filter((reminder) =>
    isIn10DaysFromNow(new Date(reminder.scheduledAt)),
  );

  const remindersOnSelectedDate = reminders.filter((reminder) =>
    isSameDay(reminder.scheduledAt, calendar.selected?.toISOString() || ""),
  );

  const onCalenderSelect = (date?: Date) => {
    eventCheckGroup.uncheckAll();
    calendar.onSelect(date);
  };

  return (
    <main className="px-4 pb-20 pt-4">
      <Title className="mt-[72px]">경조사 리마인더</Title>
      <Subtitle>10일 이내의 경조사를 확인할 수 있어요</Subtitle>
      <div className="mt-5 flex flex-col gap-[10px]">
        {reminders.length === 0 && <ReminderPlaceholder />}
        {remindersIn10Days.map((reminder) => (
          <ReminderCard
            key={reminder.id}
            id={String(reminder.id)}
            checked={reminderCheckGroup.checked(String(reminder.id))}
            name={reminder.name}
            priority={reminder.priority}
            onChange={reminderCheckGroup.onChange}
          />
        ))}
      </div>
      <Calendar
        className="mt-10"
        selected={calendar.selected}
        onSelect={onCalenderSelect}
      />
      {calendar.selected && (
        <SectionTitle className="mt-10">
          {format(calendar.selected, "M월 d일", { locale: ko })} 경조사
        </SectionTitle>
      )}
      <div className="mt-3 flex flex-col gap-[10px]">
        {remindersOnSelectedDate.map((event) => (
          <EventCard
            key={event.id}
            id={String(event.id)}
            checked={eventCheckGroup.checked(String(event.id))}
            name={event.name}
            priority={event.priority}
            date={new Date(event.scheduledAt)}
            onChange={eventCheckGroup.onChange}
          />
        ))}
      </div>
    </main>
  );
}
