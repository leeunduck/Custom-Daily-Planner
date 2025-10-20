import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  GetEventDailiesParams,
  PatchEventDailyPayloadType,
  PostEventDailyPayloadType,
} from "./events_daily.schema";
import { EventDailyService } from "./events_daily.service";

const service = new EventDailyService();

/** 캐시 키 */
export const eventDailyKeys = {
  all: () => ["events_daily"] as const,
  list: (params?: GetEventDailiesParams["params"]) =>
    [...eventDailyKeys.all(), "list", params ?? {}] as const,
};

/** 쿼리 옵션 */
export const eventDailyQuery = {
  list: (params?: GetEventDailiesParams["params"]) =>
    queryOptions({
      queryKey: eventDailyKeys.list(params),
      queryFn: () => service.getList({ params }),
      staleTime: 60_000,
    }),
};

/** 훅 정의 */
export function useEventDailiesQuery(params?: GetEventDailiesParams["params"]) {
  return useQuery(eventDailyQuery.list(params));
}

export function useCreateEventDailyMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PostEventDailyPayloadType) => service.post(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: eventDailyKeys.all() }),
  });
}

export function usePatchEventDailyMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PatchEventDailyPayloadType) => service.patch(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: eventDailyKeys.all() }),
  });
}

export function useDeleteEventDailyMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => service.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: eventDailyKeys.all() }),
  });
}
