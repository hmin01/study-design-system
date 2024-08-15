// Component
import { IconButton } from "@/components";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta, StoryObj } from "@storybook/react";
import type { IconButtonProps } from "../Button.types";

const meta: Meta<IconButtonProps> = {
  title: "Component/IconButton",
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

// More stories
export const WithIcon: Story = {
  args: {
    icon: "Apple",
    children: "Click me",
  },
};
export const OnlyIcon: Story = {
  args: {
    icon: "Apple",
  },
};
export const AddonAfter: Story = {
  args: {
    icon: "Apple",
    iconPos: "addonAfter",
    children: "Click me",
  },
};
export const Small: Story = {
  args: {
    children: "Click me",
    size: "sm",
  },
};
export const Large: Story = {
  args: {
    children: "Click me",
    size: "lg",
  },
};
