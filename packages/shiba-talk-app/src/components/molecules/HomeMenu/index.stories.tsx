import {ComponentStory, ComponentMeta} from '@storybook/react';

import HomeMenu from '.';

export default {
    title: 'Design System/Molecules/HomeMenu',
    component: HomeMenu,
} as ComponentMeta<typeof HomeMenu>;

const Template: ComponentStory<typeof HomeMenu> = (args) => <HomeMenu {...args} />;

export const Default = Template.bind({});

