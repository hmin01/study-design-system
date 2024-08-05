// React
import { forwardRef } from "react";
// Style
import { StyledButton } from "./Button.styles";
// Type
import type { ButtonProps } from "./Button.types";

/* 기본 버튼 컴포넌트 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, color = "default" }, forwardRef) => (
  <StyledButton color={color} ref={forwardRef}>
    {children}
  </StyledButton>
));

// export const OutlineButton = forwardRef<>(({ children, ...props }, forwardRef) => (

// ))
