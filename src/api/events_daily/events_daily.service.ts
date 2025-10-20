import { HTTP_METHODS, fetcher, type ApiRequestParams } from "../http";
import type {
  DeleteEventDailyResultType,
  GetEventDailiesParams,
  GetEventDailiesResultType,
  PatchEventDailyPayloadType,
  PatchEventDailyResultType,
  PostEventDailyPayloadType,
  PostEventDailyResultType,
} from "./events_daily.schema";

export class EventDailyService {
  /** 📥 목록 조회 */
  async getList(opts?: GetEventDailiesParams): Promise<GetEventDailiesResultType> {
    const p = opts?.params ?? {};
    const r = await fetcher<GetEventDailiesResultType>({
      url: "/events_daily",
      method: HTTP_METHODS.GET,
      params: { select: "*", ...p } as ApiRequestParams["params"],
    });
    return r.data;
  }

  /** ➕ 생성 */
  async post({ body }: PostEventDailyPayloadType): Promise<PostEventDailyResultType> {
    const r = await fetcher<PostEventDailyResultType[]>({
      url: "/events_daily",
      method: HTTP_METHODS.POST,
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** ✏️ 수정 */
  async patch({ id, body }: PatchEventDailyPayloadType): Promise<PatchEventDailyResultType> {
    const r = await fetcher<PatchEventDailyResultType[]>({
      url: "/events_daily",
      method: HTTP_METHODS.PATCH,
      params: { id: `eq.${id}` },
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 🗑 삭제 */
  async delete(id: string): Promise<void> {
    await fetcher<DeleteEventDailyResultType>({
      url: "/events_daily",
      method: HTTP_METHODS.DELETE,
      params: { id: `eq.${id}` },
    });
  }
}
