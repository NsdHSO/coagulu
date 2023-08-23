import { Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';
import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
} from '@angular/animations';

@Directive({
  selector: '[ngxFadeInOut]',
  standalone: true,
  exportAs: 'ngxFadeInOut', // Expose the directive instance
})
export class FadeInOutDirective<T> {
  @Input('ngxFadeInOut') set errorControl(control: T) {
    if (control !== 'VALID' || !control) {
      this.playAnimation();
    }
  }
  // if you want to
  // accept any input type

  private readonly _rendered2 = inject(Renderer2);
  private readonly _elementRef = inject(ElementRef);
  private readonly _animationBuilder = inject(AnimationBuilder);
  private animationPlayer: AnimationPlayer | undefined;

  private playAnimation(): void {
    const animationFactory = this._animationBuilder.build([
      style({ opacity: 0, transform: 'translateY(-5px)' }),
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
