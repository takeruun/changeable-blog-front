import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import HelpMessageIcon, { Props } from './index';

export default {
  title: 'HelpMessageIcon',
  component: HelpMessageIcon,
  argTypes: {
    ...commonArgsType,
    message: { control: 'text' }
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof HelpMessageIcon>;

const HelpMessageIconTemplate: ComponentStory<typeof HelpMessageIcon> = (
  args
) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <HelpMessageIcon {...args} />
    </div>
  );
};

export const Default = HelpMessageIconTemplate.bind({});
const defaultArgs: Props = {
  message: 'メッセージ'
};
Default.args = defaultArgs;
