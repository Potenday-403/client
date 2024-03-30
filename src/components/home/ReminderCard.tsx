import { Priority } from "@/models/shared";
import { PriorityBadge } from "../PriorityBadge";
import { Card } from "../ui/Card";
import { CheckIndicator } from "../ui/CheckIndicator";

interface ReminderCardProps {
  id: string;
  checked: boolean;
  name: string;
  priority: Priority;
  onChange: (name: string) => void;
}

export const ReminderCard = ({
  id,
  checked,
  name,
  priority,
  onChange,
}: ReminderCardProps) => {
  return (
    <button onClick={() => onChange(id)}>
      <Card>
        <Card.Content className="flex items-center p-[14px]">
          <CheckIndicator className="mr-2" checked={checked} />
          <p className="mr-3 font-medium text-accents-5">{name}</p>
          <PriorityBadge priority={priority} />
        </Card.Content>
      </Card>
    </button>
  );
};
