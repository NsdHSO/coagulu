import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataFormBuilder } from './interfaces';
import { GenerativeService } from './service';
import * as i0 from "@angular/core";
export declare class FtxFormsComponent {
    dynamicForm: FormGroup;
    jsonData: DataFormBuilder;
    submitEvent: EventEmitter<any>;
    controlMapping: any;
    generateFormBuilderService: GenerativeService;
    protected readonly isFormGroup: (control: unknown) => control is FormGroup<any>;
    protected readonly isFormControl: (control: unknown) => control is import("@angular/forms").FormControl<any>;
    protected readonly isFormArray: (control: unknown) => control is import("@angular/forms").FormArray<any>;
    ngOnInit(): void;
    ivan(controls: any | undefined): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FtxFormsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FtxFormsComponent, "ngx-ftx-forms", never, { "dynamicForm": { "alias": "dynamicForm"; "required": false; }; "jsonData": { "alias": "jsonData"; "required": false; }; }, { "submitEvent": "submitEvent"; }, never, never, true, never>;
}
