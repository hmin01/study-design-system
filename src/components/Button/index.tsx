// Enum
import { IconButtonSizeVariants } from "./Button.enum";
// Icon
import { icons } from "lucide-react";
// React
import { forwardRef } from "react";
// Style
import { buttonStyle } from "./Button.styles";
// Variants
import { buttonColorVariants, buttonShapeVariants, buttonSizeVariants, iconButtonSizeVariants } from "./Button.variants";
// Type
import type { SerializedStyles } from "@emotion/react";
import type { ButtonProps, IconButtonProps } from "./Button.types";

/************************************
 * 버튼 컴포넌트
 ************************************/
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, color = "secondary", css, shape = "default", size = "md", ...props }: ButtonProps, forwardRef) => (
  <button css={[buttonStyle, buttonColorVariants[color], buttonSizeVariants[size], buttonShapeVariants[shape], css]} ref={forwardRef} {...props}>
    {children}
  </button>
));

/************************************
 * 아이콘 버튼 컴포넌트
 ************************************/
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, color = "secondary", css, icon, iconPos = "addonBefore", shape = "default", size = "md", ...props }: IconButtonProps, forwardRef) => {
    // 아이콘
    const Icon = icons[icon];

    // 아이콘 여부
    const isOnlyIcon: boolean = icon !== undefined && children === undefined;
    // 아이콘 크기
    const iconSize: number = IconButtonSizeVariants[size];
    // 버큰 크기에 대한 Variants
    const sizeVariants: SerializedStyles = isOnlyIcon ? iconButtonSizeVariants[size] : buttonSizeVariants[size];

    return (
      <button css={[buttonStyle, buttonColorVariants[color], sizeVariants, buttonShapeVariants[shape], css]} ref={forwardRef} {...props}>
        {iconPos === "addonBefore" && <Icon size={iconSize} />}
        <>{children}</>
        {iconPos === "addonAfter" && <Icon size={iconSize} />}
      </button>
    );
  }
);
