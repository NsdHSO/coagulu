import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SivanInputComponent, ToggleComponent } from 'ngx-ftx-shared';
import { BaseComponent } from '../base/base.component';
import { ValueToggle } from 'ngx-ftx-forms';

@Component({
  selector: 'sivan-shared-input',
  standalone: true,
  imports: [CommonModule, SivanInputComponent, ToggleComponent],
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss'],
})
export class SharedInputComponent extends BaseComponent {
  @Input({ required: false })
  valuesToggled?: ValueToggle[] | null;
}