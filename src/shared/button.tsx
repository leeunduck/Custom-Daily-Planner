"use client";

import { cn } from "@/lib/utils";
import { getButtonClasses } from "@/lib/variants/button.presets";
import type { ButtonProps } from "@/types/button";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

type NativeBtn = React.ButtonHTMLAttributes<HTMLButtonElement>;

/** 일부 키를 제외한 props 반환 (타입 안전) */
function omitKeys<T extends object, K extends readonly (keyof T)[]>(
  obj: T,
  keys: K,
): Omit<T, K[number]> {
  const out: Partial<T> = {};
  for (const k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      const key = k as keyof T;
      if (!keys.includes(key as K[number])) {
        out[key] = obj[key];
      }
    }
  }
  return out as Omit<T, K[number]>;
}

/** preset별 처리 계획 수립 */
function computePlan(props: ButtonProps) {
  const asChild = props.asChild ?? false;
  const className = props.className;
  const children = (props as React.PropsWithChildren).children;

  // 1️⃣ Hero
  if (props.preset === "hero") {
    const intent = props.intent ?? "primary";
    const glow = props.glow ?? false;
    const pill = props.pill ?? true;

    const classes = getButtonClasses("hero", { intent, glow, pill });
    const native = omitKeys(props, [
      "preset",
      "intent",
      "glow",
      "pill",
      "className",
      "asChild",
      "children",
    ] as const);
    return { asChild, className, children, classes, native };
  }

  // 2️⃣ Feature
  if (props.preset === "feature") {
    const radius = props.radius ?? "2xl";

    const classes = getButtonClasses("feature", { radius });
    const native = omitKeys(props, [
      "preset",
      "radius",
      "className",
      "asChild",
      "children",
    ] as const);
    return { asChild, className, children, classes, native };
  }

  // 3️⃣ Signup
  if (props.preset === "signup") {
    const bg = props.bg ?? "basic";

    const classes = getButtonClasses("signup", { bg });
    const native = omitKeys(props, ["preset", "bg", "className", "asChild", "children"] as const);
    return { asChild, className, children, classes, native };
  }

  // 4️⃣ CTA
  if (props.preset === "cta") {
    const state = props.disabled ? "disabled" : "active";
    const classes = cn(getButtonClasses("cta", { state }));

    const native = omitKeys(props, [
      "preset",
      "disabled",
      "className",
      "asChild",
      "children",
    ] as const);
    return { asChild, className, children, classes, native };
  }

  // 5️⃣ Back
  if (props.preset === "back") {
    const size = props.size ?? "md";
    const tone = props.tone ?? "default";
    const underline = props.underline ?? false;

    const classes = getButtonClasses("back", { size, tone, underline });
    const native = omitKeys(props, [
      "preset",
      "size",
      "tone",
      "underline",
      "className",
      "asChild",
      "children",
    ] as const);
    return { asChild, className, children, classes, native };
  }

  // 6️⃣ Auth (기본)
  const color = props.color ?? "black";
  const classes = getButtonClasses("auth", { color });
  const native = omitKeys(props, ["preset", "color", "className", "asChild", "children"] as const);
  return { asChild, className, children, classes, native };
}

/** 공용 Button 컴포넌트 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const plan = computePlan(props);
  const Comp = plan.asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      type={plan.asChild ? undefined : "button"} // 폼 내 예기치 않은 submit 방지
      className={cn(plan.classes, plan.className)}
      {...(plan.native as NativeBtn)}
    >
      {plan.children}
    </Comp>
  );
});
Button.displayName = "Button";
