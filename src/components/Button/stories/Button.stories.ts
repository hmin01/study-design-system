// Component
import { Button } from "@/components";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonProps } from "../Button.types";

const meta: Meta<ButtonProps> = {
  title: "Component/Button",
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
// More stories
export const Basic: Story = {
  args: {
    children: "Click me",
  },
};
export const Primary: Story = {
  args: {
    children: "Click me",
    color: "primary",
  },
};
export const Destructive: Story = {
  args: {
    children: "Click me",
    color: "destructive",
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
