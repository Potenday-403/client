"use client";

export function LogoutTest() {
  const handleClink = () => {
    const logoutURL = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&logout_redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_ROGOUT_URI}`;
    window.location.href = logoutURL;
  };

  return <button onClick={handleClink}>카카오와 함께 로그아웃</button>;
}
