// import { api } from './axios'

// const ENDPOINT = "/notice";

// const noticeApi = {
//   getNoticeList: async () => {
//     // GET /notice
//     const response = await api.get<NoticeList>(`${ENDPOINT}`);
//     return response.data;
//   },
//   // GET /notice/{id}
//   getNoticeById: async (data: { params: { id: string } }) => {
//     const response = await api.get<NoticeDetail>(`${ENDPOINT}/${data.params.id}`);
//     return response.data;
//   },
//   // POST /notice
//   createNotice: async (data: { body: NoticeRequest }) => {
//     const response = await api.post(`${ENDPOINT}`, data.body);
//     return response.data;
//   },
//   updateNotice: async (data: { params: { id: string }; body: Partial<NoticeRequest> }) => {
//     const response = await api.put(`${ENDPOINT}/${data.params.id}`, data.body);
//     return response.data;
//   },
//   deleteNotice: async (data: { params: { id: string } }) => {
//     const response = await api.delete(`${ENDPOINT}/${data.params.id}`);
//     return response.data;
//   },
// };

// export const queryKeys = {
//   all: () => [ENDPOINT] as const,
//   detail: (id?: string) => [...queryKeys.all(), id] as const,
//   list: () => [...queryKeys.all(), "list"] as const,
// };

// const { data } = useNoticeList()

// export const useNoticeList = () => {
//   return useQuery({
//     queryKey: queryKeys.list(),
//     queryFn: noticeApi.getNoticeList,
//   });
// };

// export const useNoticeDetail = ({ id }: { id: string }) => {
//   return useQuery({
//     queryKey: queryKeys.detail(id),
//     queryFn: () => noticeApi.getNoticeById({ params: { id } }),
//   });
// };

// export const useCreateNotice = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: noticeApi.createNotice,
//     onSuccess: () =>
//       queryClient.invalidateQueries({
//         queryKey: queryKeys.all(),
//       }),
//   });
// };

// export const useUpdateNotice = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: noticeApi.updateNotice,
//     onSuccess: (data, variables) => {
//       queryClient.invalidateQueries({
//         queryKey: queryKeys.all()
//       })
//     },
//   });
// };

// export const useDeleteNotice = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: noticeApi.deleteNotice,
//     onSuccess: (_, variables) => {
//       queryClient.setQueryData(queryKeys.detail(variables.params.id), null);
//     },
//   });
// };
