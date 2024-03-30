import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isIn10DaysFromNow = (date: Date) => {
  return new Date().getDate() + 10 >= date.getDate();
};
