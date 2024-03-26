import axios from "axios";

export const getKakaoToken = async (AuthorizationCode: string) => {
  try {
    const response = await axios({
      method: "post",
      url: `https://kauth.kakao.com/oauth/token`,
      data: {
        grant_type: "authorization_code",
        client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
        redirect_uri: process.env.NEXT_PUBLIC_KAKAO_ROGIN_URI,
        code: AuthorizationCode,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
