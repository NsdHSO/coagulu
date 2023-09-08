import { Meta } from '@storybook/angular';
import { MultipleInputComponent } from './multiple-input.component';

export default {
  title: 'InputComponent',
  component: MultipleInputComponent,
} as Meta<MultipleInputComponent>;

export const Primary = {
  render: (args: MultipleInputComponent) => ({
    props: args,
  }),
  args: {
    typeInput: 'text',
    placeholderInput: '',
    labelInput: 'Complete label',
    toggleData: [{ value: false, description: 'default' }],
  },
};
