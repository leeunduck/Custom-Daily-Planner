import { HTTP_METHODS, fetcher, type ApiRequestParams } from "../http";
import type { Todo, TodoUpdate } from "../types/domain";
import type {
  DeleteTodoResultType,
  GetTodosResultType,
  PatchTodoPayloadType,
  PatchTodoResultType,
  PostTodoPayloadType,
  PostTodoResultType,
  ToggleTodoPayloadType,
} from "./todo.schema";

export class TodoService {
  /** 목록 조회: GET /todos?select=*&order=created_at.desc */
  async getList(params?: ApiRequestParams["params"]): Promise<GetTodosResultType> {
    const r = await fetcher<GetTodosResultType>({
      url: "/todos",
      method: HTTP_METHODS.GET,
      params: { select: "*", order: "created_at.desc", ...params },
    });
    return r.data;
  }

  /** 추가: POST /todos (Prefer: return=representation) */
  async post({ body }: PostTodoPayloadType): Promise<PostTodoResultType> {
    const r = await fetcher<PostTodoResultType[]>({
      url: "/todos",
      method: HTTP_METHODS.POST,
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 수정: PATCH /todos?id=eq.<id> (Prefer) */
  async patch({ id, body }: PatchTodoPayloadType): Promise<PatchTodoResultType> {
    const r = await fetcher<PatchTodoResultType[]>({
      url: "/todos",
      method: HTTP_METHODS.PATCH,
      data: body,
      params: { id: `eq.${id}` },
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 상태 토글: status done↔todo, completed_at now/null */
  async toggle({ id }: ToggleTodoPayloadType): Promise<PatchTodoResultType> {
    // 1) 현재 행 조회
    const curRes = await fetcher<Todo[]>({
      url: "/todos",
      params: { select: "*", id: `eq.${id}`, limit: 1 },
    });
    const current = curRes.data[0];

    // 2) 다음 상태 계산
    const nextDone = current?.status !== "done";
    const patch: TodoUpdate = {
      status: nextDone ? "done" : "todo",
      completed_at: nextDone ? new Date().toISOString() : null,
    };

    // 3) 업데이트 후 대표 행 반환
    const r = await fetcher<PatchTodoResultType[]>({
      url: "/todos",
      method: HTTP_METHODS.PATCH,
      data: patch,
      params: { id: `eq.${id}` },
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 삭제: DELETE /todos?id=eq.<id> */
  async delete(id: string): Promise<void> {
    await fetcher<DeleteTodoResultType>({
      url: "/todos",
      method: HTTP_METHODS.DELETE,
      params: { id: `eq.${id}` },
    });
  }
}
