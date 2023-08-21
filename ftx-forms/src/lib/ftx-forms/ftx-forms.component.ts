import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataFormBuilder } from './interfaces';
import { FormControlLabelComponent } from './components';
import { ButtonComponent, PapControlDirective } from './shared';
import { GenerativeService } from './service';

@Component({
  selector: 'ngx-ftx-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlLabelComponent,
    ButtonComponent,
  ],
  hostDirectives: [PapControlDirective],
  templateUrl: './ftx-forms.component.html',
  styleUrls: ['./ftx-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FtxFormsComponent {
  @Input() dynamicForm: FormGroup = {} as FormGroup;
  @Output() submitEvent = new EventEmitter();
  controlMapping: any = []; // eslint-disable-line
  generateFormBuilderService = inject(GenerativeService);

  private _jsonData: DataFormBuilder = {} as DataFormBuilder;

  get jsonData(): DataFormBuilder {
    return this._jsonData;
  }

  @Input() set jsonData(jsonData) {
    this._jsonData = jsonData;
    if (jsonData.values) {
      for (const item of jsonData.values) {
        if (item && item.label) {
          this.controlMapping[item.label] = item;
        }
      }
    }
  }

  public ivan(controls: boolean | any) {
    console.log(controls);
  }
}
