import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import TableOfContents, { Props } from './index';

export default {
  title: 'TableOfContents',
  component: TableOfContents,
  argTypes: {
    ...commonArgsType
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof TableOfContents>;

const TableOfContentsTemplate: ComponentStory<typeof TableOfContents> = (
  args
) => {
  return <TableOfContents {...args} />;
};

export const Default = TableOfContentsTemplate.bind({});
const defaultArgs: Props = {
  tableOfContents: [
    { id: '111', text: 'text', name: 'h1' },
    { id: '111', text: 'text', name: 'h2' }
  ]
};
Default.args = defaultArgs;
