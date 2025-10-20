// src/api/todos/todo.query.ts
import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  PatchTodoPayloadType,
  PostTodoPayloadType,
  ToggleTodoPayloadType,
} from "./todos.schema";
import { TodoService } from "./todos.service";

const todoService = new TodoService();

export const todosQueryKeys = {
  all: () => ["todos"] as const,
  list: () => [...todosQueryKeys.all(), "list"] as const,
};

export const todosQuery = {
  list: () =>
    queryOptions({
      queryKey: todosQueryKeys.list(),
      queryFn: () => todoService.getList(), // 서비스가 data만 반환
      staleTime: 60_000,
    }),
};

export function useTodosQuery() {
  return useQuery(todosQuery.list());
}

export function useCreateTodoMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PostTodoPayloadType) => todoService.post(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: todosQueryKeys.all() }),
  });
}
export function usePatchTodoMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: PatchTodoPayloadType) => todoService.patch(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: todosQueryKeys.all() }),
  });
}
export function useToggleTodoMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: ToggleTodoPayloadType) => todoService.toggle(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: todosQueryKeys.all() }),
  });
}
export function useDeleteTodoMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => todoService.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: todosQueryKeys.all() }),
  });
}
