// Library
import { css } from "@emotion/react";

/************************************
 * 버튼 스타일
 ************************************/
export const buttonStyle = css`
  align-items: center;
  background-color: var(--wds-background-color);
  border-color: var(--wds-border-color);
  border-radius: var(--wds-border-radius);
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  color: var(--wds-font-color);
  cursor: pointer;
  display: inline-flex;
  font-size: var(--wds-font-size);
  font-weight: 600;
  gap: 6px;
  height: var(--wds-height);
  justify-content: center;
  padding: 4px var(--wds-padding-x);
  transition: all 0.2s ease;
  white-space: nowrap;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
  &:hover {
    background-color: var(--wds-background-color-hover);
  }
  &:focus {
    box-shadow:
      0 0 0 1px #f8fafc,
      0 0 0 2px var(--wds-ring-color),
      0 1px 2px 0 #0000000d,
      0 0 #0000;
  }
  &:active {
    background-color: var(--wds-background-color-active);
  }
`;
