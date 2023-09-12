import { IncrementZindexDirective } from './increment-zindex.directive';
import { TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';

describe('IncrementZindexDirective', () => {
  const setupSpy = (elementRef: unknown, renderer2: unknown) => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: elementRef,
        },
        {
          provide: Renderer2,
          useValue: renderer2,
        },
        IncrementZindexDirective,
      ],
    }).inject(IncrementZindexDirective);
  };
  it('should create an instance', () => {
    const elementRef = {};
    const renderer2 = {};
    const directive = setupSpy(elementRef, renderer2);
    expect(directive).toBeTruthy();
  });
});
