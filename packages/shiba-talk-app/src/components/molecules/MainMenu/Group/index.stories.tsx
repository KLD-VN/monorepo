import { ComponentStory, ComponentMeta } from "@storybook/react";

import Group from ".";

export default {
    title: "Design System/Molecules/Group",
    component: Group,
} as ComponentMeta<typeof Group>;

const Template: ComponentStory<typeof Group> = (args) => <Group {...args} />;

export const Default = Template.bind({});