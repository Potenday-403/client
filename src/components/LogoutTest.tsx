"use client";

export function LogoutTest() {
  const handleClink = () => {
    const logoutURL = `https://kauth.kakao.com/oauth/logout?client_id=$b3e1ddc013de897a5e8ee758444e6b97&logout_redirect_uri=https://client-7ui8gxta6-tmdgus95s-projects.vercel.app/auth/kakao/logout`;
    window.location.href = logoutURL;
  };

  console.log("로그아웃 테스트");
  console.log(process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY, "레스트api");
  console.log(process.env.NEXT_PUBLIC_KAKAO_ROGOUT_URI, "로그아웃 uri");

  return <button onClick={handleClink}>카카오와 함께 로그아웃</button>;
}
