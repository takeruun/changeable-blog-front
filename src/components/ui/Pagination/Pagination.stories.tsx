import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { commonArgsType, commonParameters } from '../utilties/commonStorybook';
import Pagination, { Props } from './index';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    ...commonArgsType
  },
  parameters: {
    ...commonParameters.parameters
  }
} as ComponentMeta<typeof Pagination>;

const PaginationTemplate: ComponentStory<typeof Pagination> = (args) => {
  return (
    <div>
      <Pagination {...args} />
    </div>
  );
};

export const Default = PaginationTemplate.bind({});
const defaultArgs: Props = {
  currentPage: 1,
  totalPageNumber: 4,
  onPageChange: () => ({})
};
Default.args = defaultArgs;
