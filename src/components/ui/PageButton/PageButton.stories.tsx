import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import PageButton, { Props } from './index';

export default {
  title: 'PageButton',
  component: PageButton,
  argTypes: {
    ...commonArgsType
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof PageButton>;

const PageButtonTemplate: ComponentStory<typeof PageButton> = (args) => {
  return (
    <div>
      <PageButton {...args}>{<span>1</span>}</PageButton>
    </div>
  );
};

export const Default = PageButtonTemplate.bind({});
const defaultArgs: Props = {
  current: false,
  onClick: () => ({})
};
Default.args = defaultArgs;
