import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  ButtonComponent,
  DataFormBuilder,
  GenerateFormBuilderService,
} from 'ngx-ftx-forms';
import {
  FirstUpperCasePipe,
  GenerativeService,
  SharedInputComponent,
  SivanInputComponent,
} from 'ngx-ftx-shared';
import { of, tap } from 'rxjs';
import { RetrievePlaceholderPipe } from './util/pipes/retrieve-placeholder.pipe';
import { ValidatorConfigPipe } from './util/pipes/validator-config.pipe';
import { GetTypePipe } from './util/pipes/get-type.pipe';
import { GetValueToShowPipe } from './util/pipes';

@Component({
  selector: 'coagulu-ftx-ftm',
  standalone: true,
  templateUrl: './ftx-ftm.component.html',
  styleUrls: ['./ftx-ftm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          height: '0',
          opacity: 0,
          zIndex: 105, // Set the initial z-index value
        })
      ),
      transition(':enter', [
        style({
          height: '0',
          opacity: 0,
          zIndex: 105, // Set the initial z-index value
        }),
        animate(
          '200ms ease-out',
          style({
            height: '*',
            opacity: 1,
            zIndex: 105, // Ensure the z-index remains the same
          })
        ),
      ]),
      transition(':leave', [
        style({
          height: '*',
          opacity: 1,
        }),
        animate(
          '200ms ease-in',
          style({
            height: '0',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    FirstUpperCasePipe,
    RetrievePlaceholderPipe,
    ValidatorConfigPipe,
    SivanInputComponent,
    SharedInputComponent,
    GetTypePipe,
    GetValueToShowPipe,
  ],
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

  public name(param: any) {
    console.log(param);
  }
}
