import { ComponentStory, ComponentMeta } from '@storybook/react';

import Complementary from '.';

export default {
  title: 'Design System/Organisms/Complementary',
  component: Complementary,
} as ComponentMeta<typeof Complementary>;

const Template: ComponentStory<typeof Complementary> = (args) => <Complementary {...args} />;

export const Default = Template.bind({});