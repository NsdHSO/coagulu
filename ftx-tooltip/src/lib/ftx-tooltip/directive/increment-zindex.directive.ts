import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[coaguluIncrementZindex]',
  standalone: true,
})
export class IncrementZindexDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Find all elements with the 'incrementZIndex' directive and increment their z-index by 10
    const elements = document.querySelectorAll('[coaguluIncrementZindex]');
    elements.forEach((element, index) => {
      this.renderer.setStyle(element, 'z-index', 100 - index);
    });
  }
}
