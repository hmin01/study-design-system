// Component
import { Input, FileInput } from "./index";
// Data
import { SizeVariants } from "@/shard/enums";
// Storybook
import { fn } from "@storybook/test";
// Type
import type { Meta } from "@storybook/react";
import type { FileInputProps } from "./Input.types";

// Storybook metadata
const meta = {
  argTypes: {
    css: {
      control: "object",
      type: "object",
    },
    disabled: {
      control: "boolean",
      type: "boolean",
    },
    placeholder: {
      control: "text",
      type: "string",
    },
    size: {
      control: "select",
      options: SizeVariants,
      type: "enum",
    },
  },
  args: { onChange: fn() },
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Component/Input",
} satisfies Meta<typeof Input>;

export default meta;

// Storybook object
export const Basic = ({ ...props }) => <Input {...props} />;
export const File = ({ label, ...props }: FileInputProps) => <FileInput label={label || "File input"} {...props} />;
