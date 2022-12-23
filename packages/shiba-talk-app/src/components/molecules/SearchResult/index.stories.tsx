import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchResult from ".";

export default {
   title: "Design System/Molecules/SearchResult",
   component: SearchResult,
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
   <SearchResult {...args} />
);

export const Default = Template.bind({});