// Component
import { Label } from "./index";
// Data
import { ColorVariants, SizeVariants } from "@/shard/enums";
// Type
import type { Meta } from "@storybook/react";
import type { LabelProps } from "./Label.types";

// Storybook metadata
const meta = {
  argTypes: {
    color: {
      control: "select",
      options: [ColorVariants.primary, ColorVariants.secondary],
      type: "string",
    },
    css: {
      control: "object",
      type: "object",
    },
    required: {
      control: "boolean",
      type: "boolean",
    },
    size: {
      control: "select",
      options: [SizeVariants.sm, SizeVariants.md, SizeVariants.lg],
      type: "string",
    },
  },
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Component/Label",
} satisfies Meta<typeof Label>;

export default meta;

// Storybook object
export const Basic = ({ children, ...props }: LabelProps) => <Label {...props}>{children || "label content"}</Label>;
