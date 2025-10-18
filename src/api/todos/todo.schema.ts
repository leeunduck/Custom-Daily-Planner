import type { Todo, TodoInsert, TodoUpdate } from "../types/domain";

// 응답 타입
export type GetTodosResultType = Todo[];
export type PostTodoResultType = Todo;
export type PatchTodoResultType = Todo;
export type DeleteTodoResultType = void;

// 요청 DTO
export interface PostTodoPayloadType {
  body: Partial<TodoInsert> & Pick<TodoInsert, "title" | "user_id">;
}
export interface PatchTodoPayloadType {
  id: string;
  body: TodoUpdate;
}
export interface ToggleTodoPayloadType {
  id: string;
}
