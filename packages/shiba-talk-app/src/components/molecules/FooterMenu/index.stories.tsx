import {ComponentStory, ComponentMeta} from '@storybook/react';

import FooterMenu from '.';

export default {
    title: 'Design System/Molecules/FooterMenu',
    component: FooterMenu,
} as ComponentMeta<typeof FooterMenu>;

const Template: ComponentStory<typeof FooterMenu> = (args) => <FooterMenu {...args} />;

export const Default = Template.bind({});

