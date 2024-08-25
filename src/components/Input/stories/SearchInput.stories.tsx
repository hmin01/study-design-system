// Component
import { SearchInput } from "../index";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta, StoryObj } from "@storybook/react";
import type { SearchInputProps } from "../Input.types";

// Storybook metadata
const meta: Meta<SearchInputProps> = {
  title: "Input/SearchInput",
  args: { onChange: fn(), onSearch: fn() },
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
// 스토리 데이터 유형
type Story = StoryObj<typeof meta>;

// More Stories
export const Example: Story = {
  args: {
    allowClear: true,
    placeholder: "Search keyword",
  },
};
