import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
type PositionItems = 'left' | 'right' | 'up' | 'down';
type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'sivan-bool',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatRippleModule],
  templateUrl: './bool.component.html',
  styleUrls: ['./bool.component.scss'],
})
export class BoolComponent extends BaseComponent {
  /**
   * The position label for the checkbox.
   *
   * This input determines the positioning of the component.
   * Possible values are 'right', 'left', 'up', and 'down'.
   * Default value is 'right'.
   *
   * @type {PositionItems}
   */
  @Input()
  positionLabel: PositionItems = 'right';

  /**
   * The color scheme for the component.
   *
   * This input controls the color styling of the component.
   * Possible values are 'primary', 'secondary', 'success', 'info', 'warning', and 'danger'.
   * Default value is 'primary'.
   *
   * @type {Color}
   */
  @Input()
  color: Color = 'primary';
}
