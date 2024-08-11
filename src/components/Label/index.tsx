// Data
import { ColorVariants, SizeVariants } from "@/shard/enums";
// React
import { forwardRef } from "react";
// Style
import { labelColorVariants, labelSizeVariants, StyledLabel, StyledRequiredLabel } from "./Label.styles";
// Type
import type { LabelProps } from "./Label.types";

/************************************
 * 라벨 컴포넌트
 ************************************/
export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ children, color = ColorVariants.primary, css, required, size = SizeVariants.md, ...props }, forwardRef) => (
  <StyledLabel css={[labelColorVariants[color], labelSizeVariants[size], css]} ref={forwardRef} {...props}>
    <>{children}</>
    <>{required && <StyledRequiredLabel css={labelSizeVariants[size]}>*</StyledRequiredLabel>}</>
  </StyledLabel>
));
