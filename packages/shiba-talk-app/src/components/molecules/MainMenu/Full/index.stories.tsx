import {ComponentStory, ComponentMeta} from '@storybook/react';

import FullMenu from '.';

export default {
    title: 'Design System/Molecules/FullMenu',
    component: FullMenu,
} as ComponentMeta<typeof FullMenu>;

const Template: ComponentStory<typeof FullMenu> = (args) => <FullMenu {...args} />;

export const Default = Template.bind({});