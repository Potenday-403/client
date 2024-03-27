"use client";

type Props = {
  bgcolor: string;
  textcolor?: string;
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};
export function Badge({
  icon,
  text,
  textcolor = "black",
  bgcolor,
  onClick,
}: Props) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <>
      <button
        className={`flex h-7 items-center gap-1 rounded-3xl px-3  py-3 text-sm bg-${bgcolor}`}
        onClick={handleClick}
      >
        {icon && icon}
        <p className={`text-${textcolor}`}>{text}</p>
      </button>
    </>
  );
}
