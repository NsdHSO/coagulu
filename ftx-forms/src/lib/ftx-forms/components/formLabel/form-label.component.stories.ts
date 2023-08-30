import { Meta } from '@storybook/angular';
import { FormLabelComponent } from './form-label.component';

export default {
  title: 'FormLabelComponent',
  component: FormLabelComponent,
} as Meta<FormLabelComponent>;

export const Primary = {
  render: (args: FormLabelComponent) => ({
    props: args,
  }),
  args: {
    isFormArray: false,
    label: '',
    typeInput: 'text',
    labelInput: 'Complete label',
  },
};
