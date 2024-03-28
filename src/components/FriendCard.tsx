import { useState } from "react";
import { Avatar } from "./ui/Avatar";
import { Badge } from "./ui/Badge";
import { EmptyIcon } from "./ui/icons/EmptyIcon";
import { FillIcon } from "./ui/icons/FillIcon";
import { NewIcon } from "./ui/icons/NewIcon";

export function FriendCard() {
  const [check, setCheck] = useState(false);
  const [newFriends, setNewFriends] = useState(true);
  return (
    <div className="flex h-[93px] w-[344px] items-center justify-between bg-white  ">
      <div className="relative flex gap-3">
        {check === false ? <EmptyIcon /> : <FillIcon />}
        {newFriends === true && (
          <div className="absolute -top-1 left-[70px]">
            <NewIcon />
          </div>
        )}
        <Avatar imageurl="https://images.unsplash.com/photo-1566552824281-b476ad9e2315?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div>
          <p className="text-base">김도토리 25세</p>
          <p className="text-xs text-primary ">남성</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className="flex h-7 w-20 items-center justify-center rounded-3xl bg-gray-subtle  px-3 py-3 text-sm">
          <p>친한친구</p>
        </div>
        <Badge
          text="김밤비님의 경조사 D-8"
          bgcolor="red-light"
          textcolor="red"
        />
      </div>
    </div>
  );
}
