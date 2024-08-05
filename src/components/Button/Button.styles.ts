// Config
import { styled } from "@/configs/stitches.config";
// Type
import type * as Stitches from "@stitches/react";

/** 기본 버튼 컴포넌트 스타일 */
const DefaultButtonStyle: Stitches.CSS = {
  alignItems: "center",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  display: "inline-flex",
  fontSize: "0.875rem",
  fontWeight: "500",
  height: "38px",
  justifyContent: "center",
  padding: "0.5rem 1rem",
  transition: "all 0.25s",
  whiteSpace: "nowrap",
  "&:focuse": {
    outline: "none",
  },
};

/** [Styled] 버튼 컴포넌트 */
export const StyledButton = styled("button", {
  /** Base styles */
  ...DefaultButtonStyle,
  /** Variants */
  variants: {
    color: {
      default: {
        backgroundColor: "$neutral0",
        borderColor: "$neutral300",
        borderWidth: "1px",
        color: "$neutral700",
        "&:hover": {
          backgroundColor: "$neutral50",
        },
      },
      error: {
        backgroundColor: "$semantic600",
        color: "$neutral0",
        "&:hover": {
          backgroundColor: "$semantic500",
        },
      },
      primary: {
        backgroundColor: "$primary600",
        color: "$neutral0",
        "&:hover": {
          backgroundColor: "$primary500",
        },
      },
      transparent: {
        backgroundColor: "transparent",
        color: "$neutral700",
        "&:hover": {
          color: "$primary600",
        },
      },
    },
  },
});
