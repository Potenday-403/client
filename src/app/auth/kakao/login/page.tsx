"use client";

// import { getKakaoToken } from "@/services/kakao";
// import { useQuery } from "@tanstack/react-query";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function KakaoLoginPage() {
//   const navigation = useRouter();
//   const searchParams = useSearchParams();
//   const AuthorizationCode = searchParams.get("code")!;
//   const [userInfo, setUserInfo] = useState();

//   const query = useQuery({
//     queryKey: ["kakaotoken"],
//     queryFn: () => getKakaoToken(AuthorizationCode),
//   });
//   console.log(query.data, 1);

//   useEffect(() => {
//     userInfo ? navigation.push("/") : navigation.push("/signup");
//   }, [userInfo]);

//   return <div></div>;
// }
export default function Loginpage() {
  console.log(1);
  console.log(process.env.NEXT_PUBLIC_KAKAO_INTERGRITY);
  console.log(process.env.NEXT_PUBLIC_KAKAO_ROGOUT_URI);
  console.log(process.env.NEXT_PUBLIC_KAKAO_ROGIN_URI);
  console.log(process.env.NEXT_PUBLIC_KAKAO_WEB_DOMAIN);

  return <div>서버컴포넌트에서는 받아와 질지...</div>;
}
