import { margins } from './marginClasses';

export const commonArgsType = {
  'data-test': { control: 'text' },
  ma: {
    control: 'select',
    options: margins
  },
  mt: {
    control: 'select',
    options: margins
  },
  ml: {
    control: 'select',
    options: margins
  },
  mb: {
    control: 'select',
    options: margins
  },
  mr: {
    control: 'select',
    options: margins
  }
};

export const commonParameters = {
  parameters: {
    previewTabs: {
      canvas: { hidden: true }
    },
    viewMode: 'docs'
  }
};
