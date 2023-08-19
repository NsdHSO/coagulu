import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PatchFormGroupValueDirective {
    constructor() {
        this.formGroup = {};
    }
    set ngxFormGroupValues(val) {
        if (!val) {
            return;
        }
        this.formGroup.patchValue(val, { emitEvent: false });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: PatchFormGroupValueDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.1", type: PatchFormGroupValueDirective, isStandalone: true, selector: "[ngxFormGroupValues]", inputs: { formGroup: "formGroup", ngxFormGroupValues: "ngxFormGroupValues" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: PatchFormGroupValueDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxFormGroupValues]',
                    standalone: true,
                }]
        }], propDecorators: { formGroup: [{
                type: Input
            }], ngxFormGroupValues: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2gtZm9ybS1ncm91cC12YWx1ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZnR4LWZvcm1zL3NyYy9saWIvZnR4LWZvcm1zL2RpcmVjdGl2ZS9wYXRjaC1mb3JtLWdyb3VwLXZhbHVlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPakQsTUFBTSxPQUFPLDRCQUE0QjtJQUp6QztRQUtXLGNBQVMsR0FBYyxFQUFlLENBQUM7S0FRakQ7SUFOQyxJQUFhLGtCQUFrQixDQUFDLEdBQVk7UUFDMUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OEdBUlUsNEJBQTRCO2tHQUE1Qiw0QkFBNEI7OzJGQUE1Qiw0QkFBNEI7a0JBSnhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUVVLFNBQVM7c0JBQWpCLEtBQUs7Z0JBRU8sa0JBQWtCO3NCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4Rm9ybUdyb3VwVmFsdWVzXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFBhdGNoRm9ybUdyb3VwVmFsdWVEaXJlY3RpdmUge1xuICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IHt9IGFzIEZvcm1Hcm91cDtcblxuICBASW5wdXQoKSBzZXQgbmd4Rm9ybUdyb3VwVmFsdWVzKHZhbDogdW5rbm93bikge1xuICAgIGlmICghdmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUodmFsLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gIH1cbn1cbiJdfQ==