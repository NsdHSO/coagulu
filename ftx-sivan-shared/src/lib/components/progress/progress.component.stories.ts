import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { ProgressComponent } from './progress.component';
import { of } from 'rxjs';

export default {
  title: 'ProgressComponent',
  component: ProgressComponent,
  decorators: [
    moduleMetadata({
      imports: [ProgressComponent],
      providers: [provideAnimations()],
    }),
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)],
    }),
  ],
  tags: ['autodocs'],
} as Meta<ProgressComponent>;
const Template: Story<ProgressComponent> = (args: ProgressComponent) => ({
  props: args,
});
export const WorkBack = Template.bind({});
WorkBack.args = {};
