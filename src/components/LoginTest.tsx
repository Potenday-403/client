"use client";

export function LoginTest() {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_ROGIN_URI}&response_type=code`;
  console.log(process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY);
  console.log(process.env.NEXT_PUBLIC_KAKAO_ROGIN_URI);

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <button type="button" onClick={handleLogin}>
      카카오톡 로그인
    </button>
  );
}
