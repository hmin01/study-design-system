// Component
import { Checkbox } from "@/components";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta, StoryObj } from "@storybook/react";
import type { CheckboxProps } from "../Checkbox.types";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
  argTypes: {
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
    },
  },
};
export default meta;
// 스토리 데이터 유형
type Story = StoryObj<typeof meta>;

// Example
export const Example: Story = {
  args: {
    children: "checkbox",
  },
};
