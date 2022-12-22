// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchInput from '.';

export default {
  title: 'Design System/Molecules/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});

Default.args = {
   placeholder: 'Search'
}