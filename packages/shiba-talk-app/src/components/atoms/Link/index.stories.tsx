import { ComponentStory, ComponentMeta } from "@storybook/react";

import Link from "./index";

export default {
   title: "Design System/Atoms/Link",
   component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
   href: "https://www.google.com",
   children: "Link",
};
