import { ComponentStory, ComponentMeta } from '@storybook/react';

import ControlSettings from '.';

export default {
  title: 'Design System/Organisms/ControlSettings',
  component: ControlSettings,
} as ComponentMeta<typeof ControlSettings>;

const Template: ComponentStory<typeof ControlSettings> = (args) => <ControlSettings {...args} />;

export const Default = Template.bind({});