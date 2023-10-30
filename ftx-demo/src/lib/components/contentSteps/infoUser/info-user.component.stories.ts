import { Meta } from '@storybook/angular';
import { InfoUserComponent } from './info-user.component';

export default {
  title: 'InfoUserComponent',
  component: InfoUserComponent,
} as Meta<InfoUserComponent>;

export const Primary = {
  render: (args: InfoUserComponent) => ({
    props: args,
  }),
  args: {},
};
