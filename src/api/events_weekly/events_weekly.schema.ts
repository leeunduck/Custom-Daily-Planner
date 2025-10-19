import type { EventWeekly, EventWeeklyInsert, EventWeeklyUpdate } from "../types/domain";

/** 서버 응답 타입 */
export type GetEventWeekliesResultType = EventWeekly[];
export type PostEventWeeklyResultType = EventWeekly;
export type PatchEventWeeklyResultType = EventWeekly;
export type DeleteEventWeeklyResultType = void;

/** 요청 DTO */
export interface GetEventWeekliesParams {
  params?: Record<string, string | number | boolean | null | undefined>;
}

export interface PostEventWeeklyPayloadType {
  body: EventWeeklyInsert;
}

export interface PatchEventWeeklyPayloadType {
  id: EventWeekly["id"];
  body: EventWeeklyUpdate;
}
