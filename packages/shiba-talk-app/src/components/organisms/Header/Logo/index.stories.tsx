import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderLogo from '.';

export default {
  title: 'Design System/Organisms/HeaderLogo',
  component: HeaderLogo,
} as ComponentMeta<typeof HeaderLogo>;

const Template: ComponentStory<typeof HeaderLogo> = (args) => <HeaderLogo {...args} />;

export const Default = Template.bind({});