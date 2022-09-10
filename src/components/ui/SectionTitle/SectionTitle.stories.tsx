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

const PageButtonTemplate: ComponentStory<typeof SectionTitle> = (args) => {
  return (
    <div>
      <SectionTitle {...args} />
    </div>
  );
};

export const Default = PageButtonTemplate.bind({});
const defaultArgs: Props = {
  title: 'セクションタイトル'
};
Default.args = defaultArgs;
