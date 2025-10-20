import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  GetProfilesParams,
  PatchProfilePayloadType,
  PostProfilePayloadType,
} from "./profiles.schema";
import { ProfilesService } from "./profiles.service";

const service = new ProfilesService();

/** 캐시 키 */
export const profilesKeys = {
  all: () => ["profiles"] as const,
  list: (params?: GetProfilesParams["params"]) =>
    [...profilesKeys.all(), "list", params ?? {}] as const,
};

/** 쿼리 옵션 */
export const profilesQuery = {
  list: (params?: GetProfilesParams["params"]) =>
    queryOptions({
      queryKey: profilesKeys.list(params),
      queryFn: () => service.getList({ params }),
      staleTime: 60_000,
    }),
};

/** 목록 훅 */
export function useProfilesQuery(params?: GetProfilesParams["params"]) {
  return useQuery(profilesQuery.list(params));
}

/** 생성 훅 */
export function useCreateProfileMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PostProfilePayloadType) => service.post(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: profilesKeys.all() }),
  });
}

/** 수정 훅 */
export function usePatchProfileMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PatchProfilePayloadType) => service.patch(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: profilesKeys.all() }),
  });
}

/** 삭제 훅 */
export function useDeleteProfileMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => service.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: profilesKeys.all() }),
  });
}
