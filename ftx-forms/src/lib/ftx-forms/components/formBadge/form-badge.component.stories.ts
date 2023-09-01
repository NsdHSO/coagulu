import {
  applicationConfig,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { FormBadgeComponent } from './form-badge.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IconCoreModule } from 'ngx-liburg-icon';
import { GenerativeService } from '../../ftx-forms.component';

export default {
  title: 'FormBadgeComponent',
  component: FormBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, CommonModule, IconCoreModule],
      providers: [
        { provide: GenerativeService, useValue: { trackBy: () => 2 } },
        provideAnimations(),
      ],
    }),
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)],
    }),
  ],
} as Meta<FormBadgeComponent>;

const Template: Story<FormBadgeComponent> = (args: FormBadgeComponent) => ({
  props: args,
});
export const WorkBack = Template.bind({});
WorkBack.args = {
  typeBadge: 'success', // Set the default value to 'success'
  actionBadge: [
    { side: 'middle', action: () => console.log('TEST'), text: 'sss' },
  ],
};
WorkBack.argTypes = {
  typeBadge: {
    control: 'select',
    options: ['success', 'open', 'error', 'warning', 'done', 'pfm'],
    defaultValue: 'success',
  },
};

export const Success = Template.bind({});
Success.args = {
  typeBadge: 'success',
  actionBadge: [
    { side: 'middle', action: () => console.log('TEST'), text: 'sss' },
  ],
};

export const Open = Template.bind({});
Open.args = {
  typeBadge: 'open',
  actionBadge: [
    { side: 'middle', action: () => console.log('TEST'), text: 'sss' },
  ],
};
