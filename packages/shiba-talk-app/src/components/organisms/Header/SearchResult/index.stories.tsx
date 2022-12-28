import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchResult from ".";

export default {
   title: "Design System/Organisms/Header/HeaderSearchResult",
   component: SearchResult,
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
   <SearchResult {...args} />
);

export const Default = Template.bind({});