"use client";

import { cn } from "@/utils/cn";
import { differenceInCalendarDays } from "date-fns";
import { ko } from "date-fns/locale";
import { useEffect, useRef } from "react";
import {
  DateFormatter,
  DayPicker,
  DayProps,
  Row,
  RowProps,
  useDayRender,
} from "react-day-picker";

// 임시 타입
export type Importance = "low" | "medium" | "high";

export type Event = {
  id: string;
  title: string;
  date: Date;
  importance: Importance;
};

interface CalendarProps {
  events: Event[];
  onSelect?: (date?: Date) => void;
  isCollapsed?: boolean;
}

export const Calendar = ({ events, onSelect, isCollapsed }: CalendarProps) => {
  const getEventForDate = (events: Event[], date: Date) => {};

  return (
    <DayPicker
      locale={ko}
      mode="single"
      onSelect={onSelect}
      id="date-picker"
      showOutsideDays
      fixedWeeks
      formatters={{ formatCaption: formatCaption }}
      components={{
        Day: Day,
      }}
      classNames={{
        months: "flex",
        caption: "flex justify-center relative items-center h-10",
        caption_label:
          "font-semibold absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center",
        nav: "flex items-center rounded-md w-full h-full justify-between border-b",
        nav_button: "hover:bg-accents-1 rounded-full p-0.5 transition",
        nav_button_previous: "!absolute left-2",
        nav_button_next: "!absolute right-2",
        head_row: "flex w-full",
        head_cell:
          "w-[50px] h-[38px] text-accents-2 font-normal m-0 flex items-center justify-center p-0",
        row: "flex w-full mt-2 border-b",
        cell: "relative rounded-md p-0 text-center focus-within:relative w-full h-[70px]",
        day: cn(
          "h-8 w-8 rounded-full p-0 text-center outline-none transition-all",
          "hover:bg-accents-1",
          "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50",
        ),
        day_today: "bg-red text-white hover:bg-red hover:text-white",
        day_outside: "text-accents-4 aria-selected:text-white",
        day_disabled: "text-accents-4 pointer-events-none bg-accents-5",
        // day_range_middle:
        // "aria-selected:!bg-ui-bg-highlight aria-selected:!text-ui-fg-interactive bg-red-500",
        day_hidden: "invisible",
      }}
    />
  );
};

const Day = ({ date, displayMonth }: DayProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { activeModifiers, buttonProps, divProps, isButton } = useDayRender(
    date,
    displayMonth,
    ref,
  );

  const { selected } = activeModifiers;

  useEffect(() => {
    if (selected) {
      ref.current?.focus();
    }
  }, [selected]);

  const disabled = isPastDate(date);
  const disabledStyle = "pointer-events-none text-accents-4";

  if (!isButton) {
    <div
      {...divProps}
      className={cn(
        "flex items-center justify-center",
        divProps.className,
        disabled && disabledStyle,
      )}
    />;
  }

  const {
    children: buttonChildren,
    className: buttonClassName,
    ...buttonPropsRest
  } = buttonProps;

  return (
    <button
      ref={ref}
      type="button"
      className={cn("relative", buttonClassName, disabled && disabledStyle)}
      {...buttonPropsRest}
    >
      {buttonChildren}

      {/* {today && <Dot />} */}
    </button>
  );
};

const Dot = () => {
  return (
    <span
      className={cn(
        "absolute right-3 top-11 h-2 w-2 rounded-full bg-[#BBBBBB]",
        // !selected && "bg-green-500",
        // selected && "bg-red-500",
        // selected && range_middle && "bg-purple-500",
        // disabled && "bg-gray-500",
      )}
    />
  );
};

const isPastDate = (date: Date) => {
  return differenceInCalendarDays(date, new Date()) < 0;
};

const formatCaption: DateFormatter = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const formattedDate = `${year}년, ${month}월`;

  return formattedDate;
};
