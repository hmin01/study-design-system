// Color
import { neutral, primary, semantic } from "@/shard/enum/color";
// Library
import { css } from "@emotion/react";

/************************************
 * 입력 요소 컨테이너 스타일
 ************************************/
export const inputContainerStyle = css`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
`;
/************************************
 * 입력 요소 아이콘 컨테이너 스타일
 ************************************/
export const inputIconContainerStyle = css`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: var(--wds-left);
  right: var(--wds-right);
  position: absolute;
  top: 0;
`;
/************************************
 * 입력 요소 스타일
 ************************************/
export const inputStyle = css`
  align-items: center;
  border: 1px solid ${neutral.neutral200};
  border-radius: var(--wds-border-radius);
  box-sizing: border-box;
  display: inline-flex;
  gap: 6px;
  font-size: var(--wds-font-size);
  height: var(--wds-height);
  outline: 2px solid transparent;
  outline-offset: -1px;
  padding: 4px var(--wds-padding-x);
  transition: all 0.2s ease;
  width: var(--wds-width);
  &[type="file"] {
    cursor: pointer;
    height: auto;
    padding-bottom: var(--wds-padding-y);
    padding-top: var(--wds-padding-y);
  }
  &[type="file"]::file-selector-button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    font-weight: 500;
    margin-right: 6px;
  }
  &:disabled {
    background-color: ${neutral.neutral50};
    border-color: ${neutral.neutral50};
    cursor: not-allowed;
  }
  &:hover:not([disabled]) {
    border-color: ${primary.primary300};
    box-shadow: 0 0 0 1px ${primary.primary300};
  }
  &:focus {
    border-color: ${primary.primary500};
    box-shadow: 0 0 0 1px ${primary.primary500};
  }
  &[data-error="true"] {
    border-color: ${semantic.semantic500};
    box-shadow: 0 0 0 1px ${semantic.semantic500};
  }
`;
