// Type
import type { PropsWithChildren } from "react";
import type { SerializedStyles } from "@emotion/react";

/************************************
 * 버튼 컴포넌트 속성
 ************************************/
export interface ButtonProps extends PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 색상 유형 */
  color?: "contrast" | "destructive" | "primary" | "secondary";
  /** CSS 스타일 속성 객체 */
  css?: SerializedStyles;
  /** 크기 */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
