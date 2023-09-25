import { ToggleComponent } from './toggle.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { IconCoreModule } from 'ngx-liburg-icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'ToggleInput',
  component: ToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatIconModule,
        CommonModule,
        IconCoreModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }),
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)],
    }),
  ],
  tags: ['autodocs'],
} as Meta<ToggleComponent>;
const Template: Story<ToggleComponent> = (args: ToggleComponent) => ({
  props: args,
});
export const WorkBack = Template.bind({});
