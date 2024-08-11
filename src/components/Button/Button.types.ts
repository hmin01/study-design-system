// Data
import { ColorVariants, SizeVariants } from "@/shard/enums";
import { ButtonShapeVariants } from "./Button.enum";
// Type
import type { PropsWithChildren } from "react";
import type { SerializedStyles } from "@emotion/react";

/************************************
 * 버튼 색상 속성
 ************************************/
export type ButtonColorVariantsProps = {
  [key in ColorVariants]?: SerializedStyles;
};
/************************************
 * 버튼 유형 속성
 ************************************/
export type ButtonShapeVariantsProps = {
  [key in ButtonShapeVariants]: SerializedStyles;
};
/************************************
 * 버튼 크기 속성
 ************************************/
export type ButtonSizeVariantsProps = {
  [key in SizeVariants]?: SerializedStyles;
};
/************************************
 * 기본 버튼 컴포넌트 속성
 ************************************/
export interface DefaultButtonProps extends PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** CSS 스타일 속성 */
  css?: SerializedStyles;
}
/************************************
 * 버튼 컴포넌트 속성
 ************************************/
export interface ButtonProps extends DefaultButtonProps {
  /** 색상 유형 */
  color?: ColorVariants;
  /** 모양 유형 */
  shape?: ButtonShapeVariants;
  /** 크기 */
  size?: SizeVariants;
}
