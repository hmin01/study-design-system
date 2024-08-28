// Type
import type { SerializedStyles } from "@emotion/react";
import type { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from "react";

export interface CheckboxProps extends PropsWithChildren, Pick<InputHTMLAttributes<HTMLInputElement>, "className"> {
  /** CSS 스타일 속성 객체 */
  css?: SerializedStyles;
  /** 변경 이벤트 핸들러 */
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
  /** 그룹화를 위한 이름 */
  name: string;
}
