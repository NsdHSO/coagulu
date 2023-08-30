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
    // Top
    if (
      buttonRect.right + tooltipRect.width + padding < window.innerWidth &&
      centerY + tooltipRect.height < window.innerHeight
    ) {
      position.top =
        centerY >= 0
          ? `${centerY}px`
          : `${buttonRect.top + 10 - paddingTooltip}px`;
      position.left = `${centerX + buttonRect.width / 2}px`;
    } else if (
      buttonRect.left - tooltipRect.width > 0 &&
      centerY + tooltipRect.height < window.innerHeight
    ) {
      console.log('left');
      position.top =
        centerY >= 0
          ? `${centerY}px`
          : `${buttonRect.top + 10 - paddingTooltip}px`;
      position.left = `${buttonRect.left - tooltipRect.width}px`;
    } else if (
      buttonRect.bottom + tooltipRect.height + padding <
      window.innerHeight
    ) {
      position.top = `${buttonRect.bottom + padding}px`;
      position.left = `${centerX - tooltipRect.width / 2}px`;
    } else if (buttonRect.top - tooltipRect.height - paddingTooltip > 0) {
      position.top = `${
        buttonRect.top - paddingTooltip - tooltipRect.height
      }px`;
      position.left = `${centerX - tooltipRect.width / 2}px`;
      if (centerX + tooltipRect.width / 2 > window.innerWidth) {
        position.left = `${
          centerX - tooltipRect.width + buttonRect.width / 2 + paddingTooltip
        }px`;
      }
    } else {
      // Default position
      return position;
    }

    return position;
  }
}
