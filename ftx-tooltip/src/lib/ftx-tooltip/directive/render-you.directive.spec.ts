import { RenderYouDirective } from './render-you.directive';
import * as angularCore from '@angular/core';
import { ComponentFactoryResolver, ElementRef, Renderer2 } from '@angular/core';

describe('RenderYouDirective', () => {
  const spyInject = jest.spyOn(angularCore, 'inject');

  const setupSpy = (
    elementRef: unknown,
    renderer2: unknown,
    componentFactoryResolver: unknown,
    viewContainerRef: unknown
  ) => {
    spyInject.mockImplementation((providerToken) => {
      if (providerToken === ElementRef) {
        return elementRef;
      } else if (providerToken === Renderer2) {
        return renderer2;
      } else if (providerToken === ComponentFactoryResolver) {
        return componentFactoryResolver;
      } else {
        return viewContainerRef;
      }
    });

    return new RenderYouDirective();
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
