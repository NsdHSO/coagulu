import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Output, Input, Directive, inject, Injectable } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule, NgControl, FormControlDirective, FormControlName, NgModel, FormBuilder, isFormGroup, isFormControl, isFormArray } from '@angular/forms';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i5 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i6 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i4 from '@angular/material/form-field';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

class ButtonComponent {
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

class PatchFormGroupValueDirective {
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

class PapControlDirective {
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

class InputComponent {
    constructor() {
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
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: InputComponent, isStandalone: true, selector: "ngx-input-component", inputs: { typeInput: "typeInput", placeholderInput: "placeholderInput", labelInput: "labelInput", toggleData: "toggleData", control: "control" }, ngImport: i0, template: "<div class=\"flex flex-col\">\n  <ng-container [ngSwitch]=\"typeInput\">\n    <mat-checkbox\n      *ngSwitchCase=\"'boolean'\"\n      [formControl]=\"control.control\"\n      class=\"border-0 flex ng-dirty ng-touched ng-valid placeholder:text-gray-400 py-1.5 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900\"\n    />\n    <ng-container *ngSwitchCase=\"'toggle'\">\n      <mat-radio-group [formControl]=\"control.control\" class=\"flex gap-5\">\n        <div *ngFor=\"let radio of toggleData\" class=\"flex items-center gap-3\">\n          <mat-radio-button [value]=\"radio.value\" />\n          <p class=\"!m-0\">{{ radio.description }}</p>\n        </div>\n      </mat-radio-group>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'area'\">\n      <mat-form-field appearance=\"outline\" class=\"rotate-180 -scale-[0.8]\">\n        <mat-label>{{ labelInput }}</mat-label>\n        <textarea\n          matInput\n          [placeholder]=\"placeholderInput ?? ''\"\n          [formControl]=\"control.control\"\n          class=\"font-semibold !text-xl\"\n        ></textarea>\n      </mat-form-field>\n    </ng-container>\n    <mat-form-field\n      appearance=\"outline\"\n      *ngSwitchDefault\n      class=\"rotate-180 -scale-[0.8]\"\n    >\n      <mat-label>{{ labelInput }}</mat-label>\n      <input\n        matInput\n        [placeholder]=\"placeholderInput ?? ''\"\n        [formControl]=\"control.control\"\n        class=\"font-semibold !text-xl\"\n      />\n    </mat-form-field>\n  </ng-container>\n  <div *ngIf=\"control?.control?.errors?.error\" class=\"pl-3 py-2 text-red-500\">\n    {{ control.control?.errors?.error }}\n  </div>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i5.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i6.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i6.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-input-component', standalone: true, imports: [
                        CommonModule,
                        PapControlDirective,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatCheckboxModule,
                        MatRadioModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex flex-col\">\n  <ng-container [ngSwitch]=\"typeInput\">\n    <mat-checkbox\n      *ngSwitchCase=\"'boolean'\"\n      [formControl]=\"control.control\"\n      class=\"border-0 flex ng-dirty ng-touched ng-valid placeholder:text-gray-400 py-1.5 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900\"\n    />\n    <ng-container *ngSwitchCase=\"'toggle'\">\n      <mat-radio-group [formControl]=\"control.control\" class=\"flex gap-5\">\n        <div *ngFor=\"let radio of toggleData\" class=\"flex items-center gap-3\">\n          <mat-radio-button [value]=\"radio.value\" />\n          <p class=\"!m-0\">{{ radio.description }}</p>\n        </div>\n      </mat-radio-group>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'area'\">\n      <mat-form-field appearance=\"outline\" class=\"rotate-180 -scale-[0.8]\">\n        <mat-label>{{ labelInput }}</mat-label>\n        <textarea\n          matInput\n          [placeholder]=\"placeholderInput ?? ''\"\n          [formControl]=\"control.control\"\n          class=\"font-semibold !text-xl\"\n        ></textarea>\n      </mat-form-field>\n    </ng-container>\n    <mat-form-field\n      appearance=\"outline\"\n      *ngSwitchDefault\n      class=\"rotate-180 -scale-[0.8]\"\n    >\n      <mat-label>{{ labelInput }}</mat-label>\n      <input\n        matInput\n        [placeholder]=\"placeholderInput ?? ''\"\n        [formControl]=\"control.control\"\n        class=\"font-semibold !text-xl\"\n      />\n    </mat-form-field>\n  </ng-container>\n  <div *ngIf=\"control?.control?.errors?.error\" class=\"pl-3 py-2 text-red-500\">\n    {{ control.control?.errors?.error }}\n  </div>\n</div>\n" }]
        }], propDecorators: { typeInput: [{
                type: Input
            }], placeholderInput: [{
                type: Input
            }], labelInput: [{
                type: Input
            }], toggleData: [{
                type: Input
            }], control: [{
                type: Input
            }] } });

