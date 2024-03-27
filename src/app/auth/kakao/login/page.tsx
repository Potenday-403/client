"use client";
import { LogoutTest } from "@/components/LogoutTest";
import { getKakaoToken } from "@/services/kakao";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function KakaoLoginPage() {
  const searchParams = useSearchParams();
  const AuthorizationCode = searchParams.get("code")!;

  console.log(process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY);
  console.log(process.env.NEXT_PUBLIC_KAKAO_ROGOUT_URI);

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
