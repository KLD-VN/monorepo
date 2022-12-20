// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputField from '.';

export default {
  title: 'ATOMS/InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

const PREFIX_ID = "shiba-text-input-id"

export const Default = Template.bind({});

Default.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
}

export const AutoFocus = Template.bind({});

AutoFocus.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  autoFocus: true,
}

export const DefaultValue = Template.bind({});

DefaultValue.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  defaultValue: "Default"
}

export const Disable = Template.bind({});

Disable.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  disabled: true
}

export const HiddenLabel = Template.bind({});

HiddenLabel.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  hiddenLabel: true
}

export const NumberMinMaxValue = Template.bind({});

NumberMinMaxValue.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "number",
  max: 8,
  min: 1
}

export const OptionalLabel = Template.bind({});

OptionalLabel.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  optionalLabel: "Nhãn mác"
}

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  value: "Read only",
  readOnly: true
}

export const NumberStep = Template.bind({});

NumberStep.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "number",
  step: 2
}

export const Date = Template.bind({});

Date.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "date",
}

export const DatetimeLocal = Template.bind({});

DatetimeLocal.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "datetime-local",
}

export const Email = Template.bind({});

Email.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "email",
}

export const Password = Template.bind({});

Password.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "password",
}

export const Tel = Template.bind({});

Tel.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "tel",
}

export const Month = Template.bind({});

Month.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "month",
}

export const Time = Template.bind({});

Time.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "time",
}

export const Url = Template.bind({});

Url.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "url",
}

export const Week = Template.bind({});

Week.args = {
  id: PREFIX_ID,
  label: "Label",
  placeholder: "Placeholder",
  type: "week",
}