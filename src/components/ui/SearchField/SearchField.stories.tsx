import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import SearchField, { Props } from './index';

export default {
  title: 'SearchField',
  component: SearchField,
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    ...commonArgsType
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof SearchField>;

const BlogItemTemplate: ComponentStory<typeof SearchField> = (args) => {
  const [value, setValue] = React.useState(args.value ?? '');
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  return (
    <SearchField {...args} value={value ?? args.value} onChange={onChange} />
  );
};

export const Default = BlogItemTemplate.bind({});
const defaultArgs: Props = {
  value: '',
  placeholder: '検索'
};
Default.args = defaultArgs;