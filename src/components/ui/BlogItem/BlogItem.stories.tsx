import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlogItem, { Props } from './index';

export default {
  title: 'BlogItem',
  component: BlogItem,
  argTypes: {}
} as ComponentMeta<typeof BlogItem>;

const BlogItemComponent: ComponentStory<typeof BlogItem> = (args) => (
  <BlogItem {...args} />
);

export const Primary = BlogItemComponent.bind({});
const primaryArgs: Props = {
  id: '1',
  title: 'サンプル',
  tags: ['tag1', 'tag2'],
  date: '2022年1月1日'
};
Primary.args = primaryArgs;
