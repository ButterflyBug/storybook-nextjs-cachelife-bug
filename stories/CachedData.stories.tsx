import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CachedData } from "./CachedData";

const meta: Meta<typeof CachedData> = {
  title: "Example/CachedData",
  component: CachedData,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Cached Data Example",
  },
};

export const CustomTitle: Story = {
  args: {
    title: "My Custom Cached Component",
  },
};
