import {
  AgeGroup,
  EventType,
  Gender,
  Occupation,
  Priority,
  Relationship,
} from "@/models/shared";
import { useQuery } from "@tanstack/react-query";
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
  byEvent: (eventId: number) => [ENDPOINT, "event", eventId],
  byCategory: (data: GenerateGreetingsByCategoryApiBody) => [
    ENDPOINT,
    "category",
    data,
  ],
};

export const useGenerateGreetingsByEvent = (
  data: GenerateGreetingsByEventApiBody,
) => {
  return useQuery({
    queryKey: queryKeys.byEvent(data.eventId),
    queryFn: () => greetingsApi.generateGreetingsByEvent(data),
  });
};

export const useGenerateGreetingsByCategory = (
  data: GenerateGreetingsByCategoryApiBody,
) => {
  return useQuery({
    queryKey: queryKeys.byCategory(data),
    queryFn: () => greetingsApi.generateGreetingsByCategory(data),
  });
};
