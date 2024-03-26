"use client";

type Props = {
  bgcolor: string;
  textcolor?: string;
  text: string;
  icon?: string;
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
        className={`flex items-center gap-1 rounded-3xl  px-3 py-1 bg-${bgcolor}`}
        onClick={handleClick}
      >
        {icon && <div className="h-5 w-5 bg-black"></div>}
        <p className={`text-${textcolor}`}>{text}</p>
      </button>
    </>
  );
}
