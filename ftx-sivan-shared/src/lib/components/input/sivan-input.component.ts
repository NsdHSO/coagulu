import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { OutlineDirective, ScrollHintDirective } from '../../directive';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { FtxTooltipComponent } from 'ngx-fts-tooltip';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { GenerativeService } from '../../service';

@Component({
  selector: 'sivan-input',
  standalone: true,
  imports: [
    CommonModule,
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
      inputs: ['control:mainControl', 'placeholder'],
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SivanInputComponent {
  @Input({ required: true }) hintTop!: string;
  @Input() mainControl?: NgControl | any | unknown; //eslint-disable-line
  @Input() currencyControl?: NgControl | any | unknown; //eslint-disable-line
  @Input({ required: true }) placeholder!: string;
  @Input() colorMatIcon!: string;
  //eslint-disable-next-line
  selectedOption: { icon: string; placeholder: string } | any;
  optionis: any = []; //eslint-disable-line
  isInputClick = false;
  isInputCurrencyClick = false;
  generative = inject(GenerativeService);
  changeDetectorRef = inject(ChangeDetectorRef);

  @Input() set choices(options: unknown[]) {
    this.optionis = options;
  }

  showOption(inputElement?: HTMLInputElement) {
    this.isInputClick = !this.isInputClick;
    if (inputElement) {
      inputElement.focus();
      this.changeDetectorRef.detectChanges();
    }
  }

  onBlur<T>(choice: T, index: number) {
    this.isInputClick = false;
    //eslint-disable-next-line
    this.selectedOption = index;
    this.mainControl.setValue(choice);
  }

  selectCountry<
    T extends {
      icon: string;
      placeholder: string;
    }
  >(option: T) {
    this.isInputCurrencyClick = false;
    this.currencyControl.setValue(option);
    this.selectedOption = option;
  }

  currencyControll() {
    this.isInputCurrencyClick = !this.isInputCurrencyClick;
  }
}
