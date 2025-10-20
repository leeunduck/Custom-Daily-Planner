import type { Profile, ProfileInsert, ProfileUpdate } from "../types/domain";

/** 서버 응답 타입 */
export type GetProfilesResultType = Profile[];
export type PostProfileResultType = Profile;
export type PatchProfileResultType = Profile;
export type DeleteProfileResultType = void;

/** 요청 DTO */
export interface GetProfilesParams {
  /** select / order / filter 등을 외부에서 주입 */
  params?: Record<string, string | number | boolean | null | undefined>;
}

export interface PostProfilePayloadType {
  /** database.d.ts 의 Insert 타입 그대로 사용 */
  body: ProfileInsert;
}

export interface PatchProfilePayloadType {
  id: Profile["id"];
  /** database.d.ts 의 Update 타입 그대로 사용 */
  body: ProfileUpdate;
}
