"use client";

type Props = {
  text: string;
  size: "small" | "normal" | "big";
  bgcolor?: string;
  disabled?: boolean;
  align?: "center" | "left";
  icon?: React.ReactNode;
  textcolor?: string;
  onClick?: () => void;
};
export function Button({
  onClick,
  text,
  icon,
  bgcolor = "accents-0",
  textcolor = "black",
  size,
  align = "center",
  disabled = true,
}: Props) {
  const handleClick = () => {
    onClick && onClick();
  };

  const sizeClass = getSizeClass(size);

  return (
    <div
      className={`flex items-center gap-2 rounded-xl p-4  bg-${bgcolor} ${align === "center" ? "justify-center" : "justify-start"} ${sizeClass}  ${textcolor ? `text-${textcolor}` : ""}  `}
    >
      {icon && icon}
      <button disabled={disabled} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}

function getSizeClass(size: string) {
  switch (size) {
    case "big":
      return "h-[59px] w-[343px]";
    case "normal":
      return "h-[51px] w-[167px]";
    default:
      return "h-[54px] w-[120px]";
  }
}
