import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Renderer2,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZoneAxeService {
  private readonly tooltipRect: DOMRect;
  private readonly buttonRect: DOMRect;

  constructor(
    @Inject(ComponentFactoryResolver) private tooltip: HTMLElement,
    @Inject(HTMLElement) private readonly target: HTMLElement,
    @Inject(Renderer2) private readonly renderer2: Renderer2
  ) {
    this.tooltipRect = tooltip.getBoundingClientRect();
    this.buttonRect = target.getBoundingClientRect();
  }

  axes(): { top: string; left: string } {
    const padding = 40;
    const paddingTooltip = 16;

    const position = this.calculatePositionRecursively(
      this.buttonRect,
      this.tooltipRect,
      paddingTooltip,
      padding
    );
    return position;
  }

  calculatePositionRecursively(
    buttonRect: DOMRect,
    tooltipRect: DOMRect,
    paddingTooltip: number,
    padding: number
  ): {
    top: string;
    left: string;
  } {
    const arrowFct = this.tooltip.children[0].children[0];

    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY =
      buttonRect.bottom - buttonRect.height / 2 - tooltipRect.height / 2;

    const position = {
      top: '',
      left: '',
    };
    if (
      buttonRect.right + tooltipRect.width + padding < window.innerWidth &&
      centerY + tooltipRect.height < window.innerHeight &&
      centerY >= -40
    ) {
      position.top =
        centerY >= 0 ? `${centerY}` : `${buttonRect.top + 10 - paddingTooltip}`;
      position.left = `${centerX + paddingTooltip + buttonRect.width / 2}`;
      this.renderer2.addClass(arrowFct, 'right');

      if (centerY <= 0) {
        this.renderer2.setStyle(
          arrowFct,
          'top',
          `${(buttonRect.top - buttonRect.height / 2) / 16}rem`
        );
      }
    } else if (
      buttonRect.left - tooltipRect.width > 0 &&
      centerY + tooltipRect.height < window.innerHeight
    ) {
      position.top =
        centerY >= 0 ? `${centerY}` : `${buttonRect.top + 10 - paddingTooltip}`;
      position.left = `${buttonRect.left + paddingTooltip - tooltipRect.width}`;
      this.renderer2.addClass(arrowFct, 'left');
    } else if (
      buttonRect.bottom + tooltipRect.height + padding <
      window.innerHeight
    ) {
      position.top = `${buttonRect.bottom + paddingTooltip}`;
      position.left = `${centerX - tooltipRect.width / 2}`;
      this.renderer2.addClass(arrowFct, 'bottom');
    } else if (buttonRect.top - tooltipRect.height - paddingTooltip > 0) {
      position.top = `${buttonRect.top - paddingTooltip - tooltipRect.height}`;
      position.left = `${centerX - tooltipRect.width / 2}`;
      this.renderer2.addClass(arrowFct, 'top');

      if (centerX + tooltipRect.width / 2 > window.innerWidth) {
        position.left = `${
          centerX - tooltipRect.width + buttonRect.width / 2 + paddingTooltip
        }`;
        this.renderer2.setStyle(
          arrowFct,
          'left',
          `${(tooltipRect.width - tooltipRect.width / 4) / 16}rem`
        );
      }
    } else {
      // Default position
      return position;
    }

    return position;
  }
}
