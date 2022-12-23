// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const PREFIX_ID = "shiba-input-id"

export const Default = Template.bind({});

Default.args = {
  id: PREFIX_ID,
  placeholder: "Placeholder",
}