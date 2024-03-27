"use client";

import { cn } from "@/utils/cn";
import { differenceInCalendarDays } from "date-fns";
import { ko } from "date-fns/locale";
import { createContext, useContext, useEffect, useRef } from "react";
import {
  DateFormatter,
  DayPicker,
  DayProps,
  useDayRender,
} from "react-day-picker";

// TODO: collapse 기능 추가
// TODO: 일정 표시 기능 추가
// TODO: 선택된 날짜 표시 기능 추가
// TODO: 아이콘 및 스타일 추가

interface CalendarProps {
  selected?: Date;
  onSelect?: (date?: Date) => void;
  disablePastDates?: boolean;
}

export const Calendar = ({
  selected,
  onSelect,
  disablePastDates = false,
}: CalendarProps) => {
  return (
    <CalderContext.Provider value={{ disablePastDates }}>
      <DayPicker
        locale={ko}
        mode="single"
        selected={selected}
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
          day_hidden: "invisible",
        }}
      />
    </CalderContext.Provider>
  );
};

const Day = ({ date, displayMonth }: DayProps) => {
  const { disablePastDates } = useCalendarContext();
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

  const disabled = isPastDate(date) && disablePastDates;
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
    </button>
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

type CalendarContextValue = {
  disablePastDates: boolean;
};

const CalderContext = createContext<CalendarContextValue | null>(null);

const useCalendarContext = () => {
  const context = useContext(CalderContext);

  if (!context) {
    throw new Error(
      "useCalendarContext는 Calendar 컴포넌트 안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
