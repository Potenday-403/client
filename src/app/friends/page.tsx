"use client";
import { FriednEventCard } from "@/components/FriendEventCard";
import { FriendCard } from "@/components/FriendCard";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { PlusIcon, SearchIcon, TrashIcon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";

export default function FriednsPage() {
  const navigation = useRouter();

  return (
    <div className="min-h-main relative flex flex-col bg-white px-4 pt-[116px]">
      <p className="mb-5 text-2xl font-semibold">친구 목록</p>
      <div className="absolute right-4 top-11 ">
        <IconButton onClick={() => navigation.push("/friends/add")}>
          <PlusIcon />
        </IconButton>
      </div>

      <div className="absolute left-7 top-[180px] text-accents-3">
        <SearchIcon className="w-6" />
      </div>

      <input
        className="mb-[30px] h-[48px] w-[343px] rounded-lg bg-accents-1 pl-10 text-base text-accents-3 "
        type="text"
      />

      <div className="relative mb-5 h-[160px] w-[343px] rounded-lg bg-white px-4 pt-3">
        <p className=" text-2xl font-semibold">다가오는 경조사</p>
        {/* <div className="flex w-full items-center justify-center pt-10">
          <p>추가된 친구가 없어요</p>
        </div> */}
        {/* <div className="flex w-full items-center justify-center pt-10">
          <p>
            잊은 경조사는 없으신가요?
            <br />
            다가오는 경조사가 없어요
          </p>
        </div> */}
        <div className="mt-3 flex gap-5">
          <FriednEventCard />
          <FriednEventCard />
          <FriednEventCard />
          <FriednEventCard />
          <FriednEventCard />
        </div>
        <div className="absolute right-4 top-3">
          <TrashIcon size="24px" />
        </div>
      </div>
      <FriendCard />
      {/* <div className="mx-auto">
        <Button text="추가하기" size="small" />
      </div> */}
    </div>
  );
}
