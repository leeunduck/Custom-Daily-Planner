import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  GetEventWeekliesParams,
  PatchEventWeeklyPayloadType,
  PostEventWeeklyPayloadType,
} from "./events_weekly.schema";
import { EventWeeklyService } from "./events_weekly.service";

const service = new EventWeeklyService();

/** 캐시 키 */
export const eventWeeklyKeys = {
  all: () => ["events_weekly"] as const,
  list: (params?: GetEventWeekliesParams["params"]) =>
    [...eventWeeklyKeys.all(), "list", params ?? {}] as const,
};

/** 쿼리 옵션 */
export const eventWeeklyQuery = {
  list: (params?: GetEventWeekliesParams["params"]) =>
    queryOptions({
      queryKey: eventWeeklyKeys.list(params),
      queryFn: () => service.getList({ params }),
      staleTime: 60_000,
    }),
};

/** 훅 정의 */
export function useEventWeekliesQuery(params?: GetEventWeekliesParams["params"]) {
  return useQuery(eventWeeklyQuery.list(params));
}

export function useCreateEventWeeklyMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PostEventWeeklyPayloadType) => service.post(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: eventWeeklyKeys.all() }),
  });
}

export function usePatchEventWeeklyMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PatchEventWeeklyPayloadType) => service.patch(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: eventWeeklyKeys.all() }),
  });
}

export function useDeleteEventWeeklyMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => service.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: eventWeeklyKeys.all() }),
  });
}
