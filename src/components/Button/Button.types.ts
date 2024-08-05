// Type
import type { PropsWithChildren } from "react";
import type * as Stitches from "@stitches/react";

/** 기본 버튼 컴포넌트 속성 */
export interface DefaultButtonProps extends PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** CSS 스타일 속성 */
  css?: Stitches.CSS;
}
/** 버튼 컴포넌트 속성 */
export interface ButtonProps extends DefaultButtonProps {
  /** 색상 유형 */
  color?: "default" | "error" | "primary" | "transparent";
}
