// Component
import { Label } from "@/components/Label";
// Data
import { SizeVariants } from "@/shard/enums";
// React
import { forwardRef } from "react";
// Style
import { labelSizeVariants } from "@/components/Label/Label.styles";
import { inputCSS, inputSizeVariants, StyledFileInputWrapper } from "./Input.styles";
// Type
import type { FileInputProps, InputProps } from "./Input.types";

/************************************
 * 입력 컴포넌트
 ************************************/
export const Input = forwardRef<HTMLInputElement, InputProps>(({ css, maxLength, size = SizeVariants.md, ...props }, forwardRef) => (
  <input css={[inputCSS, inputSizeVariants[size], css]} ref={forwardRef} size={maxLength} {...props} />
));
/************************************
 * 파일 입력 컴포넌트
 ************************************/
export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({ css, size = SizeVariants.md, ...props }, forwardRef) => {
  return <input css={[inputCSS, inputSizeVariants[size], css]} ref={forwardRef} {...props} type="file" />;
});
