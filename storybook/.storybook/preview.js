import { defineCustomElements } from '@zedd/core/loader';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'zedd-default',
    list: [],
  },
  options: {
    storySort: {
      order: ['Docs', 'Components'],
    },
  },
};
