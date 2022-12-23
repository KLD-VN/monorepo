import {ComponentStory, ComponentMeta } from '@storybook/react';

import List from '.';
import ListItem from '../ListItem';

export default {
   title: 'Design System/Atoms/List',
   component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} >
   <ListItem>item 1</ListItem>
   <ListItem>item 2</ListItem>
   <ListItem>item 3</ListItem>
</List>;

export const Default = Template.bind({});