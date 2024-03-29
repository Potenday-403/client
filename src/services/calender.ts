import { CalendarItem } from "@/models/calendar";
import { api } from "@/services/axios";

const ENDPOINT = "/calendar";

export const calendarApi = {
  getCalendarItemList: async (params?: GetCalendarItemListApiParams) => {
    const response = await api.get<GetCalendarItemListApiResponse>(ENDPOINT, {
      params,
    });
    return response.data;
  },
};

interface GetCalendarItemListApiParams {
  year?: number;
  month?: number;
}

interface GetCalendarItemListApiResponse {
  year: number;
  month: number;
  days: {
    [day: number]: CalendarItem[];
  };
}
