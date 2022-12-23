import { ComponentStory, ComponentMeta } from '@storybook/react';

import MessengerSVG from '.';

export default {
   title: 'Design System/Atoms/svg/MessengerSVG',
   component: MessengerSVG,
} as ComponentMeta<typeof MessengerSVG>;

const Template: ComponentStory<typeof MessengerSVG> = (args) => <MessengerSVG {...args} />;

export const Default = Template.bind({});
