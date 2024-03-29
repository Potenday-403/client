import {
  ExpenseStatisticsByCategory,
  ExpenseStatisticsByDate,
} from "@/models/statistics";
import { api } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

export const ENDPOINT = "/statistics";

export const statisticsApi = {
  getExpenseStatisticsByCategory: async () => {
    const response = await api.get<GetExpenseStatisticsByCategoryApiResponse>(
      `${ENDPOINT}/category`,
    );
    return response.data;
  },
  getExpenseStatisticsByDate: async (
    params?: GetExpenseStatisticsByDateApiParams,
  ) => {
    const response = await api.get<GetExpenseStatisticsByDateApiResponse>(
      `${ENDPOINT}/me`,
      { params },
    );
    return response.data;
  },
};

interface GetExpenseStatisticsByCategoryApiResponse
  extends ExpenseStatisticsByCategory {}

interface GetExpenseStatisticsByDateApiParams {
  year?: number;
  month?: number;
}

interface GetExpenseStatisticsByDateApiResponse
  extends ExpenseStatisticsByDate {}

const queryKeys = {
  expenseStatisticsByCategory: () => [ENDPOINT, "by-category"],
  expenseStatisticsByDate: (params?: GetExpenseStatisticsByDateApiParams) => [
    ENDPOINT,
    "by-date",
    params,
  ],
};

export const useExpenseStatisticsByCategory = () => {
  return useQuery({
    queryKey: queryKeys.expenseStatisticsByCategory(),
    queryFn: statisticsApi.getExpenseStatisticsByCategory,
  });
};

export const useExpenseStatisticsByDate = (
  params?: GetExpenseStatisticsByDateApiParams,
) => {
  return useQuery({
    queryKey: queryKeys.expenseStatisticsByDate(params),
    queryFn: () => statisticsApi.getExpenseStatisticsByDate(params),
  });
};
