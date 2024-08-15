// React
import React, { forwardRef } from "react";
// Primitives
import * as DialogPrimitive from "@radix-ui/react-dialog";
// Style
import { StyledDialogClose, StyledDialogContent, StyledDialogDescription, StyledDialogHeader, StyledDialogOverlay, StyledDialogTitle } from "./Dialog.styles";

/************************************
 * Dialog Root [Ref: https://www.radix-ui.com/primitives/docs/components/dialog#root]
 ************************************/
export const Dialog = DialogPrimitive.Root;

/************************************
 * Dialog Trigger [Ref: https://www.radix-ui.com/primitives/docs/components/dialog#trigger]
 ************************************/
export const DialogTrigger = DialogPrimitive.Trigger;

/************************************
 * Dialog Portal [Ref: https://www.radix-ui.com/primitives/docs/components/dialog#portal]
 ************************************/
export const DialogPortal = DialogPrimitive.DialogPortal;

/************************************
 * Dialog Overlay [Ref: https://www.radix-ui.com/primitives/docs/components/dialog#overlay]
 ************************************/
export const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ ...props }, forwardRef) => (
  <StyledDialogOverlay ref={forwardRef} {...props} />
));

/************************************
 * Dialog Content [Ref: https://www.radix-ui.com/primitives/docs/components/dialog#content]
 ************************************/
export const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ children, ...props }, forwardRef) => (
  <DialogPortal>
    <DialogOverlay />
    <StyledDialogContent ref={forwardRef} {...props}>
      {children}
    </StyledDialogContent>
  </DialogPortal>
));

/************************************
 * Dialog Header
 ************************************/
export const DialogHeader = React.forwardRef<React.HTMLAttributes<HTMLDivElement>, any>(({ children, description, ...props }, forwardRef) => (
  <StyledDialogHeader ref={forwardRef} {...props}>
    {typeof children === "string" ? <StyledDialogTitle>{children}</StyledDialogTitle> : <>{children}</>}
    <>{description && <StyledDialogDescription>{description}</StyledDialogDescription>}</>
    <StyledDialogClose>X</StyledDialogClose>
  </StyledDialogHeader>
));

/************************************
 * Modal Header (with Back step button)
 ************************************/
export const ModalHeaderWithBack = React.forwardRef<React.HTMLAttributes<HTMLDivElement>, any>(({ children, description, ...props }, forwardRef) => (
  <DialogHeader ref={forwardRef} {...props}>
    <div css={{ display: "flex" }}>
      <span>{"<"}</span>
      <StyledDialogTitle>{children}</StyledDialogTitle>
    </div>
  </DialogHeader>
));
