import {ComponentStory, ComponentMeta} from '@storybook/react';

import Shortcuts from '.';

export default {
    title: 'Design System/Molecules/Shortcuts',
    component: Shortcuts,
} as ComponentMeta<typeof Shortcuts>;

const Template: ComponentStory<typeof Shortcuts> = (args) => <Shortcuts {...args} />;

export const Default = Template.bind({});