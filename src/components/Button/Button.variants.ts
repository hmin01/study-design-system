// Color
import { alpha, neutral, primary, semantic } from "@/shard/enum/color";
// Enum
import { ColorVariants, SizeVariants } from "@/shard/enum/variants";
import { ActionButtonColorVariants, ButtonShapeVariants } from "./Button.enum";
// Library
import { css } from "@emotion/react";

/************************************
 * 버튼 색상 스타일
 ************************************/
export const buttonColorVariants = {
  [ColorVariants.contrast]: css`
    --wds-background-color: white;
    --wds-background-color-active: ${alpha.dark80A};
    --wds-background-color-hover: ${alpha.dark90A};
    --wds-background-color-outline-active: ${alpha.dark40A};
    --wds-background-color-outline-hover: ${alpha.dark20A};
    --wds-border-color: white;
    --wds-border-color-outline: white;
    --wds-font-color: ${neutral.neutral900};
    --wds-font-color-outline: white;
    --wds-ring-color: ${primary.primary300};
  `,
  [ColorVariants.destructive]: css`
    --wds-background-color: ${semantic.semantic500};
    --wds-background-color-active: ${semantic.semantic700};
    --wds-background-color-hover: ${semantic.semantic600};
    --wds-background-color-outline-active: ${semantic.semantic25};
    --wds-background-color-outline-hover: ${semantic.semantic50};
    --wds-border-color: ${semantic.semantic500};
    --wds-border-color-outline: ${semantic.semantic500};
    --wds-font-color: white;
    --wds-font-color-outline: ${semantic.semantic600};
    --wds-ring-color: ${semantic.semantic300};
  `,
  [ColorVariants.primary]: css`
    --wds-background-color: ${primary.primary500};
    --wds-background-color-active: ${primary.primary700};
    --wds-background-color-hover: ${primary.primary600};
    --wds-background-color-outline-active: ${primary.primary25};
    --wds-background-color-outline-hover: ${primary.primary50};
    --wds-border-color: ${primary.primary500};
    --wds-border-color-outline: ${primary.primary500};
    --wds-font-color: white;
    --wds-font-color-outline: ${primary.primary600};
    --wds-ring-color: ${primary.primary300};
  `,
  [ColorVariants.secondary]: css`
    --wds-background-color: ${neutral.neutral75};
    --wds-background-color-active: ${neutral.neutral150};
    --wds-background-color-hover: ${neutral.neutral100};
    --wds-background-color-outline-active: ${neutral.neutral100};
    --wds-background-color-outline-hover: ${neutral.neutral50};
    --wds-border-color: ${neutral.neutral75};
    --wds-border-color-outline: ${neutral.neutral300};
    --wds-font-color: ${neutral.neutral600};
    --wds-font-color-outline: ${neutral.neutral600};
    --wds-ring-color: ${primary.primary300};
  `,
};
/************************************
 * 버튼 모양 스타일
 ************************************/
export const buttonShapeVariants = {
  [ButtonShapeVariants.default]: css``,
  [ButtonShapeVariants.ghost]: css`
    background-color: transparent;
    border-color: transparent;
    color: var(--wds-font-color-outline);
    &:active {
      background-color: var(--wds-background-color-outline-active);
    }
    &:hover {
      background-color: var(--wds-background-color-outline-hover);
    }
  `,
  [ButtonShapeVariants.outline]: css`
    background-color: white;
    border-color: var(--wds-border-color-outline);
    color: var(--wds-font-color-outline);
    &:active {
      background-color: var(--wds-background-color-outline-active);
    }
    &:hover {
      background-color: var(--wds-background-color-outline-hover);
    }
  `,
};
/************************************
 * 버튼 크기 스타일
 ************************************/
export const buttonSizeVariants = {
  [SizeVariants.xs]: css`
    --wds-font-size: 12px;
    --wds-height: 24px;
    --wds-padding-x: 8px;
    --wds-border-radius: 6px;
  `,
  [SizeVariants.sm]: css`
    --wds-font-size: 14px;
    --wds-height: 32px;
    --wds-padding-x: 12px;
    --wds-border-radius: 8px;
  `,
  [SizeVariants.md]: css`
    --wds-font-size: 14px;
    --wds-height: 40px;
    --wds-padding-x: 16px;
    --wds-border-radius: 8px;
  `,
  [SizeVariants.lg]: css`
    --wds-font-size: 16px;
    --wds-height: 48px;
    --wds-padding-x: 24px;
    --wds-border-radius: 10px;
  `,
  [SizeVariants.xl]: css`
    --wds-font-size: 18px;
    --wds-height: 56px;
    --wds-padding-x: 32px;
    --wds-border-radius: 12px;
  `,
};
/************************************
 * 아이콘 버튼 크기 스타일
 ************************************/
export const iconButtonSizeVariants = {
  [SizeVariants.xs]: css`
    --wds-font-size: 12px;
    --wds-height: 24px;
    --wds-padding-x: 3px;
    --wds-border-radius: 6px;
  `,
  [SizeVariants.sm]: css`
    --wds-font-size: 14px;
    --wds-height: 32px;
    --wds-padding-x: 6px;
    --wds-border-radius: 8px;
  `,
  [SizeVariants.md]: css`
    --wds-font-size: 14px;
    --wds-height: 40px;
    --wds-padding-x: 9px;
    --wds-border-radius: 8px;
  `,
  [SizeVariants.lg]: css`
    --wds-font-size: 16px;
    --wds-height: 48px;
    --wds-padding-x: 13px;
    --wds-border-radius: 10px;
  `,
  [SizeVariants.xl]: css`
    --wds-font-size: 18px;
    --wds-height: 56px;
    --wds-padding-x: 17px;
    --wds-border-radius: 12px;
  `,
};
/************************************
 * 액션 버튼 색상 스타일
 ************************************/
export const actionButtonColorVariants = {
  [ActionButtonColorVariants.dark]: css`
    --wds-background-color-active: ${alpha.light20A};
    --wds-background-color-hover: ${alpha.light10A};
    --wds-font-color: ${neutral.neutral600};
  `,
  [ActionButtonColorVariants.light]: css`
    --wds-background-color-active: ${alpha.dark20A};
    --wds-background-color-hover: ${alpha.dark10A};
    --wds-font-color: ${neutral.neutral200};
  `,
};
/************************************
 * 액션 버튼 크기 스타일
 ************************************/
export const actionButtonSizeVariants = {
  [SizeVariants.sm]: css`
    --wds-height: 32px;
    --wds-padding-x: 6px;
    --wds-border-radius: 50%;
  `,
  [SizeVariants.md]: css`
    --wds-height: 40px;
    --wds-padding-x: 9px;
    --wds-border-radius: 50%;
  `,
  [SizeVariants.lg]: css`
    --wds-height: 48px;
    --wds-padding-x: 13px;
    --wds-border-radius: 50%;
  `,
};
