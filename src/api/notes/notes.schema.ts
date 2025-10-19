import type { Note, NoteInsert, NoteUpdate } from "../types/domain";

/** 서버 응답 타입 */
export type GetNotesResultType = Note[];
export type PostNoteResultType = Note;
export type PatchNoteResultType = Note;
export type DeleteNoteResultType = void;

/** 요청 DTO */
export interface GetNotesParams {
  /** select / order / filter 등을 외부에서 주입 */
  params?: Record<string, string | number | boolean | null | undefined>;
}

export interface PostNotePayloadType {
  /** database.d.ts 의 Insert 타입 그대로 사용 */
  body: NoteInsert;
}

export interface PatchNotePayloadType {
  id: Note["id"];
  /** database.d.ts 의 Update 타입 그대로 사용 */
  body: NoteUpdate;
}
