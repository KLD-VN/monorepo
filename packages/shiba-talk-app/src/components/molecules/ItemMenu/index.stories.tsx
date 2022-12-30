import { ComponentStory, ComponentMeta } from "@storybook/react";

import ItemMenu from ".";

export default {
   title: "Design System/Molecules/ItemMenu",
   component: ItemMenu,
} as ComponentMeta<typeof ItemMenu>;

const Template: ComponentStory<typeof ItemMenu> = (args) => <ItemMenu {...args} />;

export const Default = Template.bind({});