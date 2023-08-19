import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class InputComponent {
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
    control?: NgControl | any | unknown;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "ngx-input-component", never, { "typeInput": { "alias": "typeInput"; "required": false; }; "placeholderInput": { "alias": "placeholderInput"; "required": false; }; "labelInput": { "alias": "labelInput"; "required": false; }; "toggleData": { "alias": "toggleData"; "required": false; }; "control": { "alias": "control"; "required": false; }; }, {}, never, never, true, never>;
}
