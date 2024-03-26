import { Importance } from "@/components/ui/Calendar";
import { Card } from "@/components/ui/Card";

interface EventCardProps {
  id: string;
  title: string;
  date: Date;
  importance: Importance;
}

export const EventCard = ({ title }: EventCardProps) => {
  return (
    <Card>
      <Card.Content className="flex">
        <div className="rounded-full border border-[#D9D9D9] bg-white" />
        <div className="flex flex-col">
          <div className="flex items-center">
            <p className="mr-[10px] text-[32px] font-bold text-[#3C3C43]">
              D-7
            </p>
            <div className="h-7 w-[50px] rounded-[16px] bg-gray-400" />
            <div className="mt-4 flex flex-col">
              <p className="text-[20px] font-bold">{title}</p>
              <p className="text-sm font-medium text-[#8A8A8A]">
                오전 09:00 2023.03.29
              </p>
            </div>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};
