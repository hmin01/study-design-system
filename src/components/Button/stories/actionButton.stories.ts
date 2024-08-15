// Component
import { ActionButton } from "@/components";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta, StoryObj } from "@storybook/react";
import type { ActionButtonProps } from "../Button.types";

const meta: Meta<ActionButtonProps> = {
  title: "Component/ActionButton",
  component: ActionButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};
export default meta;

// 스토리 데이터 유형
type Story = StoryObj<typeof meta>;

// More stories
export const Basic: Story = {
  args: {
    icon: "Apple",
  },
};
export const Small: Story = {
  args: {
    icon: "Apple",
    size: "sm",
  },
};
export const Large: Story = {
  args: {
    icon: "Apple",
    size: "lg",
  },
};
