import { signuppage } from "@/app/signup/page";
import { Button } from "./ui/Button";

export function SignupName({
  changeStep,
  changeUserInfo,
  registerData,
}: signuppage) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    changeUserInfo((prv) => ({ ...prv, name: e.target.value }));
  };
  return (
    <div className="flex w-full flex-col justify-between">
      <div>
        <p className="text-[26px] font-semibold">
          반가워요!
          <br />
          이름을 입력해주세요
        </p>
        <input type="text" onChange={handleChange} />
      </div>
      <Button
        className="mb-14"
        variant="primary"
        size="large"
        disabled={registerData.name.length === 0}
        onClick={() => {
          changeStep("age");
        }}
      >
        다음
      </Button>
    </div>
  );
}
