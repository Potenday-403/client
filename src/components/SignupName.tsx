import { signuppage } from "@/app/signup/page";
import { Button } from "./ui/Button";

export function SignupName({
  changeStep,
  changeUserInfo,
  registerData,
}: signuppage) {
  const handleChange = (e: any) => {
    e.preventDefault();
    changeUserInfo((prv) => ({ ...prv, name: e.target.value }));
  };
  return (
    <div className="flex flex-col justify-between">
      <div>
        <p className="text-[26px] font-semibold">
          반가워요!
          <br />
          이름을 입력해주세요
        </p>
        <input type="text" onChange={handleChange} />
      </div>
      <div className="mb-14">
        <Button
          disabled={registerData.name.length > 1 ? false : true}
          bgcolor={registerData.name.length > 1 ? "primary" : "accents-0"}
          textcolor={registerData.name.length > 1 ? "white" : "black"}
          text="다음"
          size="big"
          onClick={() => {
            changeStep("age");
          }}
        />
      </div>
    </div>
  );
}
