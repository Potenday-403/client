"use client";
import { LogoutTest } from "@/components/LogoutTest";
import { getKakaoToken } from "@/services/kakao";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function KakaoLoginPage() {
  const searchParams = useSearchParams();
  const AuthorizationCode = searchParams.get("code")!;

  const query = useQuery({
    queryKey: ["kakaotoken"],
    queryFn: () => getKakaoToken(AuthorizationCode),
  });
  console.log(query.data);

  return (
    <div>
      <LogoutTest />
    </div>
  );
}