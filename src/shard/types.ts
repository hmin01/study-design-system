// Data
import { ColorVariants, SizeVariants } from "./enums";
// Type
import type { SerializedStyles } from "@emotion/react";

/************************************
 * 색상 속성
 ************************************/
export type ColorVariantsProps = {
  [key in ColorVariants]?: SerializedStyles;
};
/************************************
 * 크기 속성
 ************************************/
export type SizeVariantsProps = {
  [key in SizeVariants]?: SerializedStyles;
};
