import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'sivan-button-component',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatRippleModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Output() marian = new EventEmitter();
  @Input() public disable: boolean | undefined | null = true;
  @Input() public roundedFull = '';
  @Input() public typeButton = '';
  @Input() public class = '';

  get allClass() {
    return this.class + ' ' + this.roundedFull;
  }
}
