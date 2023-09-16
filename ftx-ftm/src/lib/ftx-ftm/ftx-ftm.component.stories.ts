import { Meta } from '@storybook/angular';
import { FtxFtmComponent } from './ftx-ftm.component';

export default {
  title: 'FtxFtmComponent',
  component: FtxFtmComponent,
} as Meta<FtxFtmComponent>;

export const Primary = {
  render: (args: FtxFtmComponent) => ({
    props: args,
  }),
  args: {},
};
