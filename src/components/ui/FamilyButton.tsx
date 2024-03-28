"use client";

type Props = {
  text: string;
  icon?: React.ReactNode;
  textcolor?: string;
  bgcolor?: string;
  onClick?: () => void;
};
export function FamilyButton({
  icon,
  textcolor,
  text,
  onClick,
  bgcolor,
}: Props) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={`flex h-[59px] w-[343px] items-center justify-between gap-2 rounded-xl ${bgcolor === "primary" ? "bg-primary" : "bg-accents-0"} ${textcolor === "primary" ? "text-black" : "text-white"}  p-4`}
    >
      <button onClick={handleClick}>{text}</button>
      {icon && icon}
    </div>
  );
}
