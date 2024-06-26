"use client";

import { WithCard } from "@/components/WithCard";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { ChevronLeftIcon } from "@/components/ui/Icon";
import { CirclePlusIcon } from "@/components/ui/Icon";
import { SquarePenIcon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { useRouter } from "next/navigation";

export default function FriendsDetailPage() {
  const navigation = useRouter();
  return (
    <div className="min-h-main relative flex flex-col bg-white px-4 pt-[116px]">
      <div className="absolute left-2 top-11">
        <IconButton size="large" onClick={() => navigation.push("/friends")}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <p className="mb-4 text-2xl font-semibold">김밤비님 상세정보</p>
      <div className="relative mb-5 flex items-center gap-2">
        <Avatar imageUrl="https://images.unsplash.com/photo-1566552824281-b476ad9e2315?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Badge variant="red">김밤비님의 경조사 D-8</Badge>
        <div className="absolute right-0 text-accents-4">
          <IconButton onClick={() => navigation.push("/friends/edit")}>
            <SquarePenIcon />
          </IconButton>
        </div>
      </div>
      <div className="mb-7 flex flex-col  gap-3 border-b-2 border-accents-1">
        <div className="flex items-center gap-3">
          <p className="text-xl">김밤비</p>
          <p className="text-base">D+1 25세</p>
        </div>
        <p className="mb-2 text-xs text-primary">여성</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="mb-10 flex items-center gap-4">
          <p className="text-xl font-semibold">나와의 관계</p>
          <div className="rounded-lg bg-gray-subtle px-3 py-1">친한친구</div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">함께한 내역</p>
          <div className="text-accents-3">
            <IconButton onClick={() => navigation.push("/friends/edit")}>
              <CirclePlusIcon />
            </IconButton>
          </div>
        </div>
        <div className="flex max-h-80 flex-col gap-2 overflow-auto ">
          <WithCard />
          <WithCard />
          <WithCard />
          <WithCard />
        </div>
      </div>
    </div>
  );
}
