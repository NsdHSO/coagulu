import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { SivanInputComponent } from '../input/sivan-input.component';
import { ToggleComponent } from '../toogle/toggle.component';
import { ValueToggle } from '../../interfaces';

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
