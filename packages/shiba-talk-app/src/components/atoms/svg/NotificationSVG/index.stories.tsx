import { ComponentStory, ComponentMeta } from '@storybook/react';

import NotificationSVG from '.';

export default {
   title: 'Design System/Atoms/svg/NotificationSVG',
   component: NotificationSVG,
} as ComponentMeta<typeof NotificationSVG>;

const Template: ComponentStory<typeof NotificationSVG> = (args) => <NotificationSVG {...args} />;

export const Default = Template.bind({});
