import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import BlogTitle, { Props } from './index';

export default {
  title: 'BlogTitle',
  component: BlogTitle,
  argTypes: {
    ...commonArgsType
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof BlogTitle>;

const BlogTitleTemplate: ComponentStory<typeof BlogTitle> = (args) => {
  return <BlogTitle {...args} />;
};

export const Default = BlogTitleTemplate.bind({});
const defaultArgs: Props = {
  title: 'title'
};
Default.args = defaultArgs;
