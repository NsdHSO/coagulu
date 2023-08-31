import { Meta } from '@storybook/angular';
import { FtxFormsComponent } from './ftx-forms.component';
import { FormGroup } from '@angular/forms';

export default {
  title: 'FtxFormsComponent',
  component: FtxFormsComponent,
} as Meta<FtxFormsComponent>;

export const Primary = {
  render: (args: FtxFormsComponent) => ({
    props: args,
  }),
  args: {
    dynamicForm: {} as FormGroup,
    jsonData: '',
  },
};
