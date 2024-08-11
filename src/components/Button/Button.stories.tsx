// Component
import { Button } from ".";
// Data
import { ColorVariants, SizeVariants } from "@/shard/enums";
import { ButtonShapeVariants } from "./Button.enum";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta } from "@storybook/react";

// Storybook metadata
const meta = {
  argTypes: {
    color: {
      control: "select",
      options: ColorVariants,
      type: "string",
    },
    css: {
      control: "object",
      type: "object",
    },
    disabled: {
      control: "boolean",
      type: "boolean",
    },
    shape: {
      control: "select",
      options: ButtonShapeVariants,
      type: "string",
    },
    size: {
      control: "select",
      options: SizeVariants,
      type: "string",
    },
  },
  args: { onClick: fn() },
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Component/Button",
} satisfies Meta<typeof Button>;

export default meta;

// Storybook object
export const Basic = ({ ...props }) => <Button {...props}>Click me</Button>;
