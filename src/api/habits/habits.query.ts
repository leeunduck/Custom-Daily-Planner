// src/api/habits/habit.query.ts
import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { GetHabitsParams, PatchHabitPayloadType, PostHabitPayloadType } from "./habits.schema";
import { HabitService } from "./habits.service";

const service = new HabitService();

/** 캐시 키 */
export const habitKeys = {
  all: () => ["habits"] as const,
  list: (params?: GetHabitsParams["params"]) => [...habitKeys.all(), "list", params ?? {}] as const,
};

/** 쿼리 옵션 */
export const habitQuery = {
  list: (params?: GetHabitsParams["params"]) =>
    queryOptions({
      queryKey: habitKeys.list(params),
      queryFn: () => service.getList({ params }),
      staleTime: 60_000,
    }),
};

/** 목록 조회 훅 */
export function useHabitsQuery(params?: GetHabitsParams["params"]) {
  return useQuery(habitQuery.list(params));
}

/** 생성 훅 */
export function useCreateHabitMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PostHabitPayloadType) => service.post(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: habitKeys.all() }),
  });
}

/** 수정 훅 */
export function usePatchHabitMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PatchHabitPayloadType) => service.patch(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: habitKeys.all() }),
  });
}

/** 삭제 훅 */
export function useDeleteHabitMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => service.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: habitKeys.all() }),
  });
}
