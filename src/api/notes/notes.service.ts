import { HTTP_METHODS, fetcher, type ApiRequestParams } from "../http";
import type {
  DeleteNoteResultType,
  GetNotesParams,
  GetNotesResultType,
  PatchNotePayloadType,
  PatchNoteResultType,
  PostNotePayloadType,
  PostNoteResultType,
} from "./notes.schema";

export class NotesService {
  /** 📥 목록 조회: GET /notes */
  async getList(opts?: GetNotesParams): Promise<GetNotesResultType> {
    const p = opts?.params ?? {};
    const r = await fetcher<GetNotesResultType>({
      url: "/notes",
      method: HTTP_METHODS.GET,
      // 기본은 select=* 만, 정렬/필터는 호출부에서 params로 주입
      params: { select: "*", ...p } as ApiRequestParams["params"],
    });
    return r.data;
  }

  /** ➕ 생성: POST /notes */
  async post({ body }: PostNotePayloadType): Promise<PostNoteResultType> {
    const r = await fetcher<PostNoteResultType[]>({
      url: "/notes",
      method: HTTP_METHODS.POST,
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** ✏️ 수정: PATCH /notes?id=eq.{id} */
  async patch({ id, body }: PatchNotePayloadType): Promise<PatchNoteResultType> {
    const r = await fetcher<PatchNoteResultType[]>({
      url: "/notes",
      method: HTTP_METHODS.PATCH,
      params: { id: `eq.${id}` },
      data: body,
      headers: { Prefer: "return=representation" },
    });
    return r.data[0];
  }

  /** 🗑 삭제: DELETE /notes?id=eq.{id} */
  async delete(id: string): Promise<void> {
    await fetcher<DeleteNoteResultType>({
      url: "/notes",
      method: HTTP_METHODS.DELETE,
      params: { id: `eq.${id}` },
    });
  }
}
