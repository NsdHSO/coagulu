import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { OutlineDirective } from '../../directive/outline.directive';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { FtxTooltipComponent } from 'ngx-fts-tooltip';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { GenerativeService } from './../../../../../ftx-forms/src';
import { ScrollHintDirective } from '../../directive';

@Component({
  selector: 'sivan-input',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    FtxTooltipComponent,
    ScrollHintDirective,
  ],
  templateUrl: './sivan-input.component.html',
  styleUrls: ['./sivan-input.component.scss'],
  hostDirectives: [
    {
      directive: OutlineDirective,
      inputs: ['hintTop', 'control:mainControl', 'placeholder'],
    },
  ],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          height: '0',
          opacity: 0,
          zIndex: 105, // Set the initial z-index value
        })
      ),
      transition(':enter', [
        style({
          height: '0',
          opacity: 0,
          zIndex: 105, // Set the initial z-index value
        }),
        animate(
          '200ms ease-out',
          style({
            height: '*',
            opacity: 1,
            zIndex: 105, // Ensure the z-index remains the same
          })
        ),
      ]),
      transition(':leave', [
        style({
          height: '*',
          opacity: 1,
        }),
        animate(
          '200ms ease-in',
          style({
            height: '0',
            opacity: 0,
          })
        ),
      ]),
    ]),
    trigger('rotateIcon', [
      state('up', style({ transform: 'rotate(180deg) scale(1.2)' })),
      state('down', style({ transform: 'rotate(0deg)' })),
      transition('up <=> down', animate('300ms ease-out')),
    ]),
  ],
})
export class SivanInputComponent<T> {
  @Input({ required: true }) hintTop!: string;
  @Input() mainControl?: NgControl | any | unknown; //eslint-disable-line
  @Input() currencyControl?: NgControl | any | unknown; //eslint-disable-line
  @Input({ required: true }) placeholder!: string;
  optionis: any = [];
  @Input() colorMatIcon!: string;
  isInputClick = false;
  isInputCurrencyClick = false;
  generative = inject(GenerativeService);

  @Input() set choices(options: unknown[]) {
    this.optionis = options;
  }

  showOption(inputElement?: HTMLInputElement) {
    this.isInputClick = !this.isInputClick;
    if (inputElement && this.isInputClick) {
      inputElement.focus();
    }
  }

  onBlur<T>(choice: T) {
    this.isInputClick = false;
    this.mainControl.setValue(choice);
  }

  selectCountry<T extends { icon: string; placeholder: string }>(option: T) {
    this.isInputCurrencyClick = false;
    this.currencyControl.setValue(option);
  }

  currencyForm() {
    this.isInputCurrencyClick = !this.isInputCurrencyClick;
  }
}
