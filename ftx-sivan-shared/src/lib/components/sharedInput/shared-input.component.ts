import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SivanInputComponent, ToggleComponent } from 'ngx-ftx-shared';
import { BaseComponent } from '../base/base.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'sivan-shared-input',
  standalone: true,
  imports: [CommonModule, SivanInputComponent, ToggleComponent],
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss'],
})
export class SharedInputComponent extends BaseComponent {}
