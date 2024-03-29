import { Reminder } from "@/models/reminder";
import { api } from "./axios";
import { DateString } from "@/models/shared";
import { useQuery } from "@tanstack/react-query";

const ENDPOINT = "/reminder";

export const reminderApi = {
  getReminderList: async (params?: GetReminderListApiParams) => {
    const response = await api.get<GetReminderListApiResponse>(ENDPOINT, {
      params,
    });
    return response.data;
  },
};

interface GetReminderListApiParams {
  dDate?: DateString;
}

interface GetReminderListApiResponse {
  dDate: DateString;
  events: Reminder[];
  count: number;
}

const queryKeys = {
  list: (params?: GetReminderListApiParams) => [ENDPOINT, params] as const,
};

export const useReminderList = (params?: GetReminderListApiParams) => {
  return useQuery({
    queryKey: queryKeys.list(params),
    queryFn: () => reminderApi.getReminderList(params),
  });
};
