import { ComponentStory, ComponentMeta } from "@storybook/react";

import ItemMenu from ".";

export default {
  title: "Design System/Molecules/ItemMenu",
  component: ItemMenu,
} as ComponentMeta<typeof ItemMenu>;

const Template: ComponentStory<typeof ItemMenu> = (args) => (
  <>
    <ItemMenu {...args} />
    <ItemMenu {...args} />
    <ItemMenu {...args} />
    <ItemMenu {...args} />
    <ItemMenu {...args} />
    <ItemMenu {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {
  title: "title",
  iconUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/YHLvfJvVfG6.png"
}

export const Small = Template.bind({});