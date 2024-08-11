// Button
import { SizeVariants } from "@/shard/enums";
// Type
import type { SerializedStyles } from "@emotion/react";

/************************************
 * 기본 입력 컴포넌트 속성
 ************************************/
export type DefaultInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** CSS 스타일 속성 */
  css?: SerializedStyles;
  /** 크기 속성 */
  size?: SizeVariants;
};
/************************************
 * 입력 컴포넌트 속성
 ************************************/
export interface InputProps extends DefaultInputProps {
  /** 입력 길이 제한 */
  maxLength?: number;
}
/************************************
 * 파일 입력 컴포넌트 속성
 ************************************/
export interface FileInputProps extends DefaultInputProps {
  /** 라벨 */
  label?: string;
}
