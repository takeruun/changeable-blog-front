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

const SearchFieldTemplate: ComponentStory<typeof SearchField> = (args) => {
  const [value, setValue] = React.useState(args.value ?? '');
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  return (
    <div style={{ width: '170px' }}>
      <SearchField {...args} value={value ?? args.value} onChange={onChange} />
    </div>
  );
};

export const Default = SearchFieldTemplate.bind({});
const defaultArgs: Props = {
  value: '',
  placeholder: '検索'
};
Default.args = defaultArgs;
