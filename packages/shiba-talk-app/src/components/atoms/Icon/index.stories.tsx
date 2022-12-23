import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '.';
import { SearchSVG } from '@/components/atoms/svg';

export default {
   title: 'Design System/Atoms/Icon',
   component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}>
   <SearchSVG />
</Icon>;

export const Default = Template.bind({});

Default.args = {
   color: 'primary',
   size: 'md',
   title: 'icon',
   hidden: false,
   style: {},
};

export const Small = Template.bind({});

Small.args = {
   color: 'primary',
   size: 'sm',
   title: 'icon',
   hidden: false,
   style: {},
};

export const Medium = Template.bind({});

Medium.args = {
   color: 'primary',
   size: 'md',
   title: 'icon',
   hidden: false,
   style: {},
};

export const Large = Template.bind({});

Large.args = {
   color: 'primary',
   size: 'lg',
   title: 'icon',
   hidden: false,
   style: {},
};