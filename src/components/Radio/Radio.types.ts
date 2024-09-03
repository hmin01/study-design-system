// Radix UI
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
// Type
import type { SerializedStyles } from "@emotion/react";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

interface DefaultRadioGroupProps {
  /** CSS 스타일 속성 객체 */
  css?: SerializedStyles;
  /** 크기 */
  size?: "sm" | "md" | "lg";
}

export interface RadioGroupItemType {
  /** 라벨 */
  label: string;
  /** 값 */
  value: string;
}

export interface StyledRadioGroupProps extends Pick<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, "orientation"> {}

export interface RadioGroupProps extends Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, "css">, DefaultRadioGroupProps {
  /** 아이템 */
  items: RadioGroupItemType[];
}
export interface RadioGroupItemProps extends PropsWithChildren, ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, Omit<DefaultRadioGroupProps, "css"> {}
