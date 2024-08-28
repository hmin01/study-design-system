// Component
import { Label } from "@/components";
// Icon
import { Check } from "lucide-react";
// Radix UI
import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";
// Style
import { StyledCheckbox } from "./Checkbox.styles";
// Type
import type { CheckboxProps } from "./Checkbox.types";
// Utility
import { classNames } from "@/shard/utility/property";

export function Checkbox({ css, children, className, name, ...props }: CheckboxProps) {
  return (
    <StyledCheckbox css={css}>
      <PrimitiveCheckbox.Root className={classNames("wds-checkbox", className)} id={`wds-checkbox-${name}`}>
        <PrimitiveCheckbox.Indicator className="wds-checkbox-indicator">
          <Check size={16} />
        </PrimitiveCheckbox.Indicator>
      </PrimitiveCheckbox.Root>
      <Label htmlFor={`wds-checkbox-${name}`}>{children}</Label>
    </StyledCheckbox>
  );
}
