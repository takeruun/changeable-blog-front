import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import SectionTitle, { Props } from './index';

export default {
  title: 'SectionTitle',
  component: SectionTitle,
  argTypes: {
    ...commonArgsType
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof SectionTitle>;

const SectionTemplate: ComponentStory<typeof SectionTitle> = (args) => {
  return <SectionTitle {...args} />;
};

export const Default = SectionTemplate.bind({});
const defaultArgs: Props = {
  title: 'セクションタイトル'
};
Default.args = defaultArgs;
