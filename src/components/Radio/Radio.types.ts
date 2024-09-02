// Type
import type { SerializedStyles } from "@emotion/react";
import type { InputHTMLAttributes, PropsWithChildren } from "react";

export interface StyledRadioGroupProps {
  /** 아이템 정렬 방향 */
  direction?: "horizantal" | "vertical";
}

export interface RadioGroupProps extends PropsWithChildren, Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size" | "value"> {
  /** CSS 스타일 속성 객체 */
  css?: SerializedStyles;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 변경 이벤트 핸들러 */
  onChange?: (checked: boolean) => void;
  /** 크기 */
  size?: "sm" | "md" | "lg";
  /** 라디오 값 */
  value?: string;
}
