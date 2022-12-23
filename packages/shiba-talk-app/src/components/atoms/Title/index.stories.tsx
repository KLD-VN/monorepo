import {ComponentStory, ComponentMeta } from '@storybook/react';

import Title from '.';

export default {
   title: 'Design System/Atoms/Title',
   component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} >Title</Title>;

export const Default = Template.bind({});

export const h1 = Template.bind({});

h1.args = {
   size: 'h1',
};

export const h2 = Template.bind({});

h2.args = {
   size: 'h2',
};

export const h3 = Template.bind({});

h3.args = {
   size: 'h3',
};

export const h4 = Template.bind({});

h4.args = {
   size: 'h4',
};

export const h5 = Template.bind({});

h5.args = {
   size: 'h5',
};

export const h6 = Template.bind({});

h6.args = {
   size: 'h6',
};


