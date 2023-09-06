import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { OutlineDirective } from '../../directive/outline.directive';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'sivan-input-dropdown',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, MatIconModule],
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
  hostDirectives: [
    { directive: OutlineDirective, inputs: ['placeholder', 'control'] },
  ],
})
export class InputDropdownComponent {
  @Input({ required: true })
  placeholder!: string;
  @Input({ required: true })
  rendererTemplate!: TemplateRef<unknown>;
  @Input()
  control?: NgControl | any | unknown; //eslint-disable-line
}
