// Color
import { alpha, neutral, primary } from "@/shard/enum/color";
// Library
import styled from "@emotion/styled";

/************************************
 * 라디오 스타일
 ************************************/
export const StyledRadio = styled.div`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  & > * {
    cursor: pointer;
  }
  .wds-radio-group-item {
    height: var(--wds-size);
    width: var(--wds-size);
  }
`;
