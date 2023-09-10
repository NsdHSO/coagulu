import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { DataFormBuilder } from './interfaces';
import { FormControlEntityComponent } from './components';
import { ButtonComponent } from './shared';
import { GenerateFormBuilderService } from './service';
import { GenerativeService } from 'ngx-ftx-shared';

@Component({
  selector: 'ngx-ftx-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlEntityComponent,
    ButtonComponent,
  ],
  templateUrl: './ftx-forms.component.html',
  styleUrls: ['./ftx-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FtxFormsComponent {
  //eslint-disable-next-line
  @Input() dynamicForm: FormGroup | FormControl | FormArray | any = {} as any;
  @Output() submitEvent = new EventEmitter();
  generativeService = inject(GenerativeService);
  generateFormBuilderService = inject(GenerateFormBuilderService);
  controlMapping: any = []; // eslint-disable-line
  private _jsonData: DataFormBuilder = {} as DataFormBuilder;
  get jsonData(): DataFormBuilder {
    return this._jsonData;
  }

  @Input() set jsonData(jsonData) {
    this._jsonData = jsonData;
    if (jsonData.values) {
      for (const item of jsonData.values) {
        const label = item.label?.toLowerCase();
        if (item?.label) {
          this.controlMapping[label ?? ''] = item;
        }
        // Check for values or bulkValues and iterate over them
        const itemsToMap = [...(item.values ?? []), ...(item.bulkValues ?? [])];
        itemsToMap.forEach((values) => {
          if (values.bulkValues) {
            values.bulkValues.forEach((c) => {
              this.controlMapping[c.label ?? ''] = c;
            });
          }
          const label = values.label?.toLowerCase();
          this.controlMapping[label ?? ''] = values;
        });
      }
    }
  }
}
