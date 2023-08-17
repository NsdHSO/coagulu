import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperService } from '../../services/stepper.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PatchFormGroupValueDirective } from '../../../directive/patch-form-group-value.directive';
import { Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { ButtonComponent } from '../../../../../ftx-forms/src/lib/ftx-forms/shared/button/button.component';
import { InputComponent } from '../../../../../ftx-forms/src/lib/ftx-forms/shared/input/input.component';
import { FormControlLabelComponent } from 'ngx-ftx-forms';

@Component({
  selector: 'info-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatchFormGroupValueDirective,
    ButtonComponent,
    InputComponent,
    FormControlLabelComponent,
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
