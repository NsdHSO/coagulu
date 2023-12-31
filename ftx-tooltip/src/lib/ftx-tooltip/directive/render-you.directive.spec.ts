import { RenderYouDirective } from './render-you.directive';
import {
  ComponentFactoryResolver,
  ElementRef,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('RenderYouDirective', () => {
  const setupSpy = (
    elementRef: unknown,
    renderer2: unknown,
    componentFactoryResolver: unknown,
    viewContainerRef: unknown
  ) => {
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
        {
          provide: ComponentFactoryResolver,
          useValue: componentFactoryResolver,
        },
        {
          provide: ViewContainerRef,
          useValue: viewContainerRef,
        },
        RenderYouDirective,
      ],
    }).inject(RenderYouDirective);
  };
  it('should create an instance', () => {
    const elementRef = {};
    const renderer2 = {};
    const componentFactoryResolver = {};
    const viewContainerRef = {};
    const directive = setupSpy(
      elementRef,
      renderer2,
      componentFactoryResolver,
      viewContainerRef
    );
    expect(directive).toBeTruthy();
  });
});
