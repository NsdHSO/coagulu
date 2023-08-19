import { ChangeDetectionStrategy, Component, inject, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlDirective, FormControlName, FormsModule, NgControl, NgModel, ReactiveFormsModule, } from '@angular/forms';
import { PapControlDirective, InputComponent } from '../../shared';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "../../directive/pap-control.directive";
import * as i2 from "@angular/common";
export class FormControlLabelComponent {
    constructor() {
        this.label = '';
        /**
         * Type of Input checkbox text
         */
        this.typeInput = 'text';
        /**
         * Placeholder for input
         */
        this.placeholderInput = '';
        /**
         * Label for input
         */
        this.labelInput = 'Complete label';
        /**
         * When input is radio button
         */
        this.toggleData = [{ value: false, description: 'default' }];
        this.ngControl = injectNgControl();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: FormControlLabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: FormControlLabelComponent, isStandalone: true, selector: "ngx-form-control-label", inputs: { label: "label", typeInput: "typeInput", placeholderInput: "placeholderInput", labelInput: "labelInput", toggleData: "toggleData" }, providers: [
            {
                provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: { subscriptSizing: 'dynamic' },
            },
        ], hostDirectives: [{ directive: i1.PapControlDirective }], ngImport: i0, template: "<div class=\"flex justify-between items-center\">\n  <p\n    [ngClass]=\"{ invisible: typeInput === 'boolean' }\"\n    class=\"col-span-1 !m-0\"\n    *ngIf=\"label || labelInput\"\n  >\n    {{ label }}\n  </p>\n  <div\n    class=\"flex\"\n    [ngClass]=\"\n      typeInput === 'boolean' ? 'col-span-1 gap-4 items-center' : 'col-span-4'\n    \"\n  >\n    <ngx-input-component\n      [control]=\"ngControl\"\n      [typeInput]=\"typeInput\"\n      [placeholderInput]=\"placeholderInput\"\n      [labelInput]=\"labelInput\"\n      [toggleData]=\"toggleData\"\n    />\n    <p class=\"!m-0\" *ngIf=\"labelInput && typeInput === 'boolean'\">\n      {{ labelInput }}\n    </p>\n  </div>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "component", type: InputComponent, selector: "ngx-input-component", inputs: ["typeInput", "placeholderInput", "labelInput", "toggleData", "control"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "ngmodule", type: MatInputModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: FormControlLabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-form-control-label', standalone: true, imports: [
                        CommonModule,
                        FormsModule,
                        InputComponent,
                        ReactiveFormsModule,
                        MatInputModule,
                    ], hostDirectives: [PapControlDirective], providers: [
                        {
                            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
                            useValue: { subscriptSizing: 'dynamic' },
                        },
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex justify-between items-center\">\n  <p\n    [ngClass]=\"{ invisible: typeInput === 'boolean' }\"\n    class=\"col-span-1 !m-0\"\n    *ngIf=\"label || labelInput\"\n  >\n    {{ label }}\n  </p>\n  <div\n    class=\"flex\"\n    [ngClass]=\"\n      typeInput === 'boolean' ? 'col-span-1 gap-4 items-center' : 'col-span-4'\n    \"\n  >\n    <ngx-input-component\n      [control]=\"ngControl\"\n      [typeInput]=\"typeInput\"\n      [placeholderInput]=\"placeholderInput\"\n      [labelInput]=\"labelInput\"\n      [toggleData]=\"toggleData\"\n    />\n    <p class=\"!m-0\" *ngIf=\"labelInput && typeInput === 'boolean'\">\n      {{ labelInput }}\n    </p>\n  </div>\n</div>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }], typeInput: [{
                type: Input
            }], placeholderInput: [{
                type: Input
            }], labelInput: [{
                type: Input
            }], toggleData: [{
                type: Input
            }] } });
