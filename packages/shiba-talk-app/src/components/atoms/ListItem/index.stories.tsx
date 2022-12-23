import {ComponentStory, ComponentMeta } from '@storybook/react';

import ListItem from '../ListItem';

export default {
   title: 'Design System/Atoms/ListItem',
   component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});

Default.args = {
   children: 'item1',
};