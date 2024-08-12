// Component
import { Button } from "@/components/Button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/Dialog";
// Storybook
import { fn } from "@storybook/test";
// Type
// import type { Meta } from "@storybook/react";

// Storybook metadata
const meta = {
  args: { onChange: fn() },
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Component/Dialog",
};

export default meta;

// Storybook object
export const Basic = ({ ...props }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button shape={"outline"}>Open Modal</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader description="description...">Title</DialogHeader>
    </DialogContent>
  </Dialog>
);
