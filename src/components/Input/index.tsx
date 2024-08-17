// React
import { forwardRef } from "react";
// Style
import { inputStyle } from "./Input.styles";
// Type
import type { InputProps } from "./Input.types";
// Variants
import { inputSizeVariants } from "./Input.variants";

/************************************
 * 입력 컴포넌트
 ************************************/
export const Input = forwardRef<HTMLInputElement, InputProps>(({ css, disabled, error, maxLength, size = "md", ...props }: InputProps, forwardRef) => {
  return <input css={[inputStyle, inputSizeVariants[size], css]} data-error={error} disabled={disabled} ref={forwardRef} size={maxLength} {...props} />;
});
