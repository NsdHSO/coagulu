import { FadeInOutDirective } from './fade-in-out.directive';
import { TestBed } from '@angular/core/testing';
import { AnimationBuilder } from '@angular/animations';
import { ElementRef } from '@angular/core';

describe('FadeInOutDirective', () => {
  const setupSpy = (elementRef: unknown, animationBuilder: unknown) => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: elementRef,
        },
        {
          provide: AnimationBuilder,
          useValue: animationBuilder,
        },
        FadeInOutDirective,
      ],
    }).inject(FadeInOutDirective);
  };
  it('should create an instance', () => {
    const elementRef = {};
    const animationBuilder = {};
    const directive = setupSpy(elementRef, animationBuilder);
    expect(directive).toBeTruthy();
  });
});
