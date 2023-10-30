import { Meta } from '@storybook/angular';
import { ReserveBookComponent } from './reserve-book.component';

export default {
  title: 'ReserveBookComponent',
  component: ReserveBookComponent,
} as Meta<ReserveBookComponent>;

export const Primary = {
  render: (args: ReserveBookComponent) => ({
    props: args,
  }),
  args: {},
};
