import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZoneAxeService {
  private tooltipRect: ClientRect;
  private buttonRect: ClientRect;

  constructor(
    @Inject(ComponentFactoryResolver) private tooltip: HTMLElement,
    @Inject(HTMLElement) private readonly target: HTMLElement
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
    buttonRect: ClientRect,
    tooltipRect: ClientRect,
    paddingTooltip: number,
    padding: number
  ): { top: string; left: string } {
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY =
      buttonRect.bottom - buttonRect.height / 2 - tooltipRect.height / 2;

    const position = {
      top: '',
      left: '',
    };
    if (
      buttonRect.right + tooltipRect.width + padding < window.innerWidth &&
      centerY + tooltipRect.height < window.innerHeight
    ) {
      position.top =
        centerY >= 0 ? `${centerY}` : `${buttonRect.top + 10 - paddingTooltip}`;
      position.left = `${centerX + buttonRect.width / 2}`;
    } else if (
      buttonRect.left - tooltipRect.width > 0 &&
      centerY + tooltipRect.height < window.innerHeight
    ) {
      position.top =
        centerY >= 0 ? `${centerY}` : `${buttonRect.top + 10 - paddingTooltip}`;
      position.left = `${buttonRect.left - tooltipRect.width}`;
    } else if (
      buttonRect.bottom + tooltipRect.height + padding <
      window.innerHeight
    ) {
      position.top = `${buttonRect.bottom + padding}`;
      position.left = `${centerX - tooltipRect.width / 2}`;
    } else if (buttonRect.top - tooltipRect.height - paddingTooltip > 0) {
      position.top = `${buttonRect.top - paddingTooltip - tooltipRect.height}`;
      position.left = `${centerX - tooltipRect.width / 2}`;
      if (centerX + tooltipRect.width / 2 > window.innerWidth) {
        position.left = `${
          centerX - tooltipRect.width + buttonRect.width / 2 + paddingTooltip
        }`;
      }
    } else {
      // Default position
      return position;
    }

    return position;
  }
}
