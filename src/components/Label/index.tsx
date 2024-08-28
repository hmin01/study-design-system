// React
import { forwardRef } from "react";
// Style
import { StyledLabel, StyledRequiredLabel } from "./Label.styles";
// Type
import type { LabelProps } from "./Label.types";
// Variant
import { labelColorVariants, labelSizeVariants } from "./Label.variants";

/************************************
 * 라벨 컴포넌트
 ************************************/
export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ children, color = "primary", css, required, size = "md", ...props }, forwardRef) => (
  <StyledLabel css={[labelColorVariants[color], labelSizeVariants[size], css]} ref={forwardRef} {...props}>
    <>{children}</>
    <>{required && <StyledRequiredLabel css={labelSizeVariants[size]}>*</StyledRequiredLabel>}</>
  </StyledLabel>
));
