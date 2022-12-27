import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchItem from "./index";

export default {
  title: "Design System/molecules/SearchItem",
  component: SearchItem,
} as ComponentMeta<typeof SearchItem>;

const Template: ComponentStory<typeof SearchItem> = (args) => (
  <SearchItem {...args} />
);

export const Default = Template.bind({});
