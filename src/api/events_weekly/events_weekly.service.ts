import { HTTP_METHODS, fetcher, type ApiRequestParams } from "../http";
import type {
  DeleteEventWeeklyResultType,
  GetEventWeekliesParams,
  GetEventWeekliesResultType,
  PatchEventWeeklyPayloadType,
  PatchEventWeeklyResultType,
  PostEventWeeklyPayloadType,
  PostEventWeeklyResultType,
} from "./events_weekly.schema";

export class EventWeeklyService {
  /** 📥 목록 조회 */
  async getList(opts?: GetEventWeekliesParams): Promise<GetEventWeekliesResultType> {
    const p = opts?.params ?? {};
    const r = await fetcher<GetEventWeekliesResultType>({
      url: "/events_weekly",
      method: HTTP_METHODS.GET,
      params: { select: "*", ...p } as ApiRequestParams["params"],
    });
    return r.data;
  }

  /** ➕ 생성 */
  async post({ body }: PostEventWeeklyPayloadType): Promise<PostEventWeeklyResultType> {
    const r = await fetcher<PostEventWeeklyResultType[]>({
      url: "/events_weekly",
      method: HTTP_METHODS.POST,
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** ✏️ 수정 */
  async patch({ id, body }: PatchEventWeeklyPayloadType): Promise<PatchEventWeeklyResultType> {
    const r = await fetcher<PatchEventWeeklyResultType[]>({
      url: "/events_weekly",
      method: HTTP_METHODS.PATCH,
      params: { id: `eq.${id}` },
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 🗑 삭제 */
  async delete(id: string): Promise<void> {
    await fetcher<DeleteEventWeeklyResultType>({
      url: "/events_weekly",
      method: HTTP_METHODS.DELETE,
      params: { id: `eq.${id}` },
    });
  }
}
