import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
} from '@storybook/angular';
import { FtxTooltipComponent } from './ftx-tooltip.component';
import { RenderYouDirective } from './directive';

export default {
  title: 'FtxTooltipComponent',
  component: FtxTooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [RenderYouDirective],
    }),
    componentWrapperDecorator(
      () => `
    <div class="mt-52">
      <div  renderYou [element]="render">
      <div>
      Lorem 
      </div>
    </div>
<ng-template #render> Lorem </ng-template>
    `
    ),
  ],
} as Meta<FtxTooltipComponent>;

export const Primary = {
  render: (args: FtxTooltipComponent) => ({
    props: args,
  }),
  args: {},
};
