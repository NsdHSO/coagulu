import { Meta } from '@storybook/angular';
import { FtxTooltipComponent } from './ftx-tooltip.component';

export default {
  title: 'FtxTooltipComponent',
  component: FtxTooltipComponent,
} as Meta<FtxTooltipComponent>;

export const Primary = {
  render: (args: FtxTooltipComponent) => ({
    props: args,
  }),
  args: {},
};
