import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperService } from '../../services/stepper.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import {
  ButtonComponent,
  FormControlEntityComponent,
  MultipleInputComponent,
  PatchFormGroupValueDirective,
} from 'ngx-ftx-forms';
import { FtxFtmComponent } from 'ngx-ftm';

@Component({
  selector: 'info-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatchFormGroupValueDirective,
    ButtonComponent,
    MultipleInputComponent,
    FormControlEntityComponent,
    FtxFtmComponent,
  ],
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent {
  private _stepperService = inject(StepperService);
  vm$: Observable<Dictionary<any>> = this._stepperService.formValues$; //eslint-disable-line
  form = this._stepperService.stepperForm;

  public addRole() {
    this._stepperService.addRoleOfMember();
  }
}