function injectNgControl() {
    const ngControl = inject(NgControl, { self: true, optional: true });
    if (!ngControl) {
        throw new Error('Not ng Controll');
    }
    if (ngControl instanceof FormControlDirective ||
        ngControl instanceof FormControlName ||
        ngControl instanceof NgModel) {
        return ngControl;
    }
    throw new Error(`Not of instance of Form Directive Name Model`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mdHgtZm9ybXMvc3JjL2xpYi9mdHgtZm9ybXMvY29tcG9uZW50cy9mb3JtQ29udHJvbExhYmVsL2Zvcm0tY29udHJvbC1sYWJlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZnR4LWZvcm1zL3NyYy9saWIvZnR4LWZvcm1zL2NvbXBvbmVudHMvZm9ybUNvbnRyb2xMYWJlbC9mb3JtLWNvbnRyb2wtbGFiZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixlQUFlLEVBQ2YsV0FBVyxFQUNYLFNBQVMsRUFDVCxPQUFPLEVBQ1AsbUJBQW1CLEdBQ3BCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUF1QjlFLE1BQU0sT0FBTyx5QkFBeUI7SUFyQnRDO1FBc0JXLFVBQUssR0FBdUIsRUFBRSxDQUFDO1FBQ3hDOztXQUVHO1FBQ00sY0FBUyxHQUFJLE1BQU0sQ0FBQztRQUM3Qjs7V0FFRztRQUNNLHFCQUFnQixHQUFJLEVBQUUsQ0FBQztRQUNoQzs7V0FFRztRQUNNLGVBQVUsR0FBSSxnQkFBZ0IsQ0FBQztRQUN4Qzs7V0FFRztRQUNNLGVBQVUsR0FBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNsRSxjQUFTLEdBQ1AsZUFBZSxFQUFFLENBQUM7S0FDckI7OEdBcEJZLHlCQUF5QjtrR0FBekIseUJBQXlCLG1OQVJ6QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSw4QkFBOEI7Z0JBQ3ZDLFFBQVEsRUFBRSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUU7YUFDekM7U0FDRixtRkNyQ0gsbXJCQTBCQSx5RERISSxZQUFZLGdPQUNaLFdBQVcsK0JBQ1gsY0FBYyxpSkFDZCxtQkFBbUIsOEJBQ25CLGNBQWM7OzJGQWFMLHlCQUF5QjtrQkFyQnJDLFNBQVM7K0JBQ0Usd0JBQXdCLGNBQ3RCLElBQUksV0FDUDt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGNBQWM7cUJBQ2Ysa0JBR2UsQ0FBQyxtQkFBbUIsQ0FBQyxhQUMxQjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsOEJBQThCOzRCQUN2QyxRQUFRLEVBQUUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFO3lCQUN6QztxQkFDRixtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsS0FBSztzQkFBYixLQUFLO2dCQUlHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBSUcsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUlHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBSUcsVUFBVTtzQkFBbEIsS0FBSzs7QUFLUixTQUFTLGVBQWU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDcEUsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUNwQztJQUNELElBQ0UsU0FBUyxZQUFZLG9CQUFvQjtRQUN6QyxTQUFTLFlBQVksZUFBZTtRQUNwQyxTQUFTLFlBQVksT0FBTyxFQUM1QjtRQUNBLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0FBQ2xFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBpbmplY3QsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBGb3JtQ29udHJvbERpcmVjdGl2ZSxcbiAgRm9ybUNvbnRyb2xOYW1lLFxuICBGb3Jtc01vZHVsZSxcbiAgTmdDb250cm9sLFxuICBOZ01vZGVsLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQYXBDb250cm9sRGlyZWN0aXZlLCBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1BVF9GT1JNX0ZJRUxEX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZm9ybS1jb250cm9sLWxhYmVsJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJbnB1dENvbXBvbmVudCxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1jb250cm9sLWxhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS1jb250cm9sLWxhYmVsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3REaXJlY3RpdmVzOiBbUGFwQ29udHJvbERpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE1BVF9GT1JNX0ZJRUxEX0RFRkFVTFRfT1BUSU9OUyxcbiAgICAgIHVzZVZhbHVlOiB7IHN1YnNjcmlwdFNpemluZzogJ2R5bmFtaWMnIH0sXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sTGFiZWxDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJyc7XG4gIC8qKlxuICAgKiBUeXBlIG9mIElucHV0IGNoZWNrYm94IHRleHRcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVJbnB1dD8gPSAndGV4dCc7XG4gIC8qKlxuICAgKiBQbGFjZWhvbGRlciBmb3IgaW5wdXRcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVySW5wdXQ/ID0gJyc7XG4gIC8qKlxuICAgKiBMYWJlbCBmb3IgaW5wdXRcbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsSW5wdXQ/ID0gJ0NvbXBsZXRlIGxhYmVsJztcbiAgLyoqXG4gICAqIFdoZW4gaW5wdXQgaXMgcmFkaW8gYnV0dG9uXG4gICAqL1xuICBASW5wdXQoKSB0b2dnbGVEYXRhPyA9IFt7IHZhbHVlOiBmYWxzZSwgZGVzY3JpcHRpb246ICdkZWZhdWx0JyB9XTtcbiAgbmdDb250cm9sOiBGb3JtQ29udHJvbERpcmVjdGl2ZSB8IEZvcm1Db250cm9sTmFtZSB8IE5nTW9kZWwgPVxuICAgIGluamVjdE5nQ29udHJvbCgpO1xufVxuXG5mdW5jdGlvbiBpbmplY3ROZ0NvbnRyb2woKSB7XG4gIGNvbnN0IG5nQ29udHJvbCA9IGluamVjdChOZ0NvbnRyb2wsIHsgc2VsZjogdHJ1ZSwgb3B0aW9uYWw6IHRydWUgfSk7XG4gIGlmICghbmdDb250cm9sKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgbmcgQ29udHJvbGwnKTtcbiAgfVxuICBpZiAoXG4gICAgbmdDb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xEaXJlY3RpdmUgfHxcbiAgICBuZ0NvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbE5hbWUgfHxcbiAgICBuZ0NvbnRyb2wgaW5zdGFuY2VvZiBOZ01vZGVsXG4gICkge1xuICAgIHJldHVybiBuZ0NvbnRyb2w7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBOb3Qgb2YgaW5zdGFuY2Ugb2YgRm9ybSBEaXJlY3RpdmUgTmFtZSBNb2RlbGApO1xufVxuIiwiPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICA8cFxuICAgIFtuZ0NsYXNzXT1cInsgaW52aXNpYmxlOiB0eXBlSW5wdXQgPT09ICdib29sZWFuJyB9XCJcbiAgICBjbGFzcz1cImNvbC1zcGFuLTEgIW0tMFwiXG4gICAgKm5nSWY9XCJsYWJlbCB8fCBsYWJlbElucHV0XCJcbiAgPlxuICAgIHt7IGxhYmVsIH19XG4gIDwvcD5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZmxleFwiXG4gICAgW25nQ2xhc3NdPVwiXG4gICAgICB0eXBlSW5wdXQgPT09ICdib29sZWFuJyA/ICdjb2wtc3Bhbi0xIGdhcC00IGl0ZW1zLWNlbnRlcicgOiAnY29sLXNwYW4tNCdcbiAgICBcIlxuICA+XG4gICAgPG5neC1pbnB1dC1jb21wb25lbnRcbiAgICAgIFtjb250cm9sXT1cIm5nQ29udHJvbFwiXG4gICAgICBbdHlwZUlucHV0XT1cInR5cGVJbnB1dFwiXG4gICAgICBbcGxhY2Vob2xkZXJJbnB1dF09XCJwbGFjZWhvbGRlcklucHV0XCJcbiAgICAgIFtsYWJlbElucHV0XT1cImxhYmVsSW5wdXRcIlxuICAgICAgW3RvZ2dsZURhdGFdPVwidG9nZ2xlRGF0YVwiXG4gICAgLz5cbiAgICA8cCBjbGFzcz1cIiFtLTBcIiAqbmdJZj1cImxhYmVsSW5wdXQgJiYgdHlwZUlucHV0ID09PSAnYm9vbGVhbidcIj5cbiAgICAgIHt7IGxhYmVsSW5wdXQgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=