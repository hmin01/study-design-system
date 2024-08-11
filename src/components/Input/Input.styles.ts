// Color
import { neutral, primary } from "@/shard/color";
// Data
import { SizeVariants } from "@/shard/enums";
// Library
import styled from "@emotion/styled";
import { css } from "@emotion/react";
// Type
import type { SizeVariantsProps } from "@/shard/types";

/************************************
 * 입력 요소 스타일
 ************************************/
export const inputCSS = css({
  borderColor: neutral.neutral200,
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: "var(--wds-rounded)",
  boxSizing: "border-box",
  display: "flex",
  fontSize: "var(--wds-font-size)",
  height: "var(--wds-height)",
  padding: "4px var(--wds-inline-padding)",
  transition: "background-color 0.2s, border 0.2s",
  width: "100%",
  "&[type='file']": {
    cursor: "pointer",
    height: "auto",
    paddingBottom: "var(--wds-vertical-padding)",
    paddingTop: "var(--wds-vertical-padding)",
  },
  "&[type='file']::file-selector-button": {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
  },
  "&:hover": {
    borderColor: primary.primary300,
  },
  "&:focus": {
    outlineColor: primary.primary500,
  },
  "&:disabled": {
    backgroundColor: neutral.neutral50,
    borderColor: neutral.neutral50,
    cursor: "not-allowed",
  },
});
/************************************
 * 크기에 대한 Variants
 ************************************/
export const inputSizeVariants: SizeVariantsProps = {
  [SizeVariants.sm]: css({
    "--wds-font-size": "14px",
    "--wds-height": "32px",
    "--wds-inline-padding": "12px",
    "--wds-rounded": "8px",
    "--wds-vertical-padding": "5.75px",
  }),
  [SizeVariants.md]: css({
    "--wds-font-size": "14px",
    "--wds-height": "40px",
    "--wds-inline-padding": "12px",
    "--wds-rounded": "8px",
    "--wds-vertical-padding": "9.75px",
  }),
  [SizeVariants.lg]: css({
    "--wds-font-size": "16px",
    "--wds-height": "56px",
    "--wds-inline-padding": "16px",
    "--wds-rounded": "12px",
    "--wds-vertical-padding": "17.75px",
  }),
};
/************************************
 * 파일 입력 컴포넌트 Wrapper
 ************************************/
export const StyledFileInputWrapper = styled.div<{ size?: SizeVariants }>`
  align-items: center;
  display: grid;
  gap: ${({ size }) => (SizeVariants.sm === size ? 4 : SizeVariants.md ? 6 : 8)}px;
  width: 100%;
`;
