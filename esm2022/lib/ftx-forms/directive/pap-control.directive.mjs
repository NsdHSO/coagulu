import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class PapControlDirective {
    writeValue() {
        //
    }
    registerOnChange() {
        //
    }
    registerOnTouched() {
        //
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: PapControlDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.1", type: PapControlDirective, isStandalone: true, selector: "[ngxControl]", providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: PapControlDirective,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: PapControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxControl]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: PapControlDirective,
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFwLWNvbnRyb2wuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZ0eC1mb3Jtcy9zcmMvbGliL2Z0eC1mb3Jtcy9kaXJlY3RpdmUvcGFwLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQWF6RSxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFVBQVU7UUFDUixFQUFFO0lBQ0osQ0FBQztJQUNELGdCQUFnQjtRQUNkLEVBQUU7SUFDSixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsRUFBRTtJQUNKLENBQUM7OEdBVFUsbUJBQW1CO2tHQUFuQixtQkFBbUIsMkRBUm5CO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsV0FBVyxFQUFFLG1CQUFtQjthQUNqQztTQUNGOzsyRkFFVSxtQkFBbUI7a0JBWC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsV0FBVyxxQkFBcUI7eUJBQ2pDO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hDb250cm9sXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogUGFwQ29udHJvbERpcmVjdGl2ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXBDb250cm9sRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB3cml0ZVZhbHVlKCk6IHZvaWQge1xuICAgIC8vXG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZSgpOiB2b2lkIHtcbiAgICAvL1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge1xuICAgIC8vXG4gIH1cbn1cbiJdfQ==