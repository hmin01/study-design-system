// Color
import { semantic } from "@/shard/enum/color";
// Library
import styled from "@emotion/styled";
// Radix UI
import * as Label from "@radix-ui/react-label";

/************************************
 * 라벨 스타일
 ************************************/
export const StyledLabel = styled(Label.Root)`
  align-items: center;
  break-word: keep-all;
  color: var(--wds-font-color);
  display: inline-flex;
  font-size: var(--wds-font-size);
  font-weight: 600;
  gap: 4px;
  line-height: 1.3;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
/************************************
 * 필수 입력 여부 라벨 스타일
 ************************************/
export const StyledRequiredLabel = styled(Label.Root)`
  color: ${semantic.semantic500};
  font-size: var(--wds-font-size);
  font-weight: 800;
`;
