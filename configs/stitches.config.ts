// Color
import { alpha, neutral, primary, semantic } from "./colors";
// Stitches
import { createStitches } from "@stitches/react";

export const { styled, keyframes } = createStitches({
  theme: {
    colors: {
      ...alpha,
      ...neutral,
      ...primary,
      ...semantic,
    },
  },
});
