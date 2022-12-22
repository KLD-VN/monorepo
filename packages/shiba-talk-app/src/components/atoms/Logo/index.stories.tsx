import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from '.';

export default {
   title: 'Design System/Atoms/Logo',
   component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const DefaultType = Template.bind({});

DefaultType.args = {
   width: '28px',
   height: '28px',
   variant: 'default'
};

export const StackedType = Template.bind({});

StackedType.args = {
   width: '28px',
   height: '28px',
   variant: 'stacked'
};

export const IconType = Template.bind({});

IconType.args = {
   width: '28px',
   height: '28px',
   variant: 'icon'
};