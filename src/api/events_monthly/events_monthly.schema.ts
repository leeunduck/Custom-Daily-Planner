import type { EventMonthly, EventMonthlyInsert, EventMonthlyUpdate } from "../types/domain";

/** 서버 응답 타입 */
export type GetEventMonthliesResultType = EventMonthly[];
export type PostEventMonthlyResultType = EventMonthly;
export type PatchEventMonthlyResultType = EventMonthly;
export type DeleteEventMonthlyResultType = void;

/** 요청 DTO */
export interface GetEventMonthliesParams {
  params?: Record<string, string | number | boolean | null | undefined>;
}

export interface PostEventMonthlyPayloadType {
  body: EventMonthlyInsert;
}

export interface PatchEventMonthlyPayloadType {
  id: EventMonthly["id"];
  body: EventMonthlyUpdate;
}
