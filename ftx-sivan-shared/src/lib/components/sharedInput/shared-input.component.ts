import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgControl } from '@angular/forms';
import { TypeInput } from 'ngx-ftx-forms';
import { SivanInputComponent } from 'ngx-ftx-shared';

@Component({
  selector: 'sivan-shared-input',
  standalone: true,
  imports: [CommonModule, SivanInputComponent],
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss'],
})
export class SharedInputComponent {
  @Input({ required: true }) public control!: NgControl;
  @Input({ required: true }) placeholder!: string;
  @Input({ required: true }) hintTop!: string;
  @Input() typeInput: TypeInput = 'text';
}
