import {
  Directive,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[coaguluIncrementZindex]',
  standalone: true,
})
export class IncrementZindexDirective implements OnInit {
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

  ngOnInit() {
    // Find all elements with the 'incrementZIndex' directive and increment their z-index by 10
    const elements = document.querySelectorAll('[coaguluIncrementZindex]');
    elements.forEach((element, index) => {
      this.renderer2.setStyle(element, 'z-index', 100 - index);
    });
  }
}
