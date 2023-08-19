import { FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { DataFormBuilder, NestedValue, Section, Validator } from '../interfaces';
import * as i0 from "@angular/core";
export declare class GenerateFormBuilderService {
    private readonly _fb;
    buildFormFromJson(jsonData: DataFormBuilder): any;
    extractValidator(item: Section | NestedValue): ValidatorFn[];
    getValidator(validatorConfig: Validator): ValidatorFn | any;
    buildFormGenerate(data: DataFormBuilder): FormGroup | FormArray | FormControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenerateFormBuilderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GenerateFormBuilderService>;
}
