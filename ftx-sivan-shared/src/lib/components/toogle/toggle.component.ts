import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { MatIconModule } from '@angular/material/icon';
import {
  AbstractControl,
  FormControl,
  FormControlName,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ValueToggle } from 'ngx-ftx-forms';

@Component({
  selector: 'sivan-toggle',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent extends BaseComponent {
  @Input({ required: false }) valuesToggled?: ValueToggle[] | null;
  public mutateToggle() {
    this.controls.setValue(!this.control.value);
  }
}
