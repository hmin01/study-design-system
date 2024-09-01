// Type
import type { SerializedStyles } from "@emotion/react";

/************************************
 * 기본 입력 컴포넌트 속성
 ************************************/
export interface DefaultInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** CSS 스타일 속성 */
  css?: SerializedStyles;
  /** 에러 상태 */
  error?: boolean;
  /** 크기 속성 */
  size?: "sm" | "md" | "lg";
}
/************************************
 * 입력 컴포넌트 속성
 ************************************/
export interface InputProps extends DefaultInputProps {
  /** 입력 값 초기화 여부 */
  allowClear?: boolean;
  /** 입력 길이 제한 */
  maxLength?: number;
}
/************************************
 * 검색 컴포넌트 속성
 ************************************/
export interface SearchInputProps extends Omit<InputProps, "maxLength"> {
  /** 검색 이벤트 핸들러 */
  onSearch?: (value: string) => void;
}
