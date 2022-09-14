import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import HighlightBody, { Props } from './index';

export default {
  title: 'HighlightBody',
  component: HighlightBody,
  argTypes: {
    ...commonArgsType
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof HighlightBody>;

const HighlightBodyTemplate: ComponentStory<typeof HighlightBody> = (args) => {
  return <HighlightBody {...args} />;
};

export const Default = HighlightBodyTemplate.bind({});
const defaultArgs: Props = {
  body: '<h1>h1 たいとる</h1><h2>h2 たいとる</h2>'
};
Default.args = defaultArgs;
