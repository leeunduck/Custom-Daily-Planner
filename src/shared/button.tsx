"use client";

import { cn } from "@/lib/utils";
import { getButtonClasses } from "@/lib/variants/button.presets";
import type { ButtonProps } from "@/types/button";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

type NativeBtn = React.ButtonHTMLAttributes<HTMLButtonElement>;

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

function computePlan(props: ButtonProps) {
  const asChild = props.asChild ?? false;
  const className = props.className;
  const children = (props as React.PropsWithChildren).children;

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

  if (props.preset === "signup") {
    const bg = props.bg ?? "basic";

    const classes = getButtonClasses("signup", { bg });
    const native = omitKeys(props, ["preset", "bg", "className", "asChild", "children"] as const);
    return { asChild, className, children, classes, native };
  }

  // auth
  const color = props.color ?? "black";
  const classes = getButtonClasses("auth", { color });
  const native = omitKeys(props, ["preset", "color", "className", "asChild", "children"] as const);
  return { asChild, className, children, classes, native };
}

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
