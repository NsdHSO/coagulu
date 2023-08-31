import { Meta } from '@storybook/angular';
import { FormControlEntityComponent } from './form-control-entity.component';

export default {
  title: 'FormControlEntityComponent',
  component: FormControlEntityComponent,
} as Meta<FormControlEntityComponent>;

export const Primary = {
  render: (args: FormControlEntityComponent) => ({
    props: args,
  }),
  args: {
    label: '',
    typeInput: 'text',
    placeholderInput: '',
    labelInput: 'Complete label',
    isFormArray: false,
    toggleData: [{ value: false, description: 'default' }],
  },
};
