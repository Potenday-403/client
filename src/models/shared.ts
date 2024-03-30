export const EVENT_TYPE = {
  BIRTHDAY: "BIRTHDAY",
  WEDDING: "WEDDING",
  FIRST_BIRTHDAY: "FIRST_BIRTHDAY",
  FUNERAL: "FUNERAL",
  ETC: "ETC",
} as const;

export type EventType = (typeof EVENT_TYPE)[keyof typeof EVENT_TYPE];

export const PRIORITY = {
  CRUCIAL: "CRUCIAL",
  IMPORTANT: "IMPORTANT",
  NORMAL: "NORMAL",
} as const;

export type Priority = (typeof PRIORITY)[keyof typeof PRIORITY];

export const PRIORITY_LABEL: Record<Priority, string> = {
  CRUCIAL: "매우 중요",
  IMPORTANT: "중요",
  NORMAL: "보통",
} as const;

/**
 * YYYY-MM-DD 형식의 날짜 문자열
 */
export type DateString = string;

/**
 * ISO 8601 형식의 날짜 문자열
 */
export type ISODateString = string;

/**
 * HH:MM 형식의 시간 문자열
 */
export type TimeString = string;
