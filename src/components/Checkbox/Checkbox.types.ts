// Type
import type { SerializedStyles } from "@emotion/react";
import type { InputHTMLAttributes, PropsWithChildren } from "react";

export interface StyledCheckboxGroupProps {
  /** 아이템 정렬 방향 */
  direction?: "horizantal" | "vertical";
}

export interface CheckboxProps extends PropsWithChildren, Omit<InputHTMLAttributes<HTMLInputElement>, "checked" | "onChange" | "size"> {
  /** 선택 상태 */
  checked?: boolean | "indeterminate";
  /** CSS 스타일 속성 객체 */
  css?: SerializedStyles;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 변경 이벤트 핸들러 */
  onChange?: (checked: boolean | "indeterminate") => void;
  /** 크기 */
  size?: "sm" | "md" | "lg";
}
export interface CheckboxGroupProps extends StyledCheckboxGroupProps {
  /** CSS 스타일 속성 객체 */
  css?: SerializedStyles;
  /** 기본 값 */
  defaultValue?: string[];
  /** 체크박스 그룹 아이템 */
  items: { label: string; value: boolean | number | string }[];
  /** 변경 이벤트 핸들러 */
  onChange?: (checked: string[]) => void;
}
