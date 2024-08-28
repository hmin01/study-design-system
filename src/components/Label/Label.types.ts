// Type
import type { PropsWithChildren } from "react";
import type { SerializedStyles } from "@emotion/react";

/************************************
 * 라벨 컴포넌트 속성
 ************************************/
export interface LabelProps extends PropsWithChildren, React.LabelHTMLAttributes<HTMLLabelElement> {
  /** 색상 속성 */
  color?: "primary" | "secondary";
  /** 스타일 속성 */
  css?: SerializedStyles;
  /** 설명 */
  description?: React.ReactNode;
  /** 필수 입력 여부 */
  required?: boolean;
  /** 크기 속성 */
  size?: "sm" | "md" | "lg";
}
