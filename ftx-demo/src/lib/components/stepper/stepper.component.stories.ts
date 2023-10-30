import { Meta } from '@storybook/angular';
import { StepperComponent } from './stepper.component';

export default {
  title: 'StepperComponent',
  component: StepperComponent,
} as Meta<StepperComponent>;

export const Primary = {
  render: (args: StepperComponent) => ({
    props: args,
  }),
  args: {},
};
