import { signuppage } from "@/app/signup/page";
import { Button } from "@/components/ui/Button";
import { ChevronLeftIcon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input";
import { IconButton } from "@/components/ui/IconButton";

export function SignupAge({
  changeStep,
  changeUserInfo,
  registerData,
}: signuppage) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    changeUserInfo((prv) => ({ ...prv, age: Number(e.target.value) }));
  };
  const handleBack = () => {
    changeUserInfo((prv) => ({ ...prv, name: "" }));
    changeStep("name");
  };

  return (
    <div className="relative flex flex-col justify-between">
      <div>
        <div className="absolute  -top-[60px]">
          <IconButton size="large" onClick={handleBack}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <p className="text-[26px] font-semibold">
          {registerData.name}님의
          <br />
          나이가 궁금해요!
        </p>
        <Input allowNumberOnly onChange={handleChange} />
      </div>
      <div className="mb-14">
        <Button
          variant="primary"
          size="large"
          disabled={registerData.age <= 0}
          onClick={() => {
            changeStep("sex");
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
