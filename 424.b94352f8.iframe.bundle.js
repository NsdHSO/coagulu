(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[424],{"./ftx-forms/src/lib/ftx-forms/components/formControlEntity/form-control-entity.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>FormControlEntityComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var PapControlDirective_1,form_control_entity_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formControlEntity/form-control-entity.component.scss?ngResource"),form_control_entity_componentngResource_default=__webpack_require__.n(form_control_entity_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),multiple_input_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/multiple-input/multiple-input.component.ts"),input=__webpack_require__("./node_modules/@angular/material/fesm2022/input.mjs"),fade_in_out_directive=__webpack_require__("./ftx-forms/src/lib/ftx-forms/directive/fade-in-out.directive.ts"),form_label_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.ts");let PapControlDirective=PapControlDirective_1=class PapControlDirective{writeValue(){}registerOnChange(){}registerOnTouched(){}};var _class;PapControlDirective=PapControlDirective_1=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[sivanControl]",standalone:!0,providers:[{provide:fesm2022_forms.JU,multi:!0,useExisting:PapControlDirective_1}]})],PapControlDirective);let FormControlEntityComponent=((_class=class FormControlEntityComponent{constructor(){this.label="",this.typeInput="text",this.placeholderInput="",this.labelInput="Complete label",this.isFormArray=!1,this.toggleData=[{value:!1,description:"default"}],this.ngControl=function injectNgControl(){const ngControl=(0,core.inject)(fesm2022_forms.a5,{self:!0,optional:!0});if(!ngControl)throw new Error("Not ng Controll");if(ngControl instanceof fesm2022_forms.oH||ngControl instanceof fesm2022_forms.u||ngControl instanceof fesm2022_forms.On)return ngControl;throw new Error("Not of instance of Form Directive Name Model")}()}}).propDecorators={label:[{type:core.Input}],typeInput:[{type:core.Input}],placeholderInput:[{type:core.Input}],labelInput:[{type:core.Input}],isFormArray:[{type:core.Input}],toggleData:[{type:core.Input}]},_class);FormControlEntityComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-form-control-entity",standalone:!0,imports:[common.CommonModule,fesm2022_forms.u5,multiple_input_component.d,fesm2022_forms.UX,input.c,fade_in_out_directive.o,form_label_component.h],template:'<div class="flex justify-between items-center py-2 gap-1">\n  <ngx-form-label\n    [isFormArray]="isFormArray"\n    [label]="label"\n    [typeInput]="typeInput"\n    [labelInput]="labelInput"\n  />\n  <div\n    [ngClass]="{\n      \'col-span-1 gap-4 items-center\': typeInput === \'boolean\',\n      \'flex-1 pr-2\': typeInput !== \'boolean\' && !isFormArray,\n      \'w-full px-2\': isFormArray\n    }"\n  >\n    <ngx-multiple-input-component\n      [control]="ngControl"\n      [typeInput]="typeInput"\n      [placeholderInput]="placeholderInput"\n      [labelInput]="labelInput ?? \'\'"\n      [toggleData]="toggleData"\n    />\n    <p class="!m-0" *ngIf="labelInput && typeInput === \'boolean\'">\n      {{ labelInput }}\n    </p>\n  </div>\n</div>\n',hostDirectives:[PapControlDirective],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_control_entity_componentngResource_default()]})],FormControlEntityComponent)},"./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>FormLabelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,form_label_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.scss?ngResource"),form_label_componentngResource_default=__webpack_require__.n(form_label_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),form_badge_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.ts"),render_you_directive=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/directive/render-you.directive.ts");let FormLabelComponent=((_class=class FormLabelComponent{constructor(){this.isFormArray=!1,this.label="",this.typeInput="text",this.labelInput="Complete label",this.actionBadge=[{icon:"fa_solid:RO",side:"left",action:()=>console.log("ivan")}]}}).propDecorators={isFormArray:[{type:core.Input}],label:[{type:core.Input}],typeInput:[{type:core.Input}],labelInput:[{type:core.Input}],haveTooltip:[{type:core.Input}],descriptionEntity:[{type:core.Input}]},_class);FormLabelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-form-label",standalone:!0,imports:[common.CommonModule,icon.Ps,form_badge_component.f,render_you_directive.A],template:'<div class="flex w-60 px-5" *ngIf="(label || labelInput) && !isFormArray">\n  <p\n    [ngClass]="{ invisible: typeInput === \'boolean\' }"\n    class="flex-1 text prose prose-zinc prose-xl !mx-4 !my-0"\n    *ngIf="(label || labelInput) && !isFormArray"\n  >\n    {{ label }}\n  </p>\n\n  <div\n    *ngIf="(label || labelInput) && !isFormArray"\n    class="flex h-8 items-center"\n  >\n    <ngx-form-badge [actionBadge]="actionBadge" renderYou [element]="test" />\n  </div>\n</div>\n\n<ng-template #test>\n  <div>\n    sdasdasd\n    <div>dadasdssssssssssssssssasd</div>\n    <div>dasdasdasd</div>\n    <p>sdasdasd</p>\n    <p>sdasdasd</p>\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_label_componentngResource_default()]})],FormLabelComponent)},"./ftx-forms/src/lib/ftx-forms/directive/fade-in-out.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>FadeInOutDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_animations__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");let FadeInOutDirective=((_class=class FadeInOutDirective{constructor(){this._elementRef=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef),this._animationBuilder=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_animations__WEBPACK_IMPORTED_MODULE_1__._j)}set errorControl(control){"VALID"===control&&control||this.playAnimation()}playAnimation(){const animationFactory=this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.oB)({opacity:0,transform:"translateY(-5px)"}),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.jt)("300ms cubic-bezier(0.55, 0, 0.55, 0.2)")]);this.animationPlayer&&this.animationPlayer.destroy();const element=this._elementRef.nativeElement;this.animationPlayer=animationFactory.create(element),this.animationPlayer.play()}}).propDecorators={errorControl:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:["ngxFadeInOut"]}]},_class);FadeInOutDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[ngxFadeInOut]",standalone:!0,exportAs:"ngxFadeInOut"})],FadeInOutDirective)},"./ftx-forms/src/lib/ftx-forms/directive/patch-form-group-value.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>PatchFormGroupValueDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let PatchFormGroupValueDirective=((_class=class PatchFormGroupValueDirective{constructor(){this.formGroup={}}set ngxFormGroupValues(val){val&&this.formGroup.patchValue(val,{emitEvent:!1})}}).propDecorators={formGroup:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],ngxFormGroupValues:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);PatchFormGroupValueDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[ngxFormGroupValues]",standalone:!0})],PatchFormGroupValueDirective)},"./ftx-forms/src/lib/ftx-forms/shared/multiple-input/multiple-input.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>MultipleInputComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,multiple_input_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/multiple-input/multiple-input.component.scss?ngResource"),multiple_input_componentngResource_default=__webpack_require__.n(multiple_input_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),input=__webpack_require__("./node_modules/@angular/material/fesm2022/input.mjs"),fesm2022_checkbox=__webpack_require__("./node_modules/@angular/material/fesm2022/checkbox.mjs"),fesm2022_radio=__webpack_require__("./node_modules/@angular/material/fesm2022/radio.mjs"),form_field=__webpack_require__("./node_modules/@angular/material/fesm2022/form-field.mjs"),fade_in_out_directive=__webpack_require__("./ftx-forms/src/lib/ftx-forms/directive/fade-in-out.directive.ts"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs"),sivan_input_component=__webpack_require__("./ftx-sivan-shared/src/lib/components/input/sivan-input.component.ts");let MultipleInputComponent=((_class=class MultipleInputComponent{constructor(){this.typeInput="text",this.placeholderInput="",this.labelInput="Complete label",this.toggleData=[{value:!1,description:"default"}]}}).propDecorators={typeInput:[{type:core.Input}],placeholderInput:[{type:core.Input}],labelInput:[{type:core.Input}],toggleData:[{type:core.Input}],control:[{type:core.Input}]},_class);MultipleInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-multiple-input-component",standalone:!0,imports:[common.CommonModule,fesm2022_forms.u5,fesm2022_forms.UX,input.c,fesm2022_checkbox.p9,fesm2022_radio.Fk,fade_in_out_directive.o,sivan_input_component.p],template:'<div class="flex flex-col">\n  <ng-container [ngSwitch]="typeInput">\n    <mat-checkbox\n      *ngSwitchCase="\'boolean\'"\n      [formControl]="control.control"\n      class="border-0 flex placeholder:text-gray-400 py-1.5 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900"\n    />\n    <ng-container *ngSwitchCase="\'toggle\'">\n      <mat-radio-group [formControl]="control.control" class="flex gap-5">\n        <div *ngFor="let radio of toggleData" class="flex items-center gap-3">\n          <mat-radio-button [value]="radio.value" />\n          <p class="!m-0">{{ radio.description }}</p>\n        </div>\n      </mat-radio-group>\n    </ng-container>\n    <ng-container *ngSwitchCase="\'area\'">\n      <mat-form-field>\n        <mat-label class="text prose prose-zinc">{{ labelInput }}</mat-label>\n        <textarea\n          matInput\n          [placeholder]="placeholderInput ?? \'\'"\n          [formControl]="control.control"\n          class="font-semibold !text-xl"\n        ></textarea>\n      </mat-form-field>\n    </ng-container>\n    <sivan-input\n      *ngSwitchDefault\n      [mainControl]="control.control"\n      hintTop="TEST"\n      [placeholder]="labelInput"\n    />\n  </ng-container>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,providers:[{provide:form_field.o2,useValue:{appearance:"outline",subscriptSizing:"dynamic"}}],animations:[(0,animations.X$)("widthOpacityAnimation",[(0,animations.SB)("void",(0,animations.oB)({transform:"scaleY(0)",height:0,opacity:0})),(0,animations.SB)("*",(0,animations.oB)({transform:"scaleY(1)",opacity:1})),(0,animations.eR)("void <=> *",(0,animations.jt)("300ms ease-in"))])],styles:[multiple_input_componentngResource_default()]})],MultipleInputComponent)},"./src/app/components/contentSteps/infoUser/info-user.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InfoUserComponent:()=>InfoUserComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var info_user_componentngResource=__webpack_require__("./src/app/components/contentSteps/infoUser/info-user.component.scss?ngResource"),info_user_componentngResource_default=__webpack_require__.n(info_user_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),constants_enum=__webpack_require__("./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts"),patch_form_group_value_directive=__webpack_require__("./ftx-forms/src/lib/ftx-forms/directive/patch-form-group-value.directive.ts"),button_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts"),multiple_input_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/multiple-input/multiple-input.component.ts"),form_control_entity_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formControlEntity/form-control-entity.component.ts");var ftx_ftm_componentngResource=__webpack_require__("./ftx-ftm/src/lib/ftx-ftm/ftx-ftm.component.scss?ngResource"),ftx_ftm_componentngResource_default=__webpack_require__.n(ftx_ftm_componentngResource),service_generate_form_builder_service=__webpack_require__("./ftx-forms/src/lib/ftx-forms/service/service-generate-form-builder.service.ts"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),generative_service=__webpack_require__("./ftx-sivan-shared/src/lib/service/generative.service.ts"),sivan_input_component=__webpack_require__("./ftx-sivan-shared/src/lib/components/input/sivan-input.component.ts");let FirstUpperCasePipe=class FirstUpperCasePipe{transform(value,...args){return"string"==typeof value&&value.length>0?value.charAt(0).toUpperCase()+value.slice(1):null}};FirstUpperCasePipe=(0,tslib_es6.gn)([(0,core.Pipe)({name:"firstUpperCase",standalone:!0})],FirstUpperCasePipe);let RetrievePlaceholderPipe=class RetrievePlaceholderPipe{transform(value,...args){if(value){if(void 0!==args[2]){const group=value.values.find((v=>v.label?v.label.toLowerCase()===args[2]:v));if(group.values)return group.values.find((v=>void 0!==v.label?v.label.toLowerCase()===args[1]:v))[args[0]]||group[args[0]];if(group.bulkValues)return group.bulkValues[args[1]].bulkValues[args[3]][args[0]]||"Nothing"}const key=value.values?.find((v=>v.label?v.label.toLowerCase()===args[1].toLowerCase():v));return void 0===key||key||key[args[0]]?key?key[args[0]]:"":(console.warn(`Please provide a ${args[0]} in data Store! On ${args[1]}`),"")}return""}};RetrievePlaceholderPipe=(0,tslib_es6.gn)([(0,core.Pipe)({name:"retrievePlaceholder",standalone:!0})],RetrievePlaceholderPipe);var startWith=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js"),distinctUntilChanged=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js"),debounceTime=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),switchMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");let ValidatorConfigPipe=class ValidatorConfigPipe{transform(value,...args){if(value.values){const entity=value.values.find((v=>v.label?v.label.toLowerCase()===args[1].toLowerCase():v));if(entity?.validator?.field){let valid=!1;return args[0].controls[entity?.validator?.field].statusChanges.pipe((0,startWith.O)(args[0].controls[entity?.validator?.field].status),(0,distinctUntilChanged.x)(),(0,debounceTime.b)(500),(0,tap.b)((v=>{valid=v==="Valid".toUpperCase()})),(0,switchMap.w)((v=>(0,of.of)(valid))))}if(entity?.values){let valid=!0;const entityFromGroup=entity.values.find((v=>v.label?.toLowerCase()===args[2].toLowerCase()));if(entityFromGroup?.validator?.field)return args[0].controls[entityFromGroup?.validator?.field].statusChanges.pipe((0,startWith.O)(args[0].controls[entityFromGroup?.validator?.field].status),(0,distinctUntilChanged.x)(),(0,debounceTime.b)(500),(0,tap.b)((v=>{valid=v==="Valid".toUpperCase()})),(0,switchMap.w)((v=>(0,of.of)(valid))))}}return(0,of.of)(!0)}};ValidatorConfigPipe=(0,tslib_es6.gn)([(0,core.Pipe)({name:"validatorConfig",standalone:!0})],ValidatorConfigPipe);var _class,animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");let FtxFtmComponent=((_class=class FtxFtmComponent{constructor(){this.generateFormBuilderService=(0,core.inject)(service_generate_form_builder_service.s),this.generativeService=(0,core.inject)(generative_service.y),this.generateFormTrigger=(0,of.of)("t").pipe((0,tap.b)((v=>this.formData=this.generateFormBuilderService.buildFormFromJson(this.dataSource))))}submit(){console.log(this.formData?.getRawValue()),this.formData}name(param){console.log(param)}}).propDecorators={dataSource:[{type:core.Input,args:[{required:!0}]}]},_class);FtxFtmComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"coagulu-ftx-ftm",standalone:!0,imports:[common.CommonModule,fesm2022_forms.UX,button_component.r,sivan_input_component.p,FirstUpperCasePipe,RetrievePlaceholderPipe,ValidatorConfigPipe],template:'<form\n  *ngIf="generateFormTrigger | async"\n  [formGroup]="formData"\n  (ngSubmit)="submit()"\n  class="p-3 flex flex-col gap-5 bg-slate-200 ngx-forms-form-wrapper rounded-br-lg rounded-bl-lg"\n>\n  <ng-container\n    *ngFor="let control of formData.controls | keyvalue; let i = index"\n  >\n    \x3c!--FormControl--\x3e\n    <ng-container\n      *ngIf="\n        generateFormBuilderService.getCustomFromControlType(\n          formData.get(control.key)\n        ) === \'FormControl\'\n      "\n    >\n      <div\n        class="flex items-center"\n        *ngIf="dataSource | validatorConfig : formData : control.key | async"\n      >\n        <div class="max-w-42 w-32 h-10">{{ control.key | firstUpperCase }}</div>\n        <div class="grid grid-flow-col gap-4 ftm-group-container-entity">\n          <sivan-input\n            class="w-full"\n            [mainControl]="formData?.get(control.key)"\n            [placeholder]="\n              dataSource | retrievePlaceholder : \'placeholder\' : control.key\n            "\n            [hintTop]="\n              dataSource | retrievePlaceholder : \'labelHint\' : control.key\n            "\n          />\n        </div>\n      </div>\n    </ng-container>\n    \x3c!--FormGroup--\x3e\n    <ng-container\n      *ngIf="\n        generateFormBuilderService.getCustomFromControlType(\n          formData.get(control.key)\n        ) === \'FormGroup\'\n      "\n    >\n      <div class="flex items-center">\n        <div class="max-w-42 w-32">{{ control.key }}</div>\n        <div class="grid grid-flow-col gap-4 ftm-group-container-entity">\n          <ng-container\n            *ngFor="let group of formData.get(control.key).controls | keyvalue"\n          >\n            <div\n              @fadeInOut\n              class="w-full"\n              *ngIf="\n                dataSource\n                  | validatorConfig : formData : control.key : group.key\n                  | async\n              "\n            >\n              <sivan-input\n                [mainControl]="formData.get(control.key).get(group.key)"\n                [placeholder]="\n                  dataSource\n                    | retrievePlaceholder\n                      : \'placeholder\'\n                      : group.key\n                      : control.key\n                "\n                [hintTop]="\n                  dataSource\n                    | retrievePlaceholder\n                      : \'labelHint\'\n                      : group.key\n                      : control.key\n                "\n              />\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container\n      *ngIf="\n        generateFormBuilderService.getCustomFromControlType(\n          formData.get(control.key)\n        ) === \'FormArray\'\n      "\n    >\n      <div class="flex items-center">\n        <div class="max-w-42 w-32">{{ control.key }}</div>\n        <div class="grid grid-flow-col gap-4 ftm-group-container-entity">\n          <ng-container\n            *ngFor="let array of formData.get(control.key).controls | keyvalue"\n          >\n            <ng-container\n              *ngIf="\n                generateFormBuilderService.getCustomFromControlType(\n                  formData.get(control.key).get(array.key)\n                ) === \'FormControl\'\n              "\n            >\n              <div @fadeInOut class="w-full">\n                <sivan-input\n                  [mainControl]="formData.get(control.key).get(array.key)"\n                  [placeholder]="\'d\'"\n                  [hintTop]="\'s\'"\n                />\n              </div>\n            </ng-container>\n            <ng-container\n              *ngIf="\n                generateFormBuilderService.getCustomFromControlType(\n                  formData.get(control.key).get(array.key)\n                ) === \'FormArray\'\n              "\n            >\n              <ng-container\n                *ngFor="\n                  let nestedArray of formData.get(control.key).get(array.key)\n                    .controls | keyvalue\n                "\n              >\n                <sivan-input\n                  [mainControl]="\n                    formData\n                      .get(control.key)\n                      .get(array.key)\n                      .get(nestedArray.key)\n                  "\n                  [placeholder]="\n                    dataSource\n                      | retrievePlaceholder\n                        : \'placeholder\'\n                        : array.key\n                        : control.key\n                        : nestedArray.key\n                  "\n                  [hintTop]="\n                    dataSource\n                      | retrievePlaceholder\n                        : \'labelHint\'\n                        : array.key\n                        : control.key\n                        : nestedArray.key\n                  "\n                />\n              </ng-container>\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n  </ng-container>\n  <ngx-button-component\n    class="bg-white p-2"\n    [disable]="formData.pristine || formData.invalid"\n    roundedFull="rounded-md"\n    >Submit\n  </ngx-button-component>\n</form>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,animations:[(0,animations.X$)("fadeInOut",[(0,animations.SB)("void",(0,animations.oB)({height:"0",opacity:0,zIndex:105})),(0,animations.eR)(":enter",[(0,animations.oB)({height:"0",opacity:0,zIndex:105}),(0,animations.jt)("200ms ease-out",(0,animations.oB)({height:"*",opacity:1,zIndex:105}))]),(0,animations.eR)(":leave",[(0,animations.oB)({height:"*",opacity:1}),(0,animations.jt)("200ms ease-in",(0,animations.oB)({height:"0",opacity:0}))])])],styles:[ftx_ftm_componentngResource_default()]})],FtxFtmComponent);let InfoUserComponent=class InfoUserComponent{constructor(){this.jsonData={values:[{label:"name",value:"IVan",validators:[{type:constants_enum.j1.REQUIRED}],placeholder:"Isvan Avramescu",labelHint:"Name for User",validator:{field:"address"},updateOn:"blur"},{label:"email",value:"sa@dsa.com",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.EMAIL}],placeholder:"Email Address",labelHint:"ivan@entrt.country"},{label:"TESTa",value:"201",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_NUMBER,errorMsg:"Only Integer Number"}],labelHint:"age"},{label:"summary",value:!0,labelHint:"Summary Type",typeInput:"boolean",validators:[{type:constants_enum.j1.REQUIRED}]},{label:"Adult",value:!0,labelHint:"Is Adult",typeInput:"toggle",valueToggleShow:[{value:!1,description:"No"},{value:!0,description:"Yes"}]},{label:"ARE",value:"dasdasd",labelHint:"Area Data",placeholder:"Are Text Lore ipsum",typeInput:"area",description:{text:"Lorem Ipsum Text description you are in the best form builder create evere"}},{labelHint:"Address street",label:"address",values:[{label:"street",value:"Ivan",labelHint:"Street Number 1",placeholder:"Street Number 1",validators:[{type:constants_enum.j1.REQUIRED,errorMsg:"This field it is must"}]},{label:"streetIvan",value:"Ivan2",validators:[{type:constants_enum.j1.REQUIRED,errorMsg:"This field it is must"}],description:{text:"Lorem Ipsum Text description you are in the best form builder create evere"}}]},{label:"personalData",labelHint:"Personal Data",placeholder:"Hey you",values:[{label:"cnp",labelHint:"Personal Nested",value:"123141232311",placeholder:"Your CNP",validators:[{type:constants_enum.j1.MIN,option:20}],validator:{field:"email"}},{label:"ds",value:"TEST",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}],validator:{field:"email"}},{label:"ds2",value:"TEST",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]},{label:"ds3",value:"TEST",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]},{label:"ds3",value:"sdasd",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]},{label:"ds6",value:"gasd",placeholder:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]},{label:"ds25",value:"TssEST",placeholder:"Personal TEst25",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]}]},{labelHint:"Course what user take",label:"course",bulkValues:[{value:"ss",label:"angularPatterns",labelHint:"Summary TEST"},{value:"ss",label:"angularPatterns",labelHint:"Summary TEST",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"},{type:constants_enum.j1.MIN_CHAR,option:2,errorMsg:"Must filled with min 2 char"}]},{value:"ss",label:"angularPatterns",labelHint:"Summary TEST",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"},{type:constants_enum.j1.MIN_CHAR,option:2,errorMsg:"Must filled with min 2 char"}]},{value:"555",label:"reactPatterns"}]},{labelHint:"Name for User",label:"age",bulkValues:[{value:"2312",label:"angularPatterns"},{value:"321",label:"reactPatterns"}]},{label:"home",labelHint:"Name for Home",bulkValues:[{value:"444",label:"Miki"},{label:"Ivan",bulkValues:[{value:1231,validators:[{type:constants_enum.j1.REQUIRED}],labelHint:"Childrens",placeholder:"Avram Avramescu"},{label:"train",value:232,placeholder:"NAMING",labelHint:"Number"}]},{label:"Ivan2",bulkValues:[{value:null,validators:[{type:constants_enum.j1.REQUIRED}],labelHint:"Childrens"},{label:"train",value:232,placeholder:"NAMING",labelHint:"Number"}]}]}]}}};InfoUserComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"info-user",standalone:!0,imports:[common.CommonModule,fesm2022_forms.UX,patch_form_group_value_directive.Z,button_component.r,multiple_input_component.d,form_control_entity_component.e,FtxFtmComponent],template:'<div class="p-4">\n  <coagulu-ftx-ftm [dataSource]="jsonData" />\n</div>\n',styles:[info_user_componentngResource_default()]})],InfoUserComponent)},"./ftx-forms/src/lib/ftx-forms/components/formControlEntity/form-control-entity.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-forms/src/lib/ftx-forms/shared/multiple-input/multiple-input.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-ftm/src/lib/ftx-ftm/ftx-ftm.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".ftm-group-container-entity {\n  width: -webkit-fill-available;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/contentSteps/infoUser/info-user.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);