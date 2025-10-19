import type {
  DashboardLayout,
  DashboardLayoutInsert,
  DashboardLayoutUpdate,
} from "../types/domain";

/** 서버 응답 타입 */
export type GetDashboardLayoutsResultType = DashboardLayout[];
export type PostDashboardLayoutResultType = DashboardLayout;
export type PatchDashboardLayoutResultType = DashboardLayout;
export type DeleteDashboardLayoutResultType = void;

/** 요청 DTO (database.d.ts 기준으로만 결정) */
export interface GetDashboardLayoutsParams {
  /** 필요 시 외부에서 select/order/filter 등 전달 */
  params?: Record<string, string | number | boolean | null | undefined>;
}

export interface PostDashboardLayoutPayloadType {
  /** ← Insert 타입 그대로 (필수/옵셔널은 database.d.ts가 결정) */
  body: DashboardLayoutInsert;
}

export interface PatchDashboardLayoutPayloadType {
  /** ← id 타입도 database.d.ts에서 가져옴 */
  id: DashboardLayout["id"];
  /** ← Update 타입 그대로 */
  body: DashboardLayoutUpdate;
}
