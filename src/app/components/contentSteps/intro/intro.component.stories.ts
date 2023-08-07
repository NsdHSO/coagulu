import { Meta } from '@storybook/angular';
import { IntroComponent } from './intro.component';

export default {
  title: 'IntroComponent',
  component: IntroComponent,
} as Meta<IntroComponent>;

export const Primary = {
  render: (args: IntroComponent) => ({
    props: args,
  }),
  args: {},
};
