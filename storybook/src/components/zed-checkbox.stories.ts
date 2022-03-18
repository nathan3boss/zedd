// Dependencies
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';

export default {
  title: 'Components/checkbox',
  parameters: {
    status: {
      type: 'stable',
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story = () => html`
  <zed-checkbox>Hello</zed-checkbox>
`;

export const CheckBox: Story = Template.bind({});

CheckBox.storyName = 'default';

CheckBox.args = {
  checked: false,
  size: 'small',
  icon: 'check',
};
