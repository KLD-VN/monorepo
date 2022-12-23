import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderSearch from '.';

export default {
  title: 'Design System/Organisms/HeaderSearch',
  component: HeaderSearch,
} as ComponentMeta<typeof HeaderSearch>;

const Template: ComponentStory<typeof HeaderSearch> = (args) => <HeaderSearch {...args} />;

export const Default = Template.bind({});