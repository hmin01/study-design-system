// Enum
import { SizeVariants } from "@/shard/enum/variants";
import { CheckboxSizeVariants } from "./Checkbox.enum";
// Library
import { css } from "@emotion/react";

/************************************
 * 체크박스 크기 스타일
 ************************************/
export const checkboxSizeVariants = {
  [SizeVariants.sm]: css`
    --wds-size: ${CheckboxSizeVariants.sm}px;
  `,
  [SizeVariants.md]: css`
    --wds-size: ${CheckboxSizeVariants.md}px;
  `,
  [SizeVariants.lg]: css`
    --wds-size: ${CheckboxSizeVariants.lg}px;
  `,
};
