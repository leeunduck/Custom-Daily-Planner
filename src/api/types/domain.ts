import type { Tables, TablesInsert, TablesUpdate } from "../database";

// ── todos ─────────────────────────────────────────────
export type Todo = Tables<"todos">;
export type TodoInsert = TablesInsert<"todos">;
export type TodoUpdate = TablesUpdate<"todos">;

// ── dashboard_layouts ────────────────────────────────
export type DashboardLayout = Tables<"dashboard_layouts">;
export type DashboardLayoutInsert = TablesInsert<"dashboard_layouts">;
export type DashboardLayoutUpdate = TablesUpdate<"dashboard_layouts">;

// ── notes ────────────────────────────────────────────
export type Note = Tables<"notes">;
export type NoteInsert = TablesInsert<"notes">;
export type NoteUpdate = TablesUpdate<"notes">;

// ── habits ───────────────────────────────────────────
export type Habit = Tables<"habits">;
export type HabitInsert = TablesInsert<"habits">;
export type HabitUpdate = TablesUpdate<"habits">;

// ── profiles ─────────────────────────────────────────
export type Profile = Tables<"profiles">;
export type ProfileInsert = TablesInsert<"profiles">;
export type ProfileUpdate = TablesUpdate<"profiles">;

// ── events (daily / weekly / monthly) ───────────────
export type EventDaily = Tables<"events_daily">;
export type EventDailyInsert = TablesInsert<"events_daily">;
export type EventDailyUpdate = TablesUpdate<"events_daily">;

export type EventWeekly = Tables<"events_weekly">;
export type EventWeeklyInsert = TablesInsert<"events_weekly">;
export type EventWeeklyUpdate = TablesUpdate<"events_weekly">;

export type EventMonthly = Tables<"events_monthly">;
export type EventMonthlyInsert = TablesInsert<"events_monthly">;
export type EventMonthlyUpdate = TablesUpdate<"events_monthly">;
