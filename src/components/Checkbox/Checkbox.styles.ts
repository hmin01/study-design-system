// Color
import { alpha, neutral, primary } from "@/shard/enum/color";
// Library
import styled from "@emotion/styled";
// Type
import type { StyledCheckboxGroupProps } from "./Checkbox.types";

/************************************
 * 체크박스 스타일
 ************************************/
export const StyledCheckbox = styled.div`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  & > * {
    cursor: pointer;
  }
  .wds-checkbox {
    align-items: center;
    background-color: ${neutral.neutral0};
    border: none;
    border-radius: 50%;
    display: flex;
    height: var(--wds-size);
    justify-content: center;
    padding: 0;
    transition: box-shadow 0.2s;
    width: var(--wds-size);
  }
  .wds-checkbox:hover {
    box-shadow: 0 0 0 8px ${alpha.dark10A};
  }
  .wds-checkbox-indicator {
    background-color: var(--wds-background-color);
    border: 2px solid var(--wds-border-color);
    border-radius: 4px;
    box-sizing: border-box;
    height: 100%;
    position: relative;
    transition: all 0.2s;
    width: 100%;
  }
  .wds-checkbox-indicator-icon {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
  .wds-checkbox[data-disabled] {
    cursor: not-allowed;
    opacity: 0.3;
  }
  .wds-checkbox[data-disabled]:hover {
    box-shadow: none;
  }
  .wds-checkbox[data-state="checked"] .wds-checkbox-indicator {
    --wds-background-color: ${primary.primary500};
    --wds-border-color: ${primary.primary600};
  }
  .wds-checkbox[data-state="unchecked"] .wds-checkbox-indicator {
    --wds-background-color: ${neutral.neutral0};
    --wds-border-color: ${neutral.neutral500};
  }
`;
/************************************
 * 체크박스 스타일
 ************************************/
export const StyledCheckboxDescription = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  & > label {
    cursor: pointer;
  }
`;
export const StyledCheckboxGroup = styled.div<StyledCheckboxGroupProps>`
  align-items: center;
  display: flex;
  flex-direction: ${({ direction }) => (direction === "vertical" ? "column" : "row")};
  gap: 16px;
`;
