import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-form-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLabelComponent {
  /**
   * Label for input
   */
  @Input() isFormArray? = false;
  @Input() label: string | undefined = '';
  /**
   * Type of Input checkbox text
   */
  @Input() typeInput? = 'text';

  /**
   * Label for input
   */
  @Input() labelInput? = 'Complete label';
}
