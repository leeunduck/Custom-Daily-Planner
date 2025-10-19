import { HTTP_METHODS, fetcher, type ApiRequestParams } from "../http";
import type {
  DeleteProfileResultType,
  GetProfilesParams,
  GetProfilesResultType,
  PatchProfilePayloadType,
  PatchProfileResultType,
  PostProfilePayloadType,
  PostProfileResultType,
} from "./profiles.schema";

export class ProfilesService {
  /** 📥 목록 조회: GET /profiles */
  async getList(opts?: GetProfilesParams): Promise<GetProfilesResultType> {
    const p = opts?.params ?? {};
    const r = await fetcher<GetProfilesResultType>({
      url: "/profiles",
      method: HTTP_METHODS.GET,
      // 기본은 select=* 만. 정렬/필터는 호출부에서 params로 주입
      params: { select: "*", ...p } as ApiRequestParams["params"],
    });
    return r.data;
  }

  /** ➕ 생성: POST /profiles (RLS/트리거 구성에 따라 제한될 수 있음) */
  async post({ body }: PostProfilePayloadType): Promise<PostProfileResultType> {
    const r = await fetcher<PostProfileResultType[]>({
      url: "/profiles",
      method: HTTP_METHODS.POST,
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** ✏️ 수정: PATCH /profiles?id=eq.{id} */
  async patch({ id, body }: PatchProfilePayloadType): Promise<PatchProfileResultType> {
    const r = await fetcher<PatchProfileResultType[]>({
      url: "/profiles",
      method: HTTP_METHODS.PATCH,
      params: { id: `eq.${id}` },
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 🗑 삭제: DELETE /profiles?id=eq.{id} (프로덕션에선 보통 비활성화) */
  async delete(id: string): Promise<void> {
    await fetcher<DeleteProfileResultType>({
      url: "/profiles",
      method: HTTP_METHODS.DELETE,
      params: { id: `eq.${id}` },
    });
  }
}
