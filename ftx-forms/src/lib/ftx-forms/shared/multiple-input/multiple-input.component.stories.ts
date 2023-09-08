import { Meta } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'InputComponent',
  component: InputComponent,
} as Meta<InputComponent>;

export const Primary = {
  render: (args: InputComponent) => ({
    props: args,
  }),
  args: {
    typeInput: 'text',
    placeholderInput: '',
    labelInput: 'Complete label',
    toggleData: [{ value: false, description: 'default' }],
  },
};
