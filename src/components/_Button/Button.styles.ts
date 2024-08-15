// Color
import { neutral, primary, semantic } from "@/shard/color";
// Data
import { ColorVariants, SizeVariants } from "@/shard/enums";
import { ButtonShapeVariants } from "./Button.enum";
// Library
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledButton = styled.button`
  align-items: center;
  background-color: ${neutral.neutral75};
  border-color: ${neutral.neutral75};
  border-radius: var(---wds-rounded);
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  color: ${neutral.neutral600};
  display: inline-flex;
  font-size: var(--wds-font-size);
  font-weight: 600;
  gap: 6px;
  height: var(--wds-height);
  justify-content: center;
  padding: 4px var(--wds-inline-padding);
  transition: all 0.2s;
  white-space: nowrap;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
  &:focus {
    box-shadow:
      0 0 0 1px #f8fafc,
      0 0 0 2px var(--wds-ring-color),
      0 1px 2px 0 #0000000d,
      0 0 #0000;
  }
`;
/************************************
 * 버튼 스타일
 ************************************/
export const buttonCSS = css({
  alignItems: "center",
  backgroundColor: "var(--wds-primary-color)",
  borderColor: "var(--wds-primary-color)",
  borderRadius: "var(--wds-rounded)",
  borderStyle: "solid",
  borderWidth: "1px",
  boxSizing: "border-box",
  color: "var(--wds-font-color)",
  cursor: "pointer",
  display: "inline-flex",
  fontSize: "var(--wds-font-size)",
  fontWeight: "600",
  gap: "6px",
  height: "var(--wds-height)",
  justifyContent: "center",
  padding: "4px var(--wds-inline-padding)",
  transition: "all 0.2s",
  whiteSpace: "nowrap",
  "&:focus": {
    boxShadow: `0 0 0 1px #f8fafc, 0 0 0 2px var(--wds-ring-color),0 1px 2px 0 #0000000d,0 0 #0000`,
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: "0.3",
  },
});
/************************************
 * 버튼 색상 스타일
 ************************************/
export const buttonColorVariants = {
  [ColorVariants.contrast]: css({
    "--wds-primary-color": neutral.neutral0,
    "--wds-secondary-color": neutral.neutral900,
    "--wds-font-color": neutral.neutral900,
    "&:focus, &:hover": {
      "--wds-primary-color": neutral.neutral50,
    },
  }),
  [ColorVariants.destructive]: css({
    "--wds-primary-color": semantic.semantic500,
    "--wds-secondary-color": semantic.semantic500,
    "--wds-font-color": "white",
    "--wds-ring-color": semantic.semantic300,
    "&:hover": {
      "--wds-primary-color": semantic.semantic600,
    },
    "&:visited": {
      "--wds-primary-color": semantic.semantic700,
    },
    "&:disabled": {
      "--wds-primary-color": semantic.semantic500,
    },
  }),
  [ColorVariants.primary]: css({
    "--wds-primary-color": primary.primary500,
    "--wds-secondary-color": primary.primary500,
    "--wds-font-color": "white",
    "--wds-ring-color": primary.primary300,
    "&:hover": {
      "--wds-primary-color": primary.primary600,
    },
    "&:visited": {
      "--wds-primary-color": primary.primary700,
    },
    "&:disabled": {
      "--wds-primary-color": primary.primary500,
    },
  }),
  [ColorVariants.secondary]: css({
    "--wds-primary-color": neutral.neutral75,
    "--wds-secondary-color": neutral.neutral600,
    "--wds-font-color": neutral.neutral600,
    "--wds-ring-color": primary.primary300,
    "&:hover": {
      "--wds-primary-color": neutral.neutral100,
    },
    "&:visited": {
      "--wds-primary-color": neutral.neutral150,
    },
    "&:disabled": {
      "--wds-primary-color": neutral.neutral75,
    },
  }),
};
/************************************
 * 버튼 모양 스타일
 ************************************/
export const buttonShapeVariants = {
  [ButtonShapeVariants.default]: css({}),
  [ButtonShapeVariants.ghost]: css({
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "var(--wds-secondary-color)",
    "&:hover": {
      backgroundColor: neutral.neutral50,
    },
  }),
  [ButtonShapeVariants.outline]: css({
    backgroundColor: "white",
    color: "var(--wds-secondary-color)",
  }),
};
/************************************
 * 버튼 모양 스타일
 ************************************/
export const buttonSizeVariants = {
  [SizeVariants.xs]: css({
    "--wds-font-size": "14px",
    "--wds-height": "24px",
    "--wds-inline-padding": "8px",
    "--wds-rounded": "6px",
  }),
  [SizeVariants.sm]: css({
    "--wds-font-size": "14px",
    "--wds-height": "32px",
    "--wds-inline-padding": "12px",
    "--wds-rounded": "8px",
  }),
  [SizeVariants.md]: css({
    "--wds-font-size": "14px",
    "--wds-height": "40px",
    "--wds-inline-padding": "16px",
    "--wds-rounded": "8px",
  }),
  [SizeVariants.lg]: css({
    "--wds-font-size": "16px",
    "--wds-height": "48px",
    "--wds-inline-padding": "24px",
    "--wds-rounded": "10px",
  }),
  [SizeVariants.xl]: css({
    "--wds-font-size": "18px",
    "--wds-height": "56px",
    "--wds-inline-padding": "32px",
    "--wds-rounded": "12px",
  }),
};
