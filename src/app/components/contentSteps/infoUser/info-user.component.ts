import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperService } from '../../services/stepper.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { PatchFormGroupValueDirective } from '../../../directive/patch-form-group-value.directive';
import { Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'info-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PatchFormGroupValueDirective],
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent {
  private _stepperService = inject(StepperService);
  vm$: Observable<Dictionary<any>> = this._stepperService.formValues$;
  form = this._stepperService.stepperForm;
}
