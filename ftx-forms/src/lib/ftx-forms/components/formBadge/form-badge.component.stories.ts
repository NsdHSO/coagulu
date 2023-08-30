import { Meta } from '@storybook/angular';
import { FormBadgeComponent } from './form-badge.component';

export default {
  title: 'FormBadgeComponent',
  component: FormBadgeComponent,
} as Meta<FormBadgeComponent>;

export const Primary = {
  render: (args: FormBadgeComponent) => ({
    props: args,
  }),
  args: {},
};
