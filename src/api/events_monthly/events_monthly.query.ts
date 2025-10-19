import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  GetEventMonthliesParams,
  PatchEventMonthlyPayloadType,
  PostEventMonthlyPayloadType,
} from "./events_monthly.schema";
import { EventMonthlyService } from "./events_monthly.service";

const service = new EventMonthlyService();

/** 캐시 키 */
export const eventMonthlyKeys = {
  all: () => ["events_monthly"] as const,
  list: (params?: GetEventMonthliesParams["params"]) =>
    [...eventMonthlyKeys.all(), "list", params ?? {}] as const,
};

/** 쿼리 옵션 */
export const eventMonthlyQuery = {
  list: (params?: GetEventMonthliesParams["params"]) =>
    queryOptions({
      queryKey: eventMonthlyKeys.list(params),
      queryFn: () => service.getList({ params }),
      staleTime: 60_000,
    }),
};

/** 훅 정의 */
export function useEventMonthliesQuery(params?: GetEventMonthliesParams["params"]) {
  return useQuery(eventMonthlyQuery.list(params));
}

export function useCreateEventMonthlyMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PostEventMonthlyPayloadType) => service.post(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: eventMonthlyKeys.all() }),
  });
}

export function usePatchEventMonthlyMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PatchEventMonthlyPayloadType) => service.patch(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: eventMonthlyKeys.all() }),
  });
}

export function useDeleteEventMonthlyMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => service.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: eventMonthlyKeys.all() }),
  });
}
