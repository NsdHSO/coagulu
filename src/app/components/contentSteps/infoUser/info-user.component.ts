import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperService } from '../../services/stepper.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PatchFormGroupValueDirective } from '../../../directive/patch-form-group-value.directive';

@Component({
  selector: 'info-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PatchFormGroupValueDirective],
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent {
  private _stepperService = inject(StepperService);
  vm$ = this._stepperService.formValues$;
  form = this._stepperService.stepperForm;
}
