"use client";

type Props = {
  text: string;
  bgcolor: string;
  icon: string;
  size: "small" | "normal" | "big";
  textcolor?: string;
  onClick?: () => void;
};
export function Button({
  text,
  bgcolor,
  icon,
  textcolor,
  size,
  onClick,
}: Props) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-xl p-4 ${size === "big" ? "h-14 w-80" : size === "normal" ? "h-12 w-40" : "h-10 w-32"} bg-${bgcolor} ${textcolor ? `text-${textcolor}` : ""}  `}
      onClick={handleClick}
    >
      {icon || <div className="h-5 w-5 bg-yellow"></div>}
      {text}
    </button>
  );
}
