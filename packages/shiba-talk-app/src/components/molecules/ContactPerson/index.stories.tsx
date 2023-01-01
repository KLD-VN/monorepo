import {ComponentStory, ComponentMeta} from "@storybook/react";

import ContactPerson from ".";

export default {
    title: "Design System/Molecules/ContactPerson",
    component: ContactPerson,
} as ComponentMeta<typeof ContactPerson>;

const Template: ComponentStory<typeof ContactPerson> = (args) => (
    <ContactPerson {...args} />
);

export const Default = Template.bind({});
