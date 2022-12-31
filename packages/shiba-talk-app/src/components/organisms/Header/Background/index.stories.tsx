import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderBackground from ".";

export default {
  title: "Design System/organisms/Header/Background",
  component: HeaderBackground,
} as ComponentMeta<typeof HeaderBackground>;

const Template: ComponentStory<typeof HeaderBackground> = (args) => (
  <HeaderBackground {...args} />
);

export const Default = Template.bind({});
