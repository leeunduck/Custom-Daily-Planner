import { HTTP_METHODS, fetcher, type ApiRequestParams } from "../http";
import type {
  DeleteDashboardLayoutResultType,
  GetDashboardLayoutsParams,
  GetDashboardLayoutsResultType,
  PatchDashboardLayoutPayloadType,
  PatchDashboardLayoutResultType,
  PostDashboardLayoutPayloadType,
  PostDashboardLayoutResultType,
} from "./dashboard_layout.schema";

export class DashboardLayoutService {
  /** 목록 조회: GET /dashboard_layouts (select/order 등은 params로 외부에서 주입) */
  async getList(opts?: GetDashboardLayoutsParams): Promise<GetDashboardLayoutsResultType> {
    const p = opts?.params ?? {};
    const r = await fetcher<GetDashboardLayoutsResultType>({
      url: "/dashboard_layouts",
      method: HTTP_METHODS.GET,
      // 기본값은 select=* 만, 나머지는 외부에서 결정
      params: { select: "*", ...p } as ApiRequestParams["params"],
    });
    return r.data;
  }

  /** 생성: POST /dashboard_layouts  (Insert 타입 그대로) */
  async post({ body }: PostDashboardLayoutPayloadType): Promise<PostDashboardLayoutResultType> {
    const r = await fetcher<PostDashboardLayoutResultType[]>({
      url: "/dashboard_layouts",
      method: HTTP_METHODS.POST,
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 수정: PATCH /dashboard_layouts?id=eq.<id>  (Update 타입 그대로) */
  async patch({
    id,
    body,
  }: PatchDashboardLayoutPayloadType): Promise<PatchDashboardLayoutResultType> {
    const r = await fetcher<PatchDashboardLayoutResultType[]>({
      url: "/dashboard_layouts",
      method: HTTP_METHODS.PATCH,
      params: { id: `eq.${id}` },
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 삭제: DELETE /dashboard_layouts?id=eq.<id> */
  async delete(id: string): Promise<void> {
    await fetcher<DeleteDashboardLayoutResultType>({
      url: "/dashboard_layouts",
      method: HTTP_METHODS.DELETE,
      params: { id: `eq.${id}` },
    });
  }
}
