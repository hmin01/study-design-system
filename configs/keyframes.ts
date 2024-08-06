// Stitches
import { keyframes } from "@stitches/react";

export const openDialogAnimation = keyframes({
  "0%": {
    opacity: "0",
    transform: "translate3d(-50%, -48%, 0) scale3d(0.95) rotate(0)",
  },
  "100%": {
    opacity: "100",
    transform: "translate3d(-50%, -48%, 0) scale3d(0.95) rotate(0)",
  },
});
export const openDialogOverlayAnimation = keyframes({
  "0%": {
    opacity: "0",
    transform: "translate3d(initial, initial, 0) scale3d(0, 0, 0) rotate(0)",
  },
  "100%": {
    opacity: "100",
    transform: "translate3d(initial, initial, 0) scale3d(0, 0, 0) rotate(0)",
  },
});
