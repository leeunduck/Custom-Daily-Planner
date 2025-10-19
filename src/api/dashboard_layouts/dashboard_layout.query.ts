import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  GetDashboardLayoutsParams,
  PatchDashboardLayoutPayloadType,
  PostDashboardLayoutPayloadType,
} from "./dashboard_layout.schema";
import { DashboardLayoutService } from "./dashboard_layout.service";

const service = new DashboardLayoutService();

/** 캐시 키 */
export const dashboardLayoutKeys = {
  all: () => ["dashboard_layouts"] as const,
  list: (params?: GetDashboardLayoutsParams["params"]) =>
    [...dashboardLayoutKeys.all(), "list", params ?? {}] as const,
};

/** 쿼리 옵션 (params로 select/order 등 전달 가능) */
export const dashboardLayoutQuery = {
  list: (params?: GetDashboardLayoutsParams["params"]) =>
    queryOptions({
      queryKey: dashboardLayoutKeys.list(params),
      queryFn: () => service.getList({ params }),
      staleTime: 60_000,
    }),
};

/** 훅 */
export function useDashboardLayoutsQuery(params?: GetDashboardLayoutsParams["params"]) {
  return useQuery(dashboardLayoutQuery.list(params));
}

export function useCreateDashboardLayoutMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PostDashboardLayoutPayloadType) => service.post(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: dashboardLayoutKeys.all() }),
  });
}

export function usePatchDashboardLayoutMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PatchDashboardLayoutPayloadType) => service.patch(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: dashboardLayoutKeys.all() }),
  });
}

export function useDeleteDashboardLayoutMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => service.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: dashboardLayoutKeys.all() }),
  });
}
