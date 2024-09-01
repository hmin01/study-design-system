// Component
import { Input } from "../index";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta, StoryObj } from "@storybook/react";
import type { InputProps } from "../Input.types";

// Storybook metadata
const meta: Meta<InputProps> = {
  title: "Components/Input/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
};

export default meta;
// 스토리 데이터 유형
type Story = StoryObj<typeof meta>;

// Example
export const Example: Story = {
  args: {
    placeholder: "Input a value",
  },
};
