import { ChevronRightIcon, Clock2Icon } from "@/components/ui/Icon";
import { Priority } from "@/models/shared";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Link from "next/link";
import { PriorityBadge } from "../PriorityBadge";
import { Card } from "../ui/Card";
import { CheckIndicator } from "../ui/CheckIndicator";
import { IconButton } from "../ui/IconButton";

interface EventCardProps {
  id: string;
  checked: boolean;
  name: string;
  priority: Priority;
  date: Date;
  onChange: (name: string) => void;
}

export const EventCard = ({
  id,
  checked,
  name,
  priority,
  date,
  onChange,
}: EventCardProps) => {
  return (
    <button onClick={() => onChange(id)}>
      <Card>
        <Card.Content className="flex">
          <div className="flex w-full">
            <CheckIndicator className="mr-2 mt-1" checked={checked} />
            <div className="flex w-full flex-col">
              <div className="flex items-center">
                <p className="mr-[10px] text-[32px] font-bold leading-none text-accents-5">
                  D-5
                </p>
                <PriorityBadge priority={priority} />
              </div>
              <div className="flex w-full">
                <div className="mt-4 flex flex-col">
                  <p className="text-left text-[20px] font-bold">{name}</p>
                  <p className="flex items-center text-sm font-medium text-[#8A8A8A]">
                    <Clock2Icon className="mr-0.5 h-[14px] w-[14px]" />
                    {format(date, "aaaa hh:mm yyyy.MM.dd", { locale: ko })}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <IconButton
                asChild
                size="large"
                onClick={(e) => e.stopPropagation()}
              >
                <Link href={`/events/${id}`}>
                  <ChevronRightIcon className="h-8 w-8" />
                </Link>
              </IconButton>
            </div>
          </div>
        </Card.Content>
      </Card>
    </button>
  );
};
