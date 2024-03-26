"use client";

type Props = {
  icon: string;
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
    <button
      className={`flex h-14 w-80 items-center justify-between gap-2 rounded-xl bg-gray-subtle p-4`}
      onClick={handleClick}
    >
      가족
      {icon || <div className="h-5 w-5 bg-yellow"></div>}
    </button>
  );
}
