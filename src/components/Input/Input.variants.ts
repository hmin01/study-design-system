// Data
import { SizeVariants } from "@/shard/enum/variants";
import { PaddingVariants } from "./Input.enum";
// Library
import { css } from "@emotion/react";

/************************************
 * 크기에 대한 Variants
 ************************************/
export const inputSizeVariants = {
  [SizeVariants.sm]: css`
    --wds-border-radius: 8px;
    --wds-font-size: 14px;
    --wds-height: 32px;
    --wds-padding-x: ${PaddingVariants.sm}px;
    --wds-padding-y: 5.75px;
  `,
  [SizeVariants.md]: css`
    --wds-border-radius: 8px;
    --wds-font-size: 14px;
    --wds-height: 40px;
    --wds-padding-x: ${PaddingVariants.md}px;
    --wds-padding-y: 9.75px;
  `,
  [SizeVariants.lg]: css`
    --wds-border-radius: 12px;
    --wds-font-size: 16px;
    --wds-height: 56px;
    --wds-padding-x: ${PaddingVariants.lg}px;
    --wds-padding-y: 17.75px;
  `,
};
