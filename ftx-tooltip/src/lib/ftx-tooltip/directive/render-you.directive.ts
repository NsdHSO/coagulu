import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { FtxTooltipComponent } from '../ftx-tooltip.component';
import { ZoneAxeService } from '../service/zone-axe.service';

@Directive({
  selector: '[renderYou]',
  standalone: true,
})
export class RenderYouDirective {
  @Input() element: any; //eslint-disable-line

  @Input() elementText?: string;

  private readonly elementRef = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);

  private readonly componentFactoryResolver = inject(ComponentFactoryResolver);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private componentRef: ComponentRef<any> | any; // eslint-disable-line

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
      this.componentRef.instance.text = this.elementText;

      // find the app-root element
      const appRoot = document.getElementsByTagName(
        'app-root'
      )[0] as HTMLElement as any; //eslint-disable-line

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
        element,
        this.renderer2
      ).axes();
      this.componentRef.location.nativeElement.style.top = `${
        +position.top / 16
      }rem`;
      this.componentRef.location.nativeElement.style.left = `${
        +position.left / 16
      }rem`;
      console.log(position);
      this.componentRef.location.nativeElement.style.zIndex = '98';
      this.componentRef.changeDetectorRef.detectChanges();
    }
  }
  @HostListener('mouseleave') onMouseLeave() {}
}
