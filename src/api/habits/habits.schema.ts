import type { Habit, HabitInsert, HabitUpdate } from "../types/domain";

/** 서버 응답 타입 */
export type GetHabitsResultType = Habit[];
export type PostHabitResultType = Habit;
export type PatchHabitResultType = Habit;
export type DeleteHabitResultType = void;

/** 요청 DTO */
export interface GetHabitsParams {
  params?: Record<string, string | number | boolean | null | undefined>;
}

export interface PostHabitPayloadType {
  body: HabitInsert;
}

export interface PatchHabitPayloadType {
  id: Habit["id"];
  body: HabitUpdate;
}
