// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';
import CircleImage from "@/components/atoms/Image/CircleImage/Index";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const href =
  "https://i.pinimg.com/736x/4f/7e/f5/4f7ef5f81ca49f259e9cbfd3852907ef.jpg";

const iconPersonal = <CircleImage width="28px" height="28px" href={href} />

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'default',
  label: 'Button'
}

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  label: 'Button'
}

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  label: 'Button'
}

export const Loading = Template.bind({});

Loading.args = {
  variant: 'primary',
  label: 'Button',
  loading: true,
}

export const Circle = Template.bind({});

Circle.args = {
  variant: 'circle',
  label: 'Button',
  iconOnly: true,
  icon: iconPersonal
}

export const Disable = Template.bind({});

Disable.args = {
  variant: 'primary',
  label: 'Button',
  disabled: true
}