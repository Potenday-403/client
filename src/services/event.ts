import { Event } from "@/models/event";
import { api } from "@/services/axios";

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
  deleteEvent: async (id: string) => {
    const response = await api.delete(`${ENDPOINT}/${id}`);
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
