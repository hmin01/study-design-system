// Component
import { Button } from "@/components";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonProps } from "../Button.types";

const meta: Meta<ButtonProps> = {
  title: "Button/Button",
  component: Button,
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
    children: "Click me",
  },
};
