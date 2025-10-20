import { HTTP_METHODS, fetcher, type ApiRequestParams } from "../http";
import type {
  DeleteEventMonthlyResultType,
  GetEventMonthliesParams,
  GetEventMonthliesResultType,
  PatchEventMonthlyPayloadType,
  PatchEventMonthlyResultType,
  PostEventMonthlyPayloadType,
  PostEventMonthlyResultType,
} from "./events_monthly.schema";

export class EventMonthlyService {
  /** 📥 목록 조회 */
  async getList(opts?: GetEventMonthliesParams): Promise<GetEventMonthliesResultType> {
    const p = opts?.params ?? {};
    const r = await fetcher<GetEventMonthliesResultType>({
      url: "/events_monthly",
      method: HTTP_METHODS.GET,
      params: { select: "*", ...p } as ApiRequestParams["params"],
    });
    return r.data;
  }

  /** ➕ 생성 */
  async post({ body }: PostEventMonthlyPayloadType): Promise<PostEventMonthlyResultType> {
    const r = await fetcher<PostEventMonthlyResultType[]>({
      url: "/events_monthly",
      method: HTTP_METHODS.POST,
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** ✏️ 수정 */
  async patch({ id, body }: PatchEventMonthlyPayloadType): Promise<PatchEventMonthlyResultType> {
    const r = await fetcher<PatchEventMonthlyResultType[]>({
      url: "/events_monthly",
      method: HTTP_METHODS.PATCH,
      params: { id: `eq.${id}` },
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 🗑 삭제 */
  async delete(id: string): Promise<void> {
    await fetcher<DeleteEventMonthlyResultType>({
      url: "/events_monthly",
      method: HTTP_METHODS.DELETE,
      params: { id: `eq.${id}` },
    });
  }
}
