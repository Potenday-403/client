"use client";

type Props = {
  text: string;
  bgcolor: string;
  size: "small" | "normal" | "big";
  align?: "center" | "left";
  icon?: React.ReactNode;
  textcolor?: string;
  onClick?: () => void;
};
export function Button({
  text,
  bgcolor,
  icon,
  textcolor,
  align = "center",
  size,
  onClick,
}: Props) {
  const handleClick = () => {
    onClick && onClick();
  };

  const sizeClass = getSizeClass(size);

  return (
    <div
      className={`flex items-center gap-2 rounded-xl p-4 ${align === "center" ? "justify-center" : "justify-start"} ${sizeClass} bg-${bgcolor} ${textcolor ? `text-${textcolor}` : ""}  `}
    >
      {icon && icon}
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

function getSizeClass(size: string) {
  switch (size) {
    case "big":
      return "h-14 w-80";
    case "normal":
      return "h-12 w-40";
    default:
      return "h-10 w-32";
  }
}
