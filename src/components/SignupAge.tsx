import { signuppage } from "@/app/signup/page";
import { Button } from "./ui/Button";
import { ChevronLeftIcon } from "./ui/icons/ChevronLeftIcon";

export function SignupAge({
  changeStep,
  changeUserInfo,
  registerData,
}: signuppage) {
  const handleChange = (e: any) => {
    e.preventDefault();
    changeUserInfo((prv) => ({ ...prv, age: e.target.value }));
  };
  const handleBack = () => {
    changeUserInfo((prv) => ({ ...prv, name: "" }));
    changeStep("name");
  };
  return (
    <div className="relative flex flex-col justify-between">
      <div>
        <div className="absolute  -top-[60px]">
          <ChevronLeftIcon size="32px" onClick={handleBack} />
        </div>
        <p className="text-[26px] font-semibold">
          {registerData.name}님의
          <br />
          나이가 궁금해요!
        </p>
        <input type="number" onChange={handleChange} />
      </div>
      <div className="mb-14">
        <Button
          disabled={registerData.age > 0 ? false : true}
          bgcolor={registerData.age > 0 ? "primary" : "accents-0"}
          textcolor={registerData.age > 0 ? "white" : "black"}
          text="다음"
          size="big"
          onClick={() => {
            changeStep("sex");
          }}
        />
      </div>
    </div>
  );
}
