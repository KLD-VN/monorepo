import {ComponentStory, ComponentMeta} from '@storybook/react';

import Flex from './index';

export default {
    title: 'Design System/Atoms/Flex',
    component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Default = Template.bind({});

Default.args = {
    /* the args you need here will depend on your component */
};