class FormControlLabelComponent {
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
        ], hostDirectives: [{ directive: PapControlDirective }], ngImport: i0, template: "<div class=\"flex justify-between items-center\">\n  <p\n    [ngClass]=\"{ invisible: typeInput === 'boolean' }\"\n    class=\"col-span-1 !m-0\"\n    *ngIf=\"label || labelInput\"\n  >\n    {{ label }}\n  </p>\n  <div\n    class=\"flex\"\n    [ngClass]=\"\n      typeInput === 'boolean' ? 'col-span-1 gap-4 items-center' : 'col-span-4'\n    \"\n  >\n    <ngx-input-component\n      [control]=\"ngControl\"\n      [typeInput]=\"typeInput\"\n      [placeholderInput]=\"placeholderInput\"\n      [labelInput]=\"labelInput\"\n      [toggleData]=\"toggleData\"\n    />\n    <p class=\"!m-0\" *ngIf=\"labelInput && typeInput === 'boolean'\">\n      {{ labelInput }}\n    </p>\n  </div>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "component", type: InputComponent, selector: "ngx-input-component", inputs: ["typeInput", "placeholderInput", "labelInput", "toggleData", "control"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "ngmodule", type: MatInputModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
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

class GenerativeService {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    trackBy(index, entity) {
        return index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: GenerativeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: GenerativeService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: GenerativeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

var ConstantsEnum;
(function (ConstantsEnum) {
    ConstantsEnum[ConstantsEnum["ZERO"] = 0] = "ZERO";
})(ConstantsEnum || (ConstantsEnum = {}));
var TypeConstantEnum;
(function (TypeConstantEnum) {
    TypeConstantEnum["EMAIL"] = "email";
    TypeConstantEnum["MAX"] = "max";
    TypeConstantEnum["MIN"] = "min";
    TypeConstantEnum["NUMBER"] = "number";
    TypeConstantEnum["PATTERN"] = "pattern";
    TypeConstantEnum["REQUIRED"] = "required";
    TypeConstantEnum["STRING"] = "string";
    TypeConstantEnum["MIN_CHAR"] = "minChar";
    TypeConstantEnum["ONLY_CHAR"] = "only_char";
})(TypeConstantEnum || (TypeConstantEnum = {}));
var TypePattern;
(function (TypePattern) {
    TypePattern["ONLY_NUMBER"] = "^[0-9]+$";
    TypePattern["ONLY_CHAR"] = "^[a-zA-Z\\s]*$";
})(TypePattern || (TypePattern = {}));

class GenerateFormBuilderService {
    constructor() {
        this._fb = inject(FormBuilder);
    }
    buildFormFromJson(jsonData) {
        console.log(this.buildFormGenerate(jsonData));
        return this.buildFormGenerate(jsonData);
    }
    extractValidator(item) {
        let validators = [];
        if (item.validators && item.validators.length > 0) {
            validators = item.validators.map((validatorConfig) => this.getValidator(validatorConfig));
        }
        return validators;
    }
    // eslint-disable-next-line
    getValidator(validatorConfig) {
        const { type, option, errorMsg } = validatorConfig;
        switch (type) {
            case TypeConstantEnum.REQUIRED:
                return (control) => control.value
                    ? null
                    : { error: errorMsg || 'This field Is must' || true };
            case TypeConstantEnum.MIN:
                if (typeof option === TypeConstantEnum.NUMBER) {
                    // Check if option is a number
                    const numOption = option;
                    return (control) => control.value >= numOption ? null : { error: errorMsg || true };
                }
                else {
                    throw new Error('Other Error extract validator'); // Handle other
                    // cases or throw an error
                }
            case TypeConstantEnum.MIN_CHAR:
                if (typeof option === TypeConstantEnum.NUMBER) {
                    // Check if option is a number
                    const numOption = option;
                    return (control) => String(control.value).length >= numOption ||
                        String(control.value).length === 0
                        ? null
                        : { error: errorMsg || true };
                }
                else {
                    throw new Error('Other Error extract validator'); // Handle other
                    // cases or throw an error
                }
            case TypeConstantEnum.PATTERN:
                if (typeof option === TypeConstantEnum.STRING ||
                    option instanceof RegExp) {
                    const pattern = typeof option === TypeConstantEnum.STRING
                        ? new RegExp(option)
                        : option;
                    return (control) => (pattern instanceof RegExp ? pattern.test(control.value) : false)
                        ? null
                        : { error: errorMsg || true };
                }
                else {
                    throw new Error('Invalid option for pattern validator');
                }
            case TypeConstantEnum.EMAIL:
                return (control) => {
                    if (!control.value) {
                        return null; // Allow empty values for the email validator
                    }
                    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    return emailPattern.test(control.value)
                        ? null
                        : { error: errorMsg || true };
                };
            // Add more cases for other validator types as needed
            default:
                // Return null for unknown validator types
                throw new Error('Please Implement this Validator');
        }
    }
    buildFormGenerate(data) {
        if (data.values) {
            //eslint-disable-next-line
            const group = {};
            data.values.forEach((item) => {
                if (item.values) {
                    group[item.label ?? ''] = this.buildFormGenerate(item);
                }
                else if (item.bulkValues) {
                    group[item.label ?? ''] = this._fb.array(item.bulkValues.map((subItem) => this.buildFormGenerate(subItem)));
                }
                else {
                    const validators = this.extractValidator(item);
                    group[item.label ?? ''] = this._fb.control(item.value || null, validators);
                }
            });
            return this._fb.group(group);
        }
        else if (data.bulkValues) {
            return this._fb.array(data.bulkValues.map((subItem) => this.buildFormGenerate(subItem)));
        }
        else {
            const validators = this.extractValidator(data);
            return this._fb.control(data.value || null, validators);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: GenerateFormBuilderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: GenerateFormBuilderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: GenerateFormBuilderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class FtxFormsComponent {
    constructor() {
        this.dynamicForm = {};
        this.jsonData = {};
        this.submitEvent = new EventEmitter();
        this.controlMapping = [];
        this.generateFormBuilderService = inject(GenerativeService);
        this.isFormGroup = isFormGroup;
        this.isFormControl = isFormControl;
        this.isFormArray = isFormArray;
    }
    ngOnInit() {
        if (this.jsonData.values)
            for (const item of this.jsonData.values) {
                if (item.label) {
                    this.controlMapping[item.label] = item;
                }
            }
    }
    ivan(controls) {
        console.log(controls);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: FtxFormsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: FtxFormsComponent, isStandalone: true, selector: "ngx-ftx-forms", inputs: { dynamicForm: "dynamicForm", jsonData: "jsonData" }, outputs: { submitEvent: "submitEvent" }, ngImport: i0, template: "<form\n  [formGroup]=\"dynamicForm\"\n  (ngSubmit)=\"submitEvent.emit(true)\"\n  class=\"p-3 flex flex-col\"\n>\n  <ng-container\n    *ngTemplateOutlet=\"\n      renderControlRecursive;\n      context: {\n        control: dynamicForm,\n        controlKey: null\n      }\n    \"\n  ></ng-container>\n\n  <ngx-button-component\n    [disable]=\"dynamicForm.pristine || dynamicForm.invalid\"\n    roundedFull=\"rounded-md\"\n    >Submit\n  </ngx-button-component>\n</form>\n\n<ng-template\n  #renderControlRecursive\n  let-control=\"control\"\n  let-controlKey=\"controlKey\"\n>\n  <ng-container [ngSwitch]=\"control.constructor.name\">\n    <!-- Render FormArray -->\n    {{ ivan({ control: control, name: control.constructor.name }) }}\n    <ng-container *ngSwitchCase=\"'FormArray'\">\n      <ng-container\n        *ngFor=\"\n          let arrayControl of control.controls;\n          trackBy: generateFormBuilderService.trackBy\n        \"\n      >\n        <ng-container\n          *ngTemplateOutlet=\"\n            renderControlRecursive;\n            context: { control: arrayControl, controlKey: controlKey }\n          \"\n        >\n        </ng-container>\n      </ng-container>\n    </ng-container>\n\n    <!-- Render FormGroup -->\n    <ng-container *ngSwitchCase=\"'FormGroup'\">\n      <ng-container\n        *ngFor=\"\n          let groupControl of control.controls | keyvalue;\n          trackBy: generateFormBuilderService.trackBy\n        \"\n      >\n        <ng-container\n          *ngTemplateOutlet=\"\n            renderControlRecursive;\n            context: {\n              control: groupControl.value,\n              controlKey: groupControl.key\n            }\n          \"\n        ></ng-container>\n      </ng-container>\n    </ng-container>\n    <!-- Render FormControl -->\n    <ng-container *ngSwitchDefault>\n      <ngx-form-control-label\n        [formControl]=\"control\"\n        [labelInput]=\"controlMapping[controlKey]?.labelHint\"\n        [label]=\"controlKey\"\n        [placeholderInput]=\"controlMapping[controlKey]?.placeholder\"\n        [toggleData]=\"controlMapping[controlKey]?.valueToggleShow\"\n        [typeInput]=\"controlMapping[controlKey]?.typeInput\"\n      ></ngx-form-control-label>\n    </ng-container>\n  </ng-container>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "pipe", type: i1.KeyValuePipe, name: "keyvalue" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: FormControlLabelComponent, selector: "ngx-form-control-label", inputs: ["label", "typeInput", "placeholderInput", "labelInput", "toggleData"] }, { kind: "component", type: ButtonComponent, selector: "ngx-button-component", inputs: ["disable", "roundedFull", "typeButton"], outputs: ["marian"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: FtxFormsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-ftx-forms', standalone: true, imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormControlLabelComponent,
                        ButtonComponent,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<form\n  [formGroup]=\"dynamicForm\"\n  (ngSubmit)=\"submitEvent.emit(true)\"\n  class=\"p-3 flex flex-col\"\n>\n  <ng-container\n    *ngTemplateOutlet=\"\n      renderControlRecursive;\n      context: {\n        control: dynamicForm,\n        controlKey: null\n      }\n    \"\n  ></ng-container>\n\n  <ngx-button-component\n    [disable]=\"dynamicForm.pristine || dynamicForm.invalid\"\n    roundedFull=\"rounded-md\"\n    >Submit\n  </ngx-button-component>\n</form>\n\n<ng-template\n  #renderControlRecursive\n  let-control=\"control\"\n  let-controlKey=\"controlKey\"\n>\n  <ng-container [ngSwitch]=\"control.constructor.name\">\n    <!-- Render FormArray -->\n    {{ ivan({ control: control, name: control.constructor.name }) }}\n    <ng-container *ngSwitchCase=\"'FormArray'\">\n      <ng-container\n        *ngFor=\"\n          let arrayControl of control.controls;\n          trackBy: generateFormBuilderService.trackBy\n        \"\n      >\n        <ng-container\n          *ngTemplateOutlet=\"\n            renderControlRecursive;\n            context: { control: arrayControl, controlKey: controlKey }\n          \"\n        >\n        </ng-container>\n      </ng-container>\n    </ng-container>\n\n    <!-- Render FormGroup -->\n    <ng-container *ngSwitchCase=\"'FormGroup'\">\n      <ng-container\n        *ngFor=\"\n          let groupControl of control.controls | keyvalue;\n          trackBy: generateFormBuilderService.trackBy\n        \"\n      >\n        <ng-container\n          *ngTemplateOutlet=\"\n            renderControlRecursive;\n            context: {\n              control: groupControl.value,\n              controlKey: groupControl.key\n            }\n          \"\n        ></ng-container>\n      </ng-container>\n    </ng-container>\n    <!-- Render FormControl -->\n    <ng-container *ngSwitchDefault>\n      <ngx-form-control-label\n        [formControl]=\"control\"\n        [labelInput]=\"controlMapping[controlKey]?.labelHint\"\n        [label]=\"controlKey\"\n        [placeholderInput]=\"controlMapping[controlKey]?.placeholder\"\n        [toggleData]=\"controlMapping[controlKey]?.valueToggleShow\"\n        [typeInput]=\"controlMapping[controlKey]?.typeInput\"\n      ></ngx-form-control-label>\n    </ng-container>\n  </ng-container>\n</ng-template>\n" }]
        }], propDecorators: { dynamicForm: [{
                type: Input
            }], jsonData: [{
                type: Input
            }], submitEvent: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ConstantsEnum, FormControlLabelComponent, FtxFormsComponent, GenerateFormBuilderService, GenerativeService, InputComponent, PapControlDirective, PatchFormGroupValueDirective, TypeConstantEnum, TypePattern };
//# sourceMappingURL=ngx-ftx-forms.mjs.map
