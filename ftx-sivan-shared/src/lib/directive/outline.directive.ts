import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  startWith,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[sivanOutline]',
  standalone: true,
})
export class OutlineDirective implements OnInit, OnDestroy, AfterViewInit {
  /**
   * {ElementRef} elementRef - Reference to the host element.
   * @private
   */
  private readonly elementRef = inject(ElementRef);
  /**
   * {Renderer2} renderer - Renderer to manipulate the DOM.
   * @private
   */
  private readonly renderer2 = inject(Renderer2);
  @ViewChild('peerDiv', { static: false }) inputContainer: ElementRef | any;
  @Input({ required: true }) hintTop!: string;
  @Input({ required: true }) control!: NgControl;
  @Input({ required: true }) placeholder!: string;
  /**
   * {Subject} The destroy Subject
   * @private
   */
  private destroy$ = new Subject();
  private element: any;

  ngOnInit(): void {
    const peerDiv =
      this.elementRef.nativeElement.querySelector('.peer-container');
    this.element = this.renderer2.createElement('span');
    fromEvent(this.element, 'click')
      .pipe(
        tap(() => peerDiv.childNodes[0].focus()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngAfterViewInit() {
    const peerDiv =
      this.elementRef.nativeElement.querySelector('.peer-container');
    this.renderer2.addClass(peerDiv, 'relative');
    this.control.valueChanges
      ?.pipe(
        distinctUntilChanged(),
        debounceTime(200),
        startWith('sda'),
        tap((inputValue) => {
          if (inputValue.length > 1) {
            this.renderer2.appendChild(peerDiv, this.element);
          }
          this.addClassForHint(this.element);
          if (this.element.innerText !== this.placeholder) {
            this.element.innerText = this.placeholder;
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private addClassForHint(element: HTMLElement) {
    // Define an array of class names you want to add
    const classesToAdd = [
      'absolute',
      'w-max',
      'text-sm',
      'text-gray-500',
      'dark:text-gray-400',
      'duration-300',
      'transform',
      '-translate-y-6',
      'scale-75',
      'top-3.5',
      'left-1',
      'px-2',
      'mx-2',
      'rounded-tl',
      'rounded-tr',
      'bg-white',
      'peer-focus:text-blue-600',
      'peer-focus:dark:text-blue-500',
      'peer-focus:dark:text-cyan-400',
      'peer-focus:scale-75',
      'peer-focus:-translate-y-6',
      'peer-placeholder-shown:scale-100',
      'peer-placeholder-shown:translate-y-0',
      'peer-placeholder-shown:dark:text-gray-400',
      'dark:focus:top-3.5',
      'dark:bg-gray-800',
      'dark:text-white',
    ];
    classesToAdd.forEach((className) => {
      this.renderer2.addClass(element, className);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
