import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
export class ButtonComponent {
    constructor() {
        this.marian = new EventEmitter();
        this.disable = false;
        this.roundedFull = '';
        this.typeButton = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: ButtonComponent, isStandalone: true, selector: "ngx-button-component", inputs: { disable: "disable", roundedFull: "roundedFull", typeButton: "typeButton" }, outputs: { marian: "marian" }, ngImport: i0, template: "<button\n  [type]=\"typeButton\"\n  [disabled]=\"disable\"\n  [ngClass]=\"{ '!bg-blue-700': disable }\"\n  mat-button\n  (click)=\"marian.emit()\"\n  class=\"mat-primary mat-raised-button !bg-blue-500 !text-white p-2\"\n  [className]=\"roundedFull\"\n>\n  <ng-content></ng-content>\n</button>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-button-component', standalone: true, imports: [CommonModule, MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button\n  [type]=\"typeButton\"\n  [disabled]=\"disable\"\n  [ngClass]=\"{ '!bg-blue-700': disable }\"\n  mat-button\n  (click)=\"marian.emit()\"\n  class=\"mat-primary mat-raised-button !bg-blue-500 !text-white p-2\"\n  [className]=\"roundedFull\"\n>\n  <ng-content></ng-content>\n</button>\n" }]
        }], propDecorators: { marian: [{
                type: Output
            }], disable: [{
                type: Input
            }], roundedFull: [{
                type: Input
            }], typeButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mdHgtZm9ybXMvc3JjL2xpYi9mdHgtZm9ybXMvc2hhcmVkL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZ0eC1mb3Jtcy9zcmMvbGliL2Z0eC1mb3Jtcy9zaGFyZWQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBVTNELE1BQU0sT0FBTyxlQUFlO0lBUjVCO1FBU1ksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFzQixLQUFLLENBQUM7UUFDbkMsZ0JBQVcsR0FBcUIsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxFQUFFLENBQUM7S0FDakM7OEdBTFksZUFBZTtrR0FBZixlQUFlLHFNQ2xCNUIsd1NBV0EseURERVksWUFBWSw0SEFBRSxlQUFlOzsyRkFLNUIsZUFBZTtrQkFSM0IsU0FBUzsrQkFDRSxzQkFBc0IsY0FDcEIsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxtQkFHdkIsdUJBQXVCLENBQUMsTUFBTTs4QkFHckMsTUFBTTtzQkFBZixNQUFNO2dCQUNTLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtYnV0dG9uLWNvbXBvbmVudCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBPdXRwdXQoKSBtYXJpYW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlOiBib29sZWFuIHwgdW5rbm93biA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgcm91bmRlZEZ1bGw6IHN0cmluZyB8IHVua25vd24gPSAnJztcbiAgQElucHV0KCkgcHVibGljIHR5cGVCdXR0b24gPSAnJztcbn1cbiIsIjxidXR0b25cbiAgW3R5cGVdPVwidHlwZUJ1dHRvblwiXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlXCJcbiAgW25nQ2xhc3NdPVwieyAnIWJnLWJsdWUtNzAwJzogZGlzYWJsZSB9XCJcbiAgbWF0LWJ1dHRvblxuICAoY2xpY2spPVwibWFyaWFuLmVtaXQoKVwiXG4gIGNsYXNzPVwibWF0LXByaW1hcnkgbWF0LXJhaXNlZC1idXR0b24gIWJnLWJsdWUtNTAwICF0ZXh0LXdoaXRlIHAtMlwiXG4gIFtjbGFzc05hbWVdPVwicm91bmRlZEZ1bGxcIlxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2J1dHRvbj5cbiJdfQ==