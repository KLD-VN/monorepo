import {ComponentStory, ComponentMeta} from '@storybook/react';

import Overlay from './index';

export default {
   title: 'Design System/atoms/Overlay',
   component: Overlay
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />;

export const Default = Template.bind({});
