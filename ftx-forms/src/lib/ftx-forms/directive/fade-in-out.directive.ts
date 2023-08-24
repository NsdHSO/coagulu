import { Directive, ElementRef, inject, Input } from '@angular/core';
import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
} from '@angular/animations';

/**
 * A directive that applies a fade-in/out animation based on the provided input control's state.
 */
@Directive({
  selector: '[ngxFadeInOut]',
  standalone: true,
  exportAs: 'ngxFadeInOut', // Expose the directive instance
})
export class FadeInOutDirective<T> {
  /**
   * The ElementRef of the element on which the animation will be applied.
   * @private
   */
  private readonly _elementRef = inject(ElementRef);
  /**
   * The AnimationBuilder instance used to create animations.
   * @private
   */
  private readonly _animationBuilder = inject(AnimationBuilder);
  /**
   * Provides programmatic control of a reusable animation sequence, built using the
   * @private
   */
  private animationPlayer: AnimationPlayer | undefined;

  /**
   * Binds the input control's value to trigger the fade-in/out animation.
   * @param control The input control (form control or boolean value) to monitor for animation triggering.
   */
  @Input('ngxFadeInOut') set errorControl(control: T) {
    if (control !== 'VALID' || !control) {
      this.playAnimation();
    }
  }

  /**
   * Plays the fade-in/out animation on the element.
   */
  playAnimation(): void {
    const animationFactory = this._animationBuilder.build([
      style({
        opacity: 0,
        transform: 'translateY(-5px)',
      }),
      animate('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
    ]);
    if (this.animationPlayer) {
      this.animationPlayer.destroy();
    }
    const element = this._elementRef.nativeElement;
    this.animationPlayer = animationFactory.create(element);
    this.animationPlayer.play();
  }
}
