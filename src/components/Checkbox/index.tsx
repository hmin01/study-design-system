// Color
import { neutral } from "@/shard/enum/color";
// Component
import { Label } from "@/components";
// Icon
import { Check, Minus } from "lucide-react";
// Radix UI
import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";
// React hook
import { forwardRef, useCallback, useEffect, useState } from "react";
// Style
import { StyledCheckbox, StyledCheckboxDescription, StyledCheckboxGroup } from "./Checkbox.styles";
// Type
import type { CheckboxGroupProps, CheckboxProps } from "./Checkbox.types";
// Variant
import { checkboxSizeVariants } from "./Checkbox.variants";
// Utility
import { classNames } from "@/shard/utility/property";

/************************************
 * 체크박스 컴포넌트
 ************************************/
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, children, className, css, disabled, onChange, name, size = "md" }: CheckboxProps, forwardRef) => {
    // 상태
    const [status, setState] = useState<boolean | "indeterminate">(false);

    /** [Handler] 값 변경 */
    const handleChange = useCallback(
      (value: boolean | "indeterminate") => {
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
      <StyledCheckbox css={css} ref={forwardRef}>
        <PrimitiveCheckbox.Root
          checked={Boolean(status)}
          className={classNames("wds-checkbox", className)}
          css={checkboxSizeVariants[size]}
          disabled={disabled}
          id={`wds-checkbox-${name}`}
          onCheckedChange={handleChange}
        >
          <div className="wds-checkbox-indicator">
            <PrimitiveCheckbox.Indicator className="wds-checkbox-indicator-icon">
              {status === "indeterminate" ? <Minus color={neutral.neutral0} strokeWidth={3} /> : <Check color={neutral.neutral0} strokeWidth={3} />}
            </PrimitiveCheckbox.Indicator>
          </div>
        </PrimitiveCheckbox.Root>
        <StyledCheckboxDescription>
          <Label htmlFor={`wds-checkbox-${name}`}>{children}</Label>
        </StyledCheckboxDescription>
      </StyledCheckbox>
    );
  }
);
/************************************
 * 체크박스 그룹 컴포넌트
 ************************************/
export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(({ direction = "horizantal", items, onChange }: CheckboxGroupProps, forwardRef) => {
  // 선택한 옵션
  const [checkOptions, setCheckOptions] = useState<Set<string>>(new Set());

  /** [Handler] 선택 변경 */
  const handleChange = useCallback(
    (key: string, checked: boolean | "indeterminate") =>
      setCheckOptions((state: Set<string>) => {
        if (Boolean(checked)) {
          state.add(key);
        } else {
          state.delete(key);
        }
        // 외부 변경 이벤트 핸들러 호출
        onChange?.(Array.from(state));
        // 변경 사항 반환
        return state;
      }),
    [checkOptions, onChange]
  );

  return (
    <StyledCheckboxGroup direction={direction} ref={forwardRef}>
      {items.map((elem: any) => (
        <Checkbox key={elem.value} name={elem.value} onChange={(checked: boolean | "indeterminate") => handleChange(elem.value, checked)}>
          {elem.label}
        </Checkbox>
      ))}
    </StyledCheckboxGroup>
  );
});
