// Library
import { alpha, neutral } from "@/shard/enum/color";
import styled from "@emotion/styled";

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
    border: 1px solid ${neutral.neutral500};
    border-radius: 4px;
    display: flex;
    height: 16px;
    justify-content: center;
    padding: 0;
    transition: all 0.2s;
    width: 16px;
  }
  .wds-checkbox:hover {
    box-shadow: 0 0 0 8px ${alpha.dark10A};
  }
  .wds-checkbox-indicator {
    height: 100%;
    width: 100%;
  }
`;
