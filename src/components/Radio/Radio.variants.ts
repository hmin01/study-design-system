// Enum
import { SizeVariants } from "@/shard/enum/variants";
import { RadioSizeVariants } from "./Radio.enum";
// Library
import { css } from "@emotion/react";

/************************************
 * 체크박스 크기 스타일
 ************************************/
export const radioSizeVariants = {
  [SizeVariants.sm]: css`
    --wds-size: ${RadioSizeVariants.sm}px;
  `,
  [SizeVariants.md]: css`
    --wds-size: ${RadioSizeVariants.md}px;
  `,
  [SizeVariants.lg]: css`
    --wds-size: ${RadioSizeVariants.lg}px;
  `,
};
