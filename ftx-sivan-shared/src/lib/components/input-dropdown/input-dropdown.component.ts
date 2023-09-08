import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { OutlineDirective } from '../../directive/outline.directive';
import { NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'sivan-input-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
  hostDirectives: [
    {
      directive: OutlineDirective,
      inputs: ['hintTop', 'control', 'placeholder'],
    },
  ],
})
export class InputDropdownComponent {
  @Input({ required: true })
  hintTop!: string;
  @Input()
  control?: NgControl | any | unknown; //eslint-disable-line
  @Input({ required: true })
  placeholder!: string;
}
