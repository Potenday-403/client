import { Event } from "@/models/event";
import { api } from "@/services/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const ENDPOINT = "/events";

export const eventApi = {
  getEventById: async (id: string) => {
    const response = await api.get<GetEventByIdApiResponse>(
      `${ENDPOINT}/${id}`,
    );
    return response.data;
  },
  createEvent: async (body: CreateEventApiBody) => {
    const response = await api.post(ENDPOINT, body);
    return response.data;
  },
  updateEvent: async (data: { id: string; body: UpdateEventApiBody }) => {
    const response = await api.put(`${ENDPOINT}/${data.id}`, data.body);
    return response.data;
  },
  deleteEvent: async (ids: string[]) => {
    const response = await api.delete(ENDPOINT, { data: { ids } });
    return response.data;
  },
};

interface GetEventByIdApiResponse extends Event {}

interface CreateEventApiBody {
  friendId?: string;
  name: Event["name"];
  type: Event["type"];
  scheduledAt: Event["scheduledAt"];
  priority: Event["priority"];
}

type UpdateEventApiBody = Partial<CreateEventApiBody>;

const queryKeys = {
  all: () => [ENDPOINT],
  list: () => [ENDPOINT, "list"],
  detail: (id: string) => [ENDPOINT, id],
};

export const useEventDetail = (id: string) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => eventApi.getEventById(id),
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: eventApi.createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.list(),
      });
    },
  });
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: eventApi.updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: eventApi.deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};
