import {ComponentStory, ComponentMeta} from '@storybook/react';

import Navigation from './index';

export default {
    title: 'Design System/Organisms/Navigation',
    component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const Default = Template.bind({});