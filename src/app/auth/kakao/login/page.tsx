"use client";

import { getKakaoToken } from "@/services/kakao";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function KakaoLoginPage() {
  const navigation = useRouter();
  const searchParams = useSearchParams();
  const AuthorizationCode = searchParams.get("code")!;
  const [userInfo, setUserInfo] = useState();

  const query = useQuery({
    queryKey: ["kakaotoken"],
    queryFn: () => getKakaoToken(AuthorizationCode),
  });
  console.log(query.data, 1);

  useEffect(() => {
    userInfo ? navigation.push("/") : navigation.push("/signup");
  }, [userInfo]);

  return <div></div>;
}
