"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { XIcon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { useRouter } from "next/navigation";

export default function FriendsEditPage() {
  const navigation = useRouter();

  return (
    <div className="min-h-main relative flex flex-col bg-white px-4 pt-[116px]">
      <div className="absolute right-3 top-16">
        <IconButton onClick={() => navigation.push("/friends")}>
          <XIcon />
        </IconButton>
      </div>
      <p className="mb-4 text-2xl font-semibold">친구 상세 정보 수정하기</p>
      <div className="relative mb-5 flex items-center gap-2">
        <Avatar imageUrl="https://images.unsplash.com/photo-1566552824281-b476ad9e2315?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <input
        className="mt-5 border-b text-xl font-semibold outline-none"
        type="text"
        placeholder="김담비"
      />
      <input
        className="mt-6 border-b text-xl font-semibold outline-none"
        type="number"
        placeholder="20"
      />
      <div className="mt-6 flex items-center justify-around gap-[10px]">
        <Button variant="default">남성</Button>
        <Button variant="primary">여성</Button>
      </div>
      <div className="mt-10 flex">
        <p className="w-36 text-xl font-semibold">나와의 관계</p>
        <div className="flex flex-wrap gap-2">
          <button className="py3 rounded-xl bg-accents-2 px-2">친한친구</button>
          <button className="py3 rounded-xl bg-accents-2 px-2">친구</button>
          <button className="py3 rounded-xl bg-accents-2 px-2">직장동료</button>
          <button className="py3 rounded-xl bg-accents-2 px-2">상사</button>
          <button className="py3 rounded-xl bg-accents-2 px-2">가족</button>
        </div>
      </div>
      <Button variant="primary" size="large" className="mt-[183px]">
        저장하기
      </Button>
    </div>
  );
}
