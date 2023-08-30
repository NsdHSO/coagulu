import {
  ComponentFactoryResolver,
  inject,
  Inject,
  Injectable,
  Optional,
  Renderer2,
} from '@angular/core';
import { TypeSide } from 'ngx-ftx-forms';

@Injectable({
  providedIn: 'root',
})
export class ZoneAxeService {
  private tooltipRect: ClientRect;
  private buttonRect: ClientRect;

  constructor(
    @Inject(ComponentFactoryResolver) private tooltip: HTMLElement,
    @Inject(HTMLElement) private readonly target: HTMLElement,
    @Inject(Renderer2) private readonly rendere2: Renderer2
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
    const arrowFct = this.tooltip.children[0].children[0];
    this.rendere2.addClass(arrowFct, position.sideTooltip.side);
    return position;
  }

  calculatePositionRecursively(
    buttonRect: ClientRect,
    tooltipRect: ClientRect,
    paddingTooltip: number,
    padding: number
  ): {
    top: string;
    left: string;
    sideTooltip: { value: string; side: string };
  } {
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY =
      buttonRect.bottom - buttonRect.height / 2 - tooltipRect.height / 2;

    const position = {
      top: '',
      left: '',
      sideTooltip: {
        value: '',
        side: '',
      },
    };
    if (
      buttonRect.right + tooltipRect.width + padding < window.innerWidth &&
      centerY + tooltipRect.height < window.innerHeight
    ) {
      position.top =
        centerY >= 0 ? `${centerY}` : `${buttonRect.top + 10 - paddingTooltip}`;
      position.left = `${centerX + paddingTooltip + buttonRect.width / 2}`;
      position.sideTooltip = {
        value: `${buttonRect.bottom - buttonRect.height / 2}`,
        side: 'right',
      };
    } else if (
      buttonRect.left - tooltipRect.width > 0 &&
      centerY + tooltipRect.height < window.innerHeight
    ) {
      position.top =
        centerY >= 0 ? `${centerY}` : `${buttonRect.top + 10 - paddingTooltip}`;
      position.left = `${buttonRect.left + paddingTooltip - tooltipRect.width}`;
      position.sideTooltip = {
        value: `${buttonRect.bottom - buttonRect.height / 2}`,
        side: 'left',
      };
    } else if (
      buttonRect.bottom + tooltipRect.height + padding <
      window.innerHeight
    ) {
      position.top = `${buttonRect.bottom + padding}`;
      position.left = `${centerX - tooltipRect.width / 2}`;
      position.sideTooltip = {
        value: `${buttonRect.right - buttonRect.width / 2}`,
        side: 'bottom',
      };
    } else if (buttonRect.top - tooltipRect.height - paddingTooltip > 0) {
      position.top = `${buttonRect.top - paddingTooltip - tooltipRect.height}`;
      position.left = `${centerX - tooltipRect.width / 2}`;
      position.sideTooltip = {
        value: `${buttonRect.right - buttonRect.width / 2}`,
        side: 'top',
      };
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
