import {ComponentStory, ComponentMeta} from "@storybook/react";

import HomePage from ".";

export default {
    title: "Design System/Pages/HomePage",
    component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const Default = Template.bind({});