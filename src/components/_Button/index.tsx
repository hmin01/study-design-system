// React
import { forwardRef } from "react";
// Style
import { buttonColorVariants, buttonSizeVariants, StyledButton } from "./Button.styles";
// Type
import type { ButtonProps } from "./Button.types";

/************************************
 * 버튼 컴포넌트
 ************************************/
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, color = "secondary", css, size = "md", ...props }, forwardRef) => (
  <StyledButton css={[buttonColorVariants[color], buttonSizeVariants[size], css]} ref={forwardRef} {...props}>
    {children}
  </StyledButton>
));
