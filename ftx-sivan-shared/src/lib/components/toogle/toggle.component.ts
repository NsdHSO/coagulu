import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueToggle } from 'ngx-ftx-forms';
import { BaseComponent } from '../base/base.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    if (!this.control.disabled) {
      this.controls.setValue(!this.control.value);
    }
  }
}
