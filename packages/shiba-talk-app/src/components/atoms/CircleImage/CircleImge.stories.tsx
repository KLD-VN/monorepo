import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircleImage from '.';

export default {
   title: 'Design System/Atoms/CircleImage',
   component: CircleImage,
} as ComponentMeta<typeof CircleImage>;

const href = "https://i.pinimg.com/736x/4f/7e/f5/4f7ef5f81ca49f259e9cbfd3852907ef.jpg";

const Template: ComponentStory<typeof CircleImage> = (args) => <CircleImage {...args} />;

export const Default = Template.bind({});

Default.args = {
   width: '28px',
   height: '28px',
   href: href,
};