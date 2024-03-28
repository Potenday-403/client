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
    <div
      className={`flex h-7 items-center gap-1 rounded-3xl px-3  py-3 text-sm text-${textcolor} bg-${bgcolor}`}
    >
      {icon && icon}
      <button onClick={handleClick}>
        <p>{text}</p>
      </button>
    </div>
  );
}
