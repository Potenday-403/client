"use client";

import {
  BarChartIcon,
  CalendarPlusIcon,
  HomeIcon,
  MessageSquareIcon,
  UserSquare2Icon,
} from "@/components/ui/Icon";
import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import { usePathname } from "next/navigation";

const bottomTabRoutes = ["/", "/friends", "/statistics"];

type NavItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

const bottomNav: NavItem[] = [
  {
    label: "메인",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    label: "추천문구",
    icon: <MessageSquareIcon />,
    href: "/greetings/recommend",
  },
  {
    label: "경조사 등록",
    icon: <CalendarPlusIcon />,
    href: "/events/add",
  },
  {
    label: "친구",
    icon: <UserSquare2Icon />,
    href: "/friends",
  },
  {
    label: "통계",
    icon: <BarChartIcon />,
    href: "/statistics",
  },
];

export const BottomTab = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const isVisible = bottomTabRoutes.includes(pathname);

  if (!isVisible) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto flex h-[92px] w-full max-w-main justify-between border-t border-accents-2 bg-white px-[10px] pt-4">
      {bottomNav.map((item, index) => (
        <BottomTabItem key={index} item={item} isActive={isActive(item.href)} />
      ))}
    </nav>
  );
};

interface BottomTabItemProps {
  item: NavItem;
  isActive: boolean;
}

const BottomTabItem = ({ item, isActive }: BottomTabItemProps) => {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex h-[42px] w-[58px] flex-col items-center text-accents-4",
        isActive && "text-primary",
      )}
    >
      <Slot className="h-6 w-6">{item.icon}</Slot>
      <p className="mt-1 text-xs">{item.label}</p>
    </Link>
  );
};
