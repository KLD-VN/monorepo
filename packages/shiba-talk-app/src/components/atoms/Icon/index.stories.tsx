import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '.';
import { SearchSVG } from '@/components/atoms/svg';

export default {
   // Opt-out of inline rendering
   title: 'Design System/Atoms/Icon',
   component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}>
   <SearchSVG />
</Icon>;

export const Default = Template.bind({});

Default.args = {
   color: 'primary',
   size: 'md',
   title: 'icon',
   hidden: false,
   style: {},
};
