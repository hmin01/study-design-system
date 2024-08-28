// Color
import { neutral } from "@/shard/enum/color";
// Enum
import { ColorVariants, SizeVariants } from "@/shard/enum/variants";
// Library
import { css } from "@emotion/react";
// Type
import type { ColorVariantsProps, SizeVariantsProps } from "@/shard/type/variants";

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
