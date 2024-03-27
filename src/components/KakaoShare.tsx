"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export function KakaoShare() {
  const [hope, setHope] = useState(0);

  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
        console.log("after Init: ", window.Kakao.isInitialized());
        window.Kakao.Share.createDefaultButton({
          container: "#kakaotalk-sharing-btn",
          objectType: "feed",
          content: {
            title: "딸기 치즈 케익",
            description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
            imageUrl:
              "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
            link: {
              // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
              mobileWebUrl: "https://developers.kakao.com",
              webUrl: "https://developers.kakao.com",
            },
          },
          social: {
            likeCount: 286,
            commentCount: 45,
            sharedCount: 845,
          },
          buttons: [
            {
              title: "웹으로 보기",
              link: {
                mobileWebUrl: "https://developers.kakao.com",
                webUrl: "https://developers.kakao.com",
              },
            },
            {
              title: "앱으로 보기",
              link: {
                mobileWebUrl: "https://developers.kakao.com",
                webUrl: "https://developers.kakao.com",
              },
            },
          ],
        });
      }
    }
  }, [hope]);

  return (
    <>
      <button>up</button>
      <a
        id="kakaotalk-sharing-btn"
        href="javascript:;"
        onClick={() => setHope((pre) => pre + 1)}
      >
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </a>
    </>
  );
}
