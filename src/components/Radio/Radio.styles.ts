// Color
import { alpha, neutral, primary } from "@/shard/enum/color";
// Library
import styled from "@emotion/styled";
// Radix UI
import { Root } from "@radix-ui/react-radio-group";
// Type
import type { StyledRadioGroupProps } from "./Radio.types";

/************************************
 * 라디오 그룹 아이템 스타일
 ************************************/
export const StyledRadioGroup = styled(Root)<StyledRadioGroupProps>`
  display: flex;
  flex-direction: ${({ orientation }) => (orientation === "vertical" ? "column" : "row")};
  gap: 16px;
`;
/************************************
 * 라디오 그룹 아이템 스타일
 ************************************/
export const StyledRadioGroupItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  & > * {
    cursor: pointer;
  }

  .wds-radio-group-indicator {
    background: ${neutral.neutral0};
    border: 2px solid var(--wds-border-color);
    border-radius: 50%;
    height: var(--wds-size);
    padding: 0;
    position: relative;
    transition: all 0.2s;
    width: var(--wds-size);
  }
  .wds-radio-group-indicator[data-state="checked"] {
    --wds-border-color: ${primary.primary500};
  }
  .wds-radio-group-indicator[data-state="unchecked"] {
    --wds-border-color: ${neutral.neutral500};
  }
  .wds-radio-group-indicator:hover {
    box-shadow: 0 0 0 8px ${alpha.dark10A};
  }

  .wds-radio-group-item-selected {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
  .wds-radio-group-item-selected-icon {
    background-color: ${primary.primary500};
    border-radius: 50%;
    height: 70%;
    width: 70%;
  }
`;
