export type ParamsOf<K extends string> = Readonly<{ params: Record<K, string> }>;

/** props에서 필요한 params를 안전하게 뽑아온다(unknown 허용, any 금지) */
export function pickParams<K extends string>(
  props: unknown,
  keys: readonly K[],
): Record<K, string> {
  if (typeof props !== "object" || props === null || !("params" in props)) {
    throw new Error("Invalid route props: missing params");
  }
  const raw = (props as { params: unknown }).params;
  if (typeof raw !== "object" || raw === null) {
    throw new Error("Invalid route params");
  }

  const out = {} as Record<K, string>;
  for (const k of keys) {
    const v = (raw as Record<string, unknown>)[k as string];
    if (typeof v !== "string") {
      throw new Error(`Missing or invalid param: "${k as string}"`);
    }
    out[k] = v;
  }
  return out;
}
