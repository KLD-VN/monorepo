import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchTitle from "./index";

export default {
    title: "Design System/Molecules/SearchTitle",
    component: SearchTitle,
} as ComponentMeta<typeof SearchTitle>;

const Template: ComponentStory<typeof SearchTitle> = (args) => (
    <SearchTitle {...args} />
);

export const Default = Template.bind({});
