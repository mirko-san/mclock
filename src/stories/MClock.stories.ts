import type { Meta, StoryObj } from "@storybook/web-components";

import type { MClockProps } from "./MClock";
import { MClock } from "./MClock";

const meta = {
  title: "Components/MClock",
  // NOTE:
  // イマイチうまく動かなさそうなのでコメントアウト
  // tags: ["autodocs"],
  render: (args) => MClock(args),
  argTypes: {
    timeFormat: { control: "text" },
    dateFormat: { control: "text" },
    zoneString: { control: "text" },
    bgColor: { control: "color" },
    bgOpacity: {
      control: "radio",
      options: [
        "1",
        "0.9",
        "0.8",
        "0.7",
        "0.6",
        "0.5",
        "0.4",
        "0.3",
        "0.2",
        "0.1",
      ],
    },
    dateColor: { control: "color" },
    zoneColor: { control: "color" },
    timeColor: { control: "color" },
  },
} satisfies Meta<MClockProps>;

export default meta;
type Story = StoryObj<MClockProps>;

export const Primary: Story = {
  args: {
    timeFormat: "HH:mm:ss",
    dateFormat: "MM/dd E",
    zoneString: "Asia/Tokyo",
    bgColor: "#000000",
    bgOpacity: "0.2",
    dateColor: "#ffffff",
    zoneColor: "#ffffff",
    timeColor: "#ffffff",
  },
};
