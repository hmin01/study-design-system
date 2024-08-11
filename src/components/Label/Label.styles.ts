// Color
import { neutral, semantic } from "@/shard/color";
// Data
import { ColorVariants, SizeVariants } from "@/shard/enums";
// Library
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// Radix UI
import * as Label from "@radix-ui/react-label";
// Type
import type { ColorVariantsProps, SizeVariantsProps } from "src/shard/types";

/************************************
 * 라벨 스타일
 ************************************/
export const StyledLabel = styled(Label.Root)`
  align-items: center;
  break-word: keep-all;
  color: var(--wds-font-color);
  display: inline-flex;
  font-size: var(--wds-font-size);
  font-weight: 600;
  gap: 4px;
  line-height: 1.3;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
/************************************
 * 필수 입력 여부 라벨 스타일
 ************************************/
export const StyledRequiredLabel = styled(Label.Root)`
  color: ${semantic.semantic500};
  font-size: var(--wds-font-size);
  font-weight: 800;
`;
/************************************
 * 라벨 크기 스타일
 ************************************/
export const labelColorVariants: ColorVariantsProps = {
  [ColorVariants.primary]: css({
    "--wds-font-color": neutral.neutral800,
  }),
  [ColorVariants.secondary]: css({
    "--wds-font-color": neutral.neutral400,
  }),
};
/************************************
 * 라벨 크기 스타일
 ************************************/
export const labelSizeVariants: SizeVariantsProps = {
  [SizeVariants.sm]: css({
    "--wds-font-size": "12px",
  }),
  [SizeVariants.md]: css({
    "--wds-font-size": "14px",
  }),
  [SizeVariants.lg]: css({
    "--wds-font-size": "16px",
  }),
};
