import type { EventDaily, EventDailyInsert, EventDailyUpdate } from "../types/domain";

/** 서버 응답 타입 */
export type GetEventDailiesResultType = EventDaily[];
export type PostEventDailyResultType = EventDaily;
export type PatchEventDailyResultType = EventDaily;
export type DeleteEventDailyResultType = void;

/** 요청 DTO */
export interface GetEventDailiesParams {
  /** select / order / filter 등을 외부에서 주입 가능 */
  params?: Record<string, string | number | boolean | null | undefined>;
}

export interface PostEventDailyPayloadType {
  /** database.d.ts의 Insert 타입 그대로 */
  body: EventDailyInsert;
}

export interface PatchEventDailyPayloadType {
  id: EventDaily["id"];
  body: EventDailyUpdate;
}
