import {
  AgeGroup,
  EventType,
  Gender,
  Occupation,
  Priority,
  Relationship,
} from "@/models/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./axios";

const ENDPOINT = "/greetings";

export const greetingsApi = {
  generateGreetingsByEvent: async (body: GenerateGreetingsByEventApiBody) => {
    const response = await api.put<GenerateGreetingsByEventApiResponse>(
      `${ENDPOINT}/event`,
      body,
    );
    return response.data;
  },
  generateGreetingsByCategory: async (
    body: GenerateGreetingsByCategoryApiBody,
  ) => {
    const response = await api.put<GenerateGreetingsByCategoryApiResponse>(
      `${ENDPOINT}/category`,
      body,
    );
    return response.data;
  },
};

interface GenerateGreetingsByEventApiBody {
  eventId: number;
}

interface GenerateGreetingsByEventApiResponse {
  eventId: number;
  categories: {
    ageGroup: AgeGroup;
    gender: Gender;
    occupation: Occupation;
    relationship: Relationship;
    eventType: EventType;
  };
  greetings: string[];
}

interface GenerateGreetingsByCategoryApiBody {
  relationship: Relationship;
  eventType: EventType;
  eventPriority: Priority;
}

interface GenerateGreetingsByCategoryApiResponse {
  categories: {
    ageGroup: AgeGroup;
    gender: Gender;
    occupation: Occupation;
    relationship: Relationship;
    eventType: EventType;
  };
  greetings: string[];
}

const queryKeys = {
  all: () => [ENDPOINT],
};

export const useGenerateGreetingsByEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: greetingsApi.generateGreetingsByEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};

export const useGenerateGreetingsByCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: greetingsApi.generateGreetingsByCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};
