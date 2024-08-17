// Component
import { Input } from "../index";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta, StoryObj } from "@storybook/react";
import type { InputProps } from "../Input.types";

// Storybook metadata
const meta: Meta<InputProps> = {
  title: "Component/Input",
  args: { onChange: fn() },
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

// 스토리 데이터 유형
type Story = StoryObj<typeof meta>;
// More Stories
export const Basic: Story = {
  args: {
    placeholder: "Input a value",
  },
};
export const File: Story = {
  args: {
    type: "file",
    placeholder: "Upload a file",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Upload a file",
  },
};
export const Sizing: Story = {
  args: {
    placeholder: "Upload a file",
    size: "sm",
  },
};
