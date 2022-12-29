import {ComponentStory, ComponentMeta} from '@storybook/react';

import MainMenu from '.';

export default {
    title: 'Design System/Molecules/MainMenu',
    component: MainMenu,
} as ComponentMeta<typeof MainMenu>;

const Template: ComponentStory<typeof MainMenu> = (args) => <MainMenu {...args} />;

export const Default = Template.bind({});

