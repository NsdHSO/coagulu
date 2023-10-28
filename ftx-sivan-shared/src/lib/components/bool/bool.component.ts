import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
type PositionItems = 'left' | 'right' | 'up' | 'down';
@Component({
  selector: 'sivan-bool',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './bool.component.html',
  styleUrls: ['./bool.component.scss'],
})
export class BoolComponent extends BaseComponent {}
