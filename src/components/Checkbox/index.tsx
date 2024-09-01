// Color
import { neutral } from "@/shard/enum/color";
// Component
import { Label } from "@/components";
// Icon
import { Check } from "lucide-react";
// Radix UI
import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";
// React hook
import { forwardRef, useCallback, useState } from "react";
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
  ({ checked, children, className, css, disabled, onChange, name, size = "md" }: CheckboxProps, forwardRef) => (
    <StyledCheckbox css={css} ref={forwardRef}>
      <PrimitiveCheckbox.Root
        checked={checked}
        className={classNames("wds-checkbox", className)}
        css={checkboxSizeVariants[size]}
        disabled={disabled}
        id={`wds-checkbox-${name}`}
        onCheckedChange={onChange}
      >
        <div className="wds-checkbox-indicator">
          <PrimitiveCheckbox.Indicator className="wds-checkbox-indicator-icon">
            <Check color={neutral.neutral0} strokeWidth={3} />
          </PrimitiveCheckbox.Indicator>
        </div>
      </PrimitiveCheckbox.Root>
      <StyledCheckboxDescription>
        <Label htmlFor={`wds-checkbox-${name}`}>{children}</Label>
      </StyledCheckboxDescription>
    </StyledCheckbox>
  )
);
/************************************
 * 체크박스 그룹 컴포넌트
 ************************************/
export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(({ direction = "horizantal", items, onChange }: CheckboxGroupProps, forwardRef) => {
  // 선택한 옵션
  const [checkOptions, setCheckOptions] = useState<Set<string>>(new Set());

  /** [Handler] 선택 변경 */
  const handleChange = useCallback(
    (key: string, checked: boolean | "indeterminate") => {
      // 체크 여부에 따른 처리
      if (Boolean(checked)) {
        setCheckOptions((state) => new Set(state).add(key));
      } else {
        setCheckOptions((state) => {
          state.delete(key);
          return new Set(state);
        });
      }
      // 부모로부터 상속 받은 클릭 이벤트 핸들러가 있을 경우
      onChange?.(Array.from(checkOptions));
    },
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
