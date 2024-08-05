// Color
import { alpha, neutral, primary, semantic } from "./color";
// Stitches
import { createStitches } from "@stitches/react";

export const { styled }: { styled: React.ComponentProps<any> } = createStitches({
  theme: {
    colors: {
      ...alpha,
      ...neutral,
      ...primary,
      ...semantic,
    },
  },
});
