import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  DataFormBuilder,
  GenerateFormBuilderService,
} from 'ngx-ftx-forms';
import { of, tap } from 'rxjs';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  FirstUpperCasePipe,
  GenerativeService,
  SivanInputComponent,
} from 'ngx-ftx-shared';
import { RetrievePlaceholderPipe } from './util/pipes/retrieve-placeholder.pipe';
import { ValidatorConfigPipe } from './util/pipes/validator-config.pipe';

@Component({
  selector: 'coagulu-ftx-ftm',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    SivanInputComponent,
    FirstUpperCasePipe,
    RetrievePlaceholderPipe,
    ValidatorConfigPipe,
  ],
  templateUrl: './ftx-ftm.component.html',
  styleUrls: ['./ftx-ftm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FtxFtmComponent {
  @Input({ required: true }) dataSource!: DataFormBuilder;
  generateFormBuilderService = inject(GenerateFormBuilderService);
  generativeService = inject(GenerativeService);
  formData: FormGroup | FormControl | FormArray | any; //eslint-disable-line
  generateFormTrigger = of('t').pipe(
    tap(
      (v) =>
        (this.formData = this.generateFormBuilderService.buildFormFromJson(
          this.dataSource
        ))
    )
  );

  public submit() {
    console.log(this.formData?.getRawValue());

    this.formData;
  }
}
