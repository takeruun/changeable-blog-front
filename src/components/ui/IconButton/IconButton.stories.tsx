import React from 'react';
import { AiOutlineUsb } from 'react-icons/ai';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import IconButton, { Props } from './index';

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    ...commonArgsType
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof IconButton>;

const IconButtonTemplate: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};

export const Default = IconButtonTemplate.bind({});
const defaultArgs: Props = {
  IconComponent: AiOutlineUsb
};
Default.args = defaultArgs;
