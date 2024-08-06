// Config
import { styled } from "@/configs/stitches.config";
// Keyframe
import { openDialogAnimation, openDialogOverlayAnimation } from "@/configs/keyframes";
// Primitive
import * as PrimitiveDialog from "@radix-ui/react-dialog";

export const StyledDialogContent = styled(PrimitiveDialog.Content, {
  animation: `${openDialogAnimation} 150ms`,
  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: "0.5rem",
  boxShadow: "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1);",
  display: "grid",
  gap: "1rem",
  padding: "1.5rem",
  position: "fixed",
  transitionDuration: "200ms",
  width: "100%",
  zIndex: "50",
});
export const StyledDialogOverlay = styled(PrimitiveDialog.Overlay, {
  animation: `${openDialogOverlayAnimation} 150ms`,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  inset: "0",
  position: "fixed",
  zIndex: "50",
});
