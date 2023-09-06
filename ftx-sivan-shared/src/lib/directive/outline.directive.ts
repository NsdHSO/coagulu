import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { fromEvent, map, of, tap } from 'rxjs';

@Directive({
  selector: '[sivanOutline]',
  standalone: true,
})
export class OutlineDirective implements OnInit {
  @Input({ required: true })
  placeholder!: string;
  @Input({ required: true })
  control!: string;
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

  ngOnInit(): void {
    const div = this.renderer2.createElement('span');
    let isDivCreated = false; // Flag to track if the div is already created

    this.renderer2.addClass(this.elementRef.nativeElement, 'relative');

    fromEvent(this.elementRef.nativeElement.childNodes[0], 'input')
      .pipe(
        map((event: any) => (event.target as HTMLInputElement).value),
        tap((inputValue) => {
          if (inputValue === '0' && isDivCreated) {
            // If the value is '0' and the div is already created, remove the div
            this.renderer2.removeChild(this.elementRef.nativeElement, div);
            isDivCreated = false; // Set the flag to false to indicate the div is removed
          } else if (inputValue !== '0' && !isDivCreated) {
            // If the value is not '0' and the div is not created, create the div
            div.innerHTML = 'ivan';
            this.renderer2.appendChild(this.elementRef.nativeElement, div);
            this.renderer2.addClass(div, 'prose');
            this.renderer2.addClass(div, 'absolute');
            this.renderer2.addClass(div, 'left-3');
            this.renderer2.addClass(div, '-top-3.5');
            this.renderer2.addClass(div, 'bg-white');
            this.renderer2.addClass(div, 'leading-none');
            this.renderer2.addClass(div, 'px-2');
            this.renderer2.addClass(div, 'mx-2');
            this.renderer2.addClass(div, 'border');
            this.renderer2.addClass(div, 'rounded-tl');
            this.renderer2.addClass(div, 'rounded-tr');
            this.renderer2.addClass(div, 'animate-ease-in');
            this.renderer2.addClass(div, 'animate-flip-down');
            this.renderer2.addClass(div, 'animate-once');
            this.renderer2.addClass(div, 'animate-ease-in-out');
            isDivCreated = true; // Set the flag to true to indicate the div is created
          }
          console.log('test');
        })
      )
      .subscribe();
    this.renderer2.addClass(this.elementRef.nativeElement, 'prose-2xl');
  }
}
