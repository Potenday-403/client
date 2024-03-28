"use client";

type Props = {
  icon?: React.ReactNode;
  onClick?: () => void;
};
export function FamilyButton({
  icon,

  onClick,
}: Props) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={`flex h-14 w-80 items-center justify-between gap-2 rounded-xl bg-gray-subtle p-4`}
    >
      <button onClick={handleClick}>가족</button>
      {icon && icon}
    </div>
  );
}
