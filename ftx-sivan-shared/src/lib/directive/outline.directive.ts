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
    const peerDiv = this.elementRef.nativeElement.querySelector(
      '.sivan-input-container__field'
    );
    this.element = this.renderer2.createElement('span');
    fromEvent(this.element, 'click')
      .pipe(
        tap(() => peerDiv.childNodes[0].focus()),
        takeUntil(this.destroy$)
      )
      .subscribe();
    fromEvent(peerDiv.childNodes[0], 'blur')
      .pipe(
        tap((inputValue: any) => {
          if (inputValue.target.value < 1) {
            const classToRemove = ['-top-2.5', 'h-5', 'text-xs'];
            classToRemove.forEach((className) => {
              this.renderer2.removeClass(this.element, className);
            });
            const classesToAdd = [
              'absolute',
              'bg-white',
              'px-2',
              '-left-2',
              'h-9',
              'flex',
              'justify-center',
              'items-center',
              'text',
              'text-gray-500',
            ];
            classesToAdd.forEach((className) => {
              this.renderer2.addClass(this.element, className);
            });
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
    fromEvent(peerDiv.childNodes[0], 'focus')
      .pipe(
        tap((inputValue: any) => {
          if (inputValue.target.value < 1) {
            this.addClassForHint(this.element);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngAfterViewInit() {
    const peerDiv = this.elementRef.nativeElement.querySelector(
      '.sivan-input-container__center-label'
    );
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
    this.renderer2.removeClass(element, 'h-9');
    const classesToAdd = [
      'h-5',
      'absolute',
      '-top-2.5',
      'bg-white',
      'px-2',
      '-left-2',
      'duration-300',
      'transform',
      'text-xs',
      'rounded-tl',
      'rounded-tr',
      'prose-zinc',
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
