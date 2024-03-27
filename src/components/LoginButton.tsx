"use client";

export function LoginButton() {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_ROGIN_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <button
      className="h-[56px] w-[343px] rounded-lg bg-[#FEE500] text-base font-semibold"
      type="button"
      onClick={handleLogin}
    >
      카카오톡 로그인
    </button>
  );
}
