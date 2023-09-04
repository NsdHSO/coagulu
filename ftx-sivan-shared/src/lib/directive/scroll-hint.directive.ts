import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import {
  distinctUntilChanged,
  fromEvent,
  map,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';

/**
 * Directive to create a scroll hint effect with opacity on a scrollable element.
 */
@Directive({
  selector: '[sivanScrollHint]',
  standalone: true,
})
export class ScrollHintDirective implements OnDestroy {
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
  private pseudoElement: HTMLElement | null = null;
  /**
   * {Subject} renderer - Renderer to manipulate the DOM.
   * @private
   */
  private destroyed$ = new Subject();

  constructor() {
    this.pseudoElement = this.renderer2.createElement('div');
    this.renderer2.addClass(this.pseudoElement, 'scroll-opacity-pseudo');
    this.renderer2.appendChild(
      this.elementRef.nativeElement,
      this.pseudoElement
    );
  }

  /**
   * Event handler for the 'scroll' event.
   *
   * @param {Event} $event - The scroll event.
   */
  @HostListener('scroll', ['$event']) //eslint-disable-next-line
  onWindow($event: any) {
    fromEvent<Event>($event.target, 'scroll')
      .pipe(
        map((event: Event) => event.target as HTMLElement),
        distinctUntilChanged(),
        tap((contentElement) => {
          const contentScrollHeight =
            contentElement.scrollHeight - contentElement.offsetHeight;
          const currentScroll = contentElement.scrollTop / contentScrollHeight;
          // Calculate the opacity value for the bottom 40px
          let opacity = currentScroll;
          opacity = +Math.min(1, Math.max(0, opacity)).toFixed(2);
          // Calculate the height of the scrollable content
          const contentHeight = contentElement.scrollHeight;
          // Calculate the height of the bottom 40px
          const bottomHeight = 40;
          // Calculate the top position for the pseudo-element
          const topPosition = contentHeight - bottomHeight;
          // Apply styles to the pseudo-element
          this.renderer2.setStyle(this.pseudoElement, 'position', 'absolute');
          this.renderer2.setStyle(this.pseudoElement, 'z-index', '101');
          this.renderer2.setStyle(
            this.pseudoElement,
            'top',
            `calc(100vh - 95px - 0.65rem)`
          );
          this.renderer2.setStyle(this.pseudoElement, 'left', '0');
          this.renderer2.setStyle(this.pseudoElement, 'width', '100%');
          this.renderer2.setStyle(
            this.pseudoElement,
            'height',
            `${bottomHeight}px`
          );
          this.renderer2.setStyle(
            this.pseudoElement,
            'background',
            `linear-gradient(rgb(0 0 0 / 0%), rgb(100 116 139/var(--tw-bg-opacity)))`
          );
          this.renderer2.setStyle(
            this.pseudoElement,
            'opacity',
            `${1 - opacity}`
          );
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
