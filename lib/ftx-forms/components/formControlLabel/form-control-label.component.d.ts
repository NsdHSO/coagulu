import { FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../directive/pap-control.directive";
export declare class FormControlLabelComponent {
    label: string | undefined;
    /**
     * Type of Input checkbox text
     */
    typeInput?: string | undefined;
    /**
     * Placeholder for input
     */
    placeholderInput?: string | undefined;
    /**
     * Label for input
     */
    labelInput?: string | undefined;
    /**
     * When input is radio button
     */
    toggleData?: {
        value: boolean;
        description: string;
    }[] | undefined;
    ngControl: FormControlDirective | FormControlName | NgModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormControlLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormControlLabelComponent, "ngx-form-control-label", never, { "label": { "alias": "label"; "required": false; }; "typeInput": { "alias": "typeInput"; "required": false; }; "placeholderInput": { "alias": "placeholderInput"; "required": false; }; "labelInput": { "alias": "labelInput"; "required": false; }; "toggleData": { "alias": "toggleData"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.PapControlDirective; inputs: {}; outputs: {}; }]>;
}
