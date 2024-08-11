// Data
import { ColorVariants, SizeVariants } from "@/shard/enums";
import { ButtonShapeVariants } from "./Button.enum";
// React
import { forwardRef } from "react";
// Style
import { buttonColorVariants, buttonShapeVariants, buttonCSS, buttonSizeVariants } from "./Button.styles";
// Type
import type { ButtonProps } from "./Button.types";

/************************************
 * 버튼 컴포넌트
 ************************************/
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, color = ColorVariants.secondary, css, shape = ButtonShapeVariants.default, size = SizeVariants.md, ...props }, forwardRef) => (
  <button css={[buttonCSS, buttonColorVariants[color], buttonShapeVariants[shape], buttonSizeVariants[size], css]} ref={forwardRef} {...props}>
    {children}
  </button>
));
