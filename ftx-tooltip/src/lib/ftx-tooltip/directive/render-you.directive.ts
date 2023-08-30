import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { FtxTooltipComponent } from '../ftx-tooltip.component';
import { ZoneAxeService } from '../service/zone-axe.service';

@Directive({
  selector: '[renderYou]',
  standalone: true,
})
export class RenderYouDirective {
  @Input() element: any;

  private readonly elementRef = inject(ElementRef);
  private readonly componentFactoryResolver = inject(ComponentFactoryResolver);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private componentRef: ComponentRef<any> | any; // eslint-disable-line
  private zoneAxes: ZoneAxeService | any;

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    const element = this.elementRef.nativeElement;
    const targetElement = event.target as HTMLElement;
    // Avoid the children
    if (targetElement === element) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          FtxTooltipComponent
        );
      this.componentRef =
        this.viewContainerRef.createComponent(componentFactory);
      this.componentRef.instance.rendererTemplate = this.element;

      // find the app-root element
      const appRoot = document.getElementsByTagName('app-root')[0] as any;

      // add the tooltip component as a sibling of the app-root
      appRoot.parentElement.insertBefore(
        this.componentRef.location.nativeElement,
        appRoot.nextSibling
      );

      // set the tooltip component's position to absolute
      this.componentRef.location.nativeElement.style.position = 'absolute';
      this.componentRef.changeDetectorRef.detectChanges();

      // set the top and left positions of the tooltip component
      const position = new ZoneAxeService(
        this.componentRef.location.nativeElement,
        element
      ).axes();
      this.componentRef.location.nativeElement.style.top = position.top;
      this.componentRef.location.nativeElement.style.left = position.left;
      this.componentRef.location.nativeElement.style.zIndex = '98';
      this.componentRef.changeDetectorRef.detectChanges();
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
