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
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical", undefined],
    },
  },
};
export default meta;
// 스토리 데이터 유형
type Story = StoryObj<typeof meta>;

// Example
export const Example: Story = {
  args: {
    items: [
      { label: "Radio item 1", value: "1" },
      { label: "Radio item 2", value: "2" },
      { label: "Radio item 3", value: "3" },
    ],
    orientation: "vertical",
  },
};
