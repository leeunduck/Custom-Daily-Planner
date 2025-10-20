import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { GetNotesParams, PatchNotePayloadType, PostNotePayloadType } from "./notes.schema";
import { NotesService } from "./notes.service";

const service = new NotesService();

/** 캐시 키 */
export const notesKeys = {
  all: () => ["notes"] as const,
  list: (params?: GetNotesParams["params"]) => [...notesKeys.all(), "list", params ?? {}] as const,
};

/** 쿼리 옵션 */
export const notesQuery = {
  list: (params?: GetNotesParams["params"]) =>
    queryOptions({
      queryKey: notesKeys.list(params),
      queryFn: () => service.getList({ params }),
      staleTime: 60_000,
    }),
};

/** 목록 훅 */
export function useNotesQuery(params?: GetNotesParams["params"]) {
  return useQuery(notesQuery.list(params));
}

/** 생성 훅 */
export function useCreateNoteMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PostNotePayloadType) => service.post(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: notesKeys.all() }),
  });
}

/** 수정 훅 */
export function usePatchNoteMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PatchNotePayloadType) => service.patch(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: notesKeys.all() }),
  });
}

/** 삭제 훅 */
export function useDeleteNoteMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => service.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: notesKeys.all() }),
  });
}
