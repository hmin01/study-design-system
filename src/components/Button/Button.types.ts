// Icon
import { icons } from "lucide-react";
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
  /** 모양 */
  shape?: "default" | "ghost" | "outline";
  /** 크기 */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

/************************************
 * 아이콘 버튼 컴포넌트 속성
 ************************************/
export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** CSS 스타일 속성 객체 */
  css?: SerializedStyles;
  /** 다크 모드 */
  mode?: "dark" | "light";
  /** 아이콘 이름 (https://lucide.dev/icons/) */
  icon: keyof typeof icons;
  /** 크기 */
  size?: "sm" | "md" | "lg";
}
/************************************
 * 아이콘 버튼 컴포넌트 속성
 ************************************/
export interface IconButtonProps extends ButtonProps {
  /** 전위 아이콘 이름 */
  leadingIcon?: keyof typeof icons;
  /** 후위 아이콘 이름 */
  trailingIcon?: keyof typeof icons;
}
