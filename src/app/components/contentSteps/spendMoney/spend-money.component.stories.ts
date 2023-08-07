import { Meta } from '@storybook/angular';
import { SpendMoneyComponent } from './spend-money.component';

export default {
  title: 'SpendMoneyComponent',
  component: SpendMoneyComponent,
} as Meta<SpendMoneyComponent>;

export const Primary = {
  render: (args: SpendMoneyComponent) => ({
    props: args,
  }),
  args: {},
};
