import { HTTP_METHODS, fetcher, type ApiRequestParams } from "../http";
import type {
  DeleteHabitResultType,
  GetHabitsParams,
  GetHabitsResultType,
  PatchHabitPayloadType,
  PatchHabitResultType,
  PostHabitPayloadType,
  PostHabitResultType,
} from "./habits.schema";

export class HabitService {
  /** 📥 목록 조회: GET /habits */
  async getList(opts?: GetHabitsParams): Promise<GetHabitsResultType> {
    const p = opts?.params ?? {};
    const r = await fetcher<GetHabitsResultType>({
      url: "/habits",
      method: HTTP_METHODS.GET,
      // database.d.ts 기준으로 select만 기본값으로 두고, 정렬/필터는 외부에서 주입
      params: { select: "*", ...p } as ApiRequestParams["params"],
    });
    return r.data;
  }

  /** ➕ 생성: POST /habits */
  async post({ body }: PostHabitPayloadType): Promise<PostHabitResultType> {
    const r = await fetcher<PostHabitResultType[]>({
      url: "/habits",
      method: HTTP_METHODS.POST,
      data: body, // ← HabitInsert 타입 그대로
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** ✏️ 수정: PATCH /habits?id=eq.{id} */
  async patch({ id, body }: PatchHabitPayloadType): Promise<PatchHabitResultType> {
    const r = await fetcher<PatchHabitResultType[]>({
      url: "/habits",
      method: HTTP_METHODS.PATCH,
      params: { id: `eq.${id}` },
      data: body, // ← HabitUpdate 타입 그대로 (name/frequency/color/target_per_period 등)
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 🗑 삭제: DELETE /habits?id=eq.{id} */
  async delete(id: string): Promise<void> {
    await fetcher<DeleteHabitResultType>({
      url: "/habits",
      method: HTTP_METHODS.DELETE,
      params: { id: `eq.${id}` },
    });
  }
}
