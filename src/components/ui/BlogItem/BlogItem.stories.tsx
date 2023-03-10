import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import BlogItem, { Props } from './index';

export default {
  title: 'BlogItem',
  component: BlogItem,
  argTypes: {
    id: { control: 'text' },
    title: { control: 'text' },
    tags: { control: 'array' },
    imagePath: { control: 'text' },
    ...commonArgsType
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof BlogItem>;

const BlogItemComponent: ComponentStory<typeof BlogItem> = (args) => (
  <BlogItem {...args} />
);

export const Default = BlogItemComponent.bind({});
const defaultArgs: Props = {
  id: '1',
  title: 'サンプル',
  tags: ['tag1', 'tag2'],
  date: '2022年1月1日'
};
Default.args = defaultArgs;
