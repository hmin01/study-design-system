// Enum
import { IconButtonSizeVariants } from "./Button.enum";
// Icon
import { icons } from "lucide-react";
// React
import { forwardRef } from "react";
// Style
import { StyledActionButton, StyledButton } from "./Button.styles";
// Variants
import { actionButtonColorVariants, buttonColorVariants, buttonShapeVariants, buttonSizeVariants, iconButtonSizeVariants } from "./Button.variants";
// Type
import type { SerializedStyles } from "@emotion/react";
import type { ActionButtonProps, ButtonProps, IconButtonProps } from "./Button.types";

/************************************
 * 버튼 컴포넌트
 ************************************/
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color = "secondary", css, shape = "default", size = "md", ...props }: ButtonProps, forwardRef) => (
    <StyledButton css={[buttonColorVariants[color], buttonSizeVariants[size], buttonShapeVariants[shape], css]} ref={forwardRef} {...props}>
      {children}
    </StyledButton>
  )
);
/************************************
 * 액션 버튼 컴포넌트
 ************************************/
export const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ css, icon, mode = "light", size = "md", ...props }: ActionButtonProps, forwardRef) => {
    // 아이콘
    const Icon = icons[icon];

    return (
      <StyledActionButton css={[actionButtonColorVariants[mode], iconButtonSizeVariants[size], css]} ref={forwardRef} {...props}>
        <Icon size={IconButtonSizeVariants[size]} />
      </StyledActionButton>
    );
  }
);
/************************************
 * 아이콘 버튼 컴포넌트
 ************************************/
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, color = "secondary", css, leadingIcon, trailingIcon, shape = "default", size = "md", ...props }: IconButtonProps, forwardRef) => {
    // 아이콘
    const LeadingIcon = leadingIcon ? icons[leadingIcon] : undefined;
    const TrailingIcon = trailingIcon ? icons[trailingIcon] : undefined;

    // 아이콘 여부
    const isOnlyIcon: boolean = (LeadingIcon || TrailingIcon) && children === undefined ? true : false;
    // 아이콘 크기
    const iconSize: number = IconButtonSizeVariants[size];
    // 버큰 크기에 대한 Variants
    const sizeVariants: SerializedStyles = isOnlyIcon ? iconButtonSizeVariants[size] : buttonSizeVariants[size];

    return (
      <StyledButton css={[buttonColorVariants[color], sizeVariants, buttonShapeVariants[shape], css]} ref={forwardRef} {...props}>
        {LeadingIcon && <LeadingIcon size={iconSize} />}
        <>{children}</>
        {TrailingIcon && <TrailingIcon size={iconSize} />}
      </StyledButton>
    );
  }
);
