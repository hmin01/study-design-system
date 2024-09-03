// Component
import { Label } from "@/components";
// Radix UI
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
// React hook
import { forwardRef } from "react";
// Style
import { StyledRadioGroup, StyledRadioGroupItem } from "./Radio.styles";
// Type
import type { ElementRef } from "react";
import type { RadioGroupItemProps, RadioGroupItemType, RadioGroupProps } from "./Radio.types";
// Variant
import { radioSizeVariants } from "./Radio.variants";

/************************************
 * 라디오 그룹 컴포넌트
 ************************************/
export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  ({ css, items, name, orientation, size, ...props }: RadioGroupProps, forwardRef) => {
    return (
      <StyledRadioGroup css={css} orientation={orientation} ref={forwardRef} {...props}>
        {items.map(
          (item: RadioGroupItemType): JSX.Element => (
            <RadioGroupItem id={`wds-radio-group-${name ?? Date.now().toString()}-${item.value}`} key={item.value} size={size} value={item.value}>
              {item.label}
            </RadioGroupItem>
          )
        )}
      </StyledRadioGroup>
    );
  }
);
/************************************
 * [Internal] 라디오 그룹 아이템 컴포넌트
 ************************************/
const RadioGroupItem = ({ children, id, size = "md", value, ...props }: RadioGroupItemProps) => {
  return (
    <StyledRadioGroupItem>
      <RadioGroupPrimitive.Item className="wds-radio-group-indicator" css={radioSizeVariants[size]} id={id} value={value} {...props}>
        <RadioGroupPrimitive.Indicator className="wds-radio-group-item-selected">
          <div className="wds-radio-group-item-selected-icon" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <Label htmlFor={id}>{children}</Label>
    </StyledRadioGroupItem>
  );
};
