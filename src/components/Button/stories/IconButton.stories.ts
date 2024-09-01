// Component
import { IconButton } from "@/components";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta, StoryObj } from "@storybook/react";
import type { IconButtonProps } from "../Button.types";

const meta: Meta<IconButtonProps> = {
  title: "Components/Button/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};
export default meta;
// 스토리 데이터 유형
type Story = StoryObj<typeof meta>;

// Example
export const Example: Story = {
  args: {
    leadingIcon: "Apple",
    children: "Click me",
  },
};
