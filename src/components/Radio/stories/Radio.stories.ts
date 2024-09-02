// Component
import { RadioGroup } from "@/components";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta, StoryObj } from "@storybook/react";
import type { RadioGroupProps } from "../Radio.types";

const meta: Meta<RadioGroupProps> = {
  title: "Components/Radio/Radio",
  component: RadioGroup,
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
    children: "checkbox",
  },
};
