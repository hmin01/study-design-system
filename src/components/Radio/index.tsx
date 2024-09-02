// Component
import { Label } from "@/components";
// Icon
import { Circle } from "lucide-react";
// Radix UI
import * as PrimitiveRadioGroup from "@radix-ui/react-radio-group";
// React hook
import { forwardRef, useCallback, useEffect, useState } from "react";
// Style
import { StyledRadio } from "./Radio.styles";
// Type
import type { RadioGroupProps } from "./Radio.types";
// Variant
import { radioSizeVariants } from "./Radio.variants";
import { checkboxSizeVariants } from "../Checkbox/Checkbox.variants";

/************************************
 * 라디오 그룹 컴포넌트
 ************************************/
export const RadioGroup = forwardRef<HTMLButtonElement, RadioGroupProps>(
  ({ checked, children, className, css, disabled, onChange, name, size = "md", value }: RadioGroupProps, forwardRef) => {
    // 상태
    const [status, setState] = useState<boolean>(false);

    /** [Handler] 값 변경 */
    const handleChange = useCallback(
      (value: boolean) => {
        // 내부 상태 변경
        setState(value);
        // 외부 변경 이벤트 핸들러 호출
        onChange?.(value);
      },
      [onChange]
    );

    /** Props로부터 전달 받은 상태 동기화 */
    useEffect(() => {
      if (checked !== undefined) setState(checked);
    }, [checked]);

    return (
      <PrimitiveRadioGroup.Root css={css}>
        <StyledRadio>
          <PrimitiveRadioGroup.Item className="wds-radio-group-item" css={radioSizeVariants[size]} value={value ?? ""} ref={forwardRef}>
            <PrimitiveRadioGroup.Indicator>
              <Circle />
            </PrimitiveRadioGroup.Indicator>
          </PrimitiveRadioGroup.Item>
          <Label>{children}</Label>
        </StyledRadio>
      </PrimitiveRadioGroup.Root>
    );
  }
);
