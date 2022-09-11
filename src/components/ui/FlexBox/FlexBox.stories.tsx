import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import FlexBox, { Props } from './index';
import SectionTitle from '@ui/SectionTitle';
import HelpMessageIcon from '@ui/HelpMessageIcon';

export default {
  title: 'FlexBox',
  component: FlexBox,
  argTypes: {
    ...commonArgsType
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof FlexBox>;

const PageButtonTemplate: ComponentStory<typeof FlexBox> = (args) => {
  return (
    <FlexBox {...args}>
      <SectionTitle title='人気記事' />
      <HelpMessageIcon message='人気記事一覧' />
    </FlexBox>
  );
};

export const Default = PageButtonTemplate.bind({});
const defaultArgs: Props = {
  children: <></>,
  alignItems: 'flex-end'
};
Default.args = defaultArgs;
