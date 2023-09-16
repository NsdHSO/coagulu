(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[158,553],{"./ftx-forms/src/lib/ftx-forms/components/formControlEntity/form-control-entity.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>FormControlEntityComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var PapControlDirective_1,form_control_entity_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formControlEntity/form-control-entity.component.scss?ngResource"),form_control_entity_componentngResource_default=__webpack_require__.n(form_control_entity_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),multiple_input_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/multiple-input/multiple-input.component.ts"),input=__webpack_require__("./node_modules/@angular/material/fesm2022/input.mjs"),fade_in_out_directive=__webpack_require__("./ftx-forms/src/lib/ftx-forms/directive/fade-in-out.directive.ts"),form_label_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.ts");let PapControlDirective=PapControlDirective_1=class PapControlDirective{writeValue(){}registerOnChange(){}registerOnTouched(){}};var _class;PapControlDirective=PapControlDirective_1=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[sivanControl]",standalone:!0,providers:[{provide:fesm2022_forms.JU,multi:!0,useExisting:PapControlDirective_1}]})],PapControlDirective);let FormControlEntityComponent=((_class=class FormControlEntityComponent{constructor(){this.label="",this.typeInput="text",this.placeholderInput="",this.labelInput="Complete label",this.isFormArray=!1,this.toggleData=[{value:!1,description:"default"}],this.ngControl=function injectNgControl(){const ngControl=(0,core.inject)(fesm2022_forms.a5,{self:!0,optional:!0});if(!ngControl)throw new Error("Not ng Controll");if(ngControl instanceof fesm2022_forms.oH||ngControl instanceof fesm2022_forms.u||ngControl instanceof fesm2022_forms.On)return ngControl;throw new Error("Not of instance of Form Directive Name Model")}()}}).propDecorators={label:[{type:core.Input}],typeInput:[{type:core.Input}],placeholderInput:[{type:core.Input}],labelInput:[{type:core.Input}],isFormArray:[{type:core.Input}],toggleData:[{type:core.Input}]},_class);FormControlEntityComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-form-control-entity",standalone:!0,imports:[common.CommonModule,fesm2022_forms.u5,multiple_input_component.d,fesm2022_forms.UX,input.c,fade_in_out_directive.o,form_label_component.h],template:'<div class="flex justify-between items-center py-2 gap-1">\n  <ngx-form-label\n    [isFormArray]="isFormArray"\n    [label]="label"\n    [typeInput]="typeInput"\n    [labelInput]="labelInput"\n  />\n  <div\n    [ngClass]="{\n      \'col-span-1 gap-4 items-center\': typeInput === \'boolean\',\n      \'flex-1 pr-2\': typeInput !== \'boolean\' && !isFormArray,\n      \'w-full px-2\': isFormArray\n    }"\n  >\n    <ngx-multiple-input-component\n      [control]="ngControl"\n      [typeInput]="typeInput"\n      [placeholderInput]="placeholderInput"\n      [labelInput]="labelInput ?? \'\'"\n      [toggleData]="toggleData"\n    />\n    <p class="!m-0" *ngIf="labelInput && typeInput === \'boolean\'">\n      {{ labelInput }}\n    </p>\n  </div>\n</div>\n',hostDirectives:[PapControlDirective],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_control_entity_componentngResource_default()]})],FormControlEntityComponent)},"./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>FormLabelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,form_label_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.scss?ngResource"),form_label_componentngResource_default=__webpack_require__.n(form_label_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),form_badge_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.ts"),render_you_directive=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/directive/render-you.directive.ts");let FormLabelComponent=((_class=class FormLabelComponent{constructor(){this.isFormArray=!1,this.label="",this.typeInput="text",this.labelInput="Complete label",this.actionBadge=[{icon:"fa_solid:RO",side:"left",action:()=>console.log("ivan")}]}}).propDecorators={isFormArray:[{type:core.Input}],label:[{type:core.Input}],typeInput:[{type:core.Input}],labelInput:[{type:core.Input}],haveTooltip:[{type:core.Input}],descriptionEntity:[{type:core.Input}]},_class);FormLabelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-form-label",standalone:!0,imports:[common.CommonModule,icon.Ps,form_badge_component.f,render_you_directive.A],template:'<div class="flex w-60 px-5" *ngIf="(label || labelInput) && !isFormArray">\n  <p\n    [ngClass]="{ invisible: typeInput === \'boolean\' }"\n    class="flex-1 text prose prose-zinc prose-xl !mx-4 !my-0"\n    *ngIf="(label || labelInput) && !isFormArray"\n  >\n    {{ label }}\n  </p>\n\n  <div\n    *ngIf="(label || labelInput) && !isFormArray"\n    class="flex h-8 items-center"\n  >\n    <ngx-form-badge [actionBadge]="actionBadge" renderYou [element]="test" />\n  </div>\n</div>\n\n<ng-template #test>\n  <div>\n    sdasdasd\n    <div>dadasdssssssssssssssssasd</div>\n    <div>dasdasdasd</div>\n    <p>sdasdasd</p>\n    <p>sdasdasd</p>\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_label_componentngResource_default()]})],FormLabelComponent)},"./ftx-forms/src/lib/ftx-forms/directive/patch-form-group-value.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>PatchFormGroupValueDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let PatchFormGroupValueDirective=((_class=class PatchFormGroupValueDirective{constructor(){this.formGroup={}}set ngxFormGroupValues(val){val&&this.formGroup.patchValue(val,{emitEvent:!1})}}).propDecorators={formGroup:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],ngxFormGroupValues:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);PatchFormGroupValueDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[ngxFormGroupValues]",standalone:!0})],PatchFormGroupValueDirective)},"./ftx-forms/src/lib/ftx-forms/ftx-forms.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>FtxFormsComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,ftx_forms_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/ftx-forms.component.scss?ngResource"),ftx_forms_componentngResource_default=__webpack_require__.n(ftx_forms_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),form_control_entity_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formControlEntity/form-control-entity.component.ts"),button_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts"),service_generate_form_builder_service=__webpack_require__("./ftx-forms/src/lib/ftx-forms/service/service-generate-form-builder.service.ts"),generative_service=__webpack_require__("./ftx-sivan-shared/src/lib/service/generative.service.ts");let FtxFormsComponent=((_class=class FtxFormsComponent{constructor(){this.dynamicForm={},this.submitEvent=new core.EventEmitter,this.generativeService=(0,core.inject)(generative_service.y),this.generateFormBuilderService=(0,core.inject)(service_generate_form_builder_service.s),this.controlMapping=[],this._jsonData={}}get jsonData(){return this._jsonData}set jsonData(jsonData){if(this._jsonData=jsonData,jsonData.values)for(const item of jsonData.values){const label=item.label?.toLowerCase();item?.label&&(this.controlMapping[label??""]=item);[...item.values??[],...item.bulkValues??[]].forEach((values=>{values.bulkValues&&values.bulkValues.forEach((c=>{this.controlMapping[c.label??""]=c}));const label=values.label?.toLowerCase();this.controlMapping[label??""]=values}))}}}).propDecorators={dynamicForm:[{type:core.Input}],submitEvent:[{type:core.Output}],jsonData:[{type:core.Input}]},_class);FtxFormsComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-ftx-forms",standalone:!0,imports:[common.CommonModule,fesm2022_forms.UX,form_control_entity_component.e,button_component.r],template:'<form\n  [formGroup]="dynamicForm"\n  (ngSubmit)="submitEvent.emit(true)"\n  class="p-3 flex flex-col gap-0.5 bg-slate-200 ngx-forms-form-wrapper rounded-br-lg rounded-bl-lg"\n>\n  <ng-container\n    *ngTemplateOutlet="\n      renderControlRecursive;\n      context: {\n        control: dynamicForm,\n        controlKey: null,\n        is: false\n      }\n    "\n  />\n\n  <ngx-button-component\n    class="bg-white p-2"\n    [disable]="dynamicForm.pristine || dynamicForm.invalid"\n    roundedFull="rounded-md"\n    >Submit\n  </ngx-button-component>\n</form>\n\n<ng-template\n  #renderControlRecursive\n  let-control="control"\n  let-controlKey="controlKey"\n  let-isArray="isArray"\n>\n  <ng-container\n    [ngSwitch]="generateFormBuilderService.getCustomFromControlType(control)"\n  >\n    \x3c!-- Render FormArray --\x3e\n    <ng-container *ngSwitchCase="\'FormArray\'">\n      <div\n        class="flex"\n        [ngClass]="{ \'flex-col gap-0.5\': control.controls[1].length }"\n      >\n        <ng-container\n          *ngFor="\n            let arrayControl of control.controls;\n            trackBy: generativeService.trackBy;\n            let index = index\n          "\n        >\n          <ng-container\n            *ngTemplateOutlet="\n              renderControlRecursive;\n              context: {\n                control: arrayControl,\n                controlKey: controlKey,\n                isArray: index\n              }\n            "\n          />\n        </ng-container>\n      </div>\n    </ng-container>\n    \x3c!-- Render FormGroup --\x3e\n    <ng-container *ngSwitchCase="\'FormGroup\'">\n      <ng-container\n        *ngFor="\n          let groupControl of control.controls | keyvalue;\n          trackBy: generativeService.trackBy\n        "\n      >\n        <ng-container\n          *ngTemplateOutlet="\n            renderControlRecursive;\n            context: {\n              control: groupControl.value,\n              controlKey: groupControl.key,\n            }\n          "\n        />\n      </ng-container>\n    </ng-container>\n    \x3c!-- Render FormControl --\x3e\n    <ng-container *ngSwitchDefault>\n      <div class="w-full bg-white">\n        <ngx-form-control-entity\n          [isFormArray]="isArray"\n          [formControl]="control"\n          [labelInput]="controlMapping[controlKey]?.labelHint"\n          [label]="controlKey"\n          [placeholderInput]="controlMapping[controlKey]?.placeholder"\n          [toggleData]="controlMapping[controlKey]?.valueToggleShow"\n          [typeInput]="controlMapping[controlKey]?.typeInput"\n        />\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #element>tete</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[ftx_forms_componentngResource_default()]})],FtxFormsComponent)},"./ftx-forms/src/lib/ftx-forms/service/service-generate-form-builder.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>GenerateFormBuilderService});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),constants_enum=__webpack_require__("./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts");let ValidatorService=class ValidatorService{requiredValidator(control,errorMsg){return control.value?null:{error:errorMsg||"This field Is must"}}minValidator(control,option,errorMsg){return control.value>=option?null:{error:errorMsg??!0}}minCharValidator(control,option,errorMsg){return String(control.value).length>=option||0===String(control.value).length?null:{error:errorMsg??!0}}patternValidator(control,optionRegex,errorMsg){const pattern=new RegExp(optionRegex);return pattern instanceof RegExp?pattern.test(control.value)?null:{error:errorMsg??!0}:null}emailValidator(control,errorMsg){if(!control.value)return null;return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(control.value)?null:{error:errorMsg??!0}}validatorGenerators(){return{[constants_enum.j1.REQUIRED]:(control,_,errorMsg)=>this.requiredValidator(control,errorMsg),[constants_enum.j1.MIN]:(control,option,errorMsg)=>{if("number"==typeof option)return this.minValidator(control,option,errorMsg);throw new Error("Invalid option for this validator")},[constants_enum.j1.MIN_CHAR]:(control,option,errorMsg)=>{if("number"==typeof option)return this.minCharValidator(control,option,errorMsg);throw new Error("Invalid option for this validator")},[constants_enum.j1.PATTERN]:(control,option,errorMsg)=>{if("string"==typeof option||option instanceof RegExp)return this.patternValidator(control,option,errorMsg);throw new Error("Invalid option for this validator")},[constants_enum.j1.EMAIL]:(control,_,errorMsg)=>this.emailValidator(control,errorMsg)}}};ValidatorService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],ValidatorService);let GenerateFormBuilderService=class GenerateFormBuilderService{constructor(){this._fb=(0,core.inject)(fesm2022_forms.qu),this._validatorService=(0,core.inject)(ValidatorService)}buildFormFromJson(jsonData){return console.log(this.buildFormGenerate(jsonData)),this.buildFormGenerate(jsonData)}extractValidator(item){let validators=[];return item.validators&&item.validators.length>0&&(validators=item.validators.map((validatorConfig=>this.getValidator(validatorConfig)))),validators}getValidator(validatorConfig){const{type,option,errorMsg}=validatorConfig,validatorGenerator=this._validatorService.validatorGenerators();if(type in validatorGenerator)return control=>validatorGenerator[type](control,option,errorMsg??"");throw new Error("Please Implement this Validator")}buildFormGenerate(data){if(data.values){const group={};return data.values.forEach((item=>{const label=item.label?.toLowerCase();if(item.values)group[label??""]=this.buildFormGenerate(item);else if(item.bulkValues)group[label??""]=this._fb.array(item.bulkValues.map((subItem=>this.buildFormGenerate(subItem))));else{const validators=this.extractValidator(item);group[label??""]=this.setFormControl(item,validators)}})),this._fb.group(group)}if(data.bulkValues)return this._fb.array(data.bulkValues.map((subItem=>this.buildFormGenerate(subItem))));{const validators=this.extractValidator(data);return this.setFormControl(data,validators)}}setFormControl(data,validators){return this._fb.control(data.value||null,{validators,updateOn:data.updateOn})}getCustomFromControlType(control){return(0,fesm2022_forms.em)(control)?"FormArray":(0,fesm2022_forms.Yb)(control)?"FormGroup":"FormControl"}};GenerateFormBuilderService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],GenerateFormBuilderService)},"./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var ConstantsEnum,TypeConstantEnum,TypePattern;__webpack_require__.d(__webpack_exports__,{T_:()=>TypePattern,j1:()=>TypeConstantEnum}),function(ConstantsEnum){ConstantsEnum[ConstantsEnum.ZERO=0]="ZERO"}(ConstantsEnum||(ConstantsEnum={})),function(TypeConstantEnum){TypeConstantEnum.EMAIL="email",TypeConstantEnum.MAX="max",TypeConstantEnum.MIN="min",TypeConstantEnum.NUMBER="number",TypeConstantEnum.PATTERN="pattern",TypeConstantEnum.REQUIRED="required",TypeConstantEnum.STRING="string",TypeConstantEnum.MIN_CHAR="minChar",TypeConstantEnum.ONLY_CHAR="only_char"}(TypeConstantEnum||(TypeConstantEnum={})),function(TypePattern){TypePattern.ONLY_NUMBER="^[0-9]+$",TypePattern.ONLY_CHAR="^[a-zA-Z\\s]*$"}(TypePattern||(TypePattern={}))},"./src/app/components/contentSteps/reserveBook/reserve-book.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"ReserveBookComponent",component:__webpack_require__("./src/app/components/contentSteps/reserveBook/reserve-book.component.ts").ReserveBookComponent},Primary={render:args=>({props:args}),args:{}}},"./src/app/components/contentSteps/reserveBook/reserve-book.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ReserveBookComponent:()=>ReserveBookComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var reserve_book_componentngResource=__webpack_require__("./src/app/components/contentSteps/reserveBook/reserve-book.component.scss?ngResource"),reserve_book_componentngResource_default=__webpack_require__.n(reserve_book_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),service_generate_form_builder_service=__webpack_require__("./ftx-forms/src/lib/ftx-forms/service/service-generate-form-builder.service.ts"),constants_enum=__webpack_require__("./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts"),multiple_input_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/multiple-input/multiple-input.component.ts"),button_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts"),form_control_entity_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formControlEntity/form-control-entity.component.ts"),patch_form_group_value_directive=__webpack_require__("./ftx-forms/src/lib/ftx-forms/directive/patch-form-group-value.directive.ts"),ftx_forms_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/ftx-forms.component.ts"),using=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/using.js"),debounceTime=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),shareReplay=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js"),ngrx_store=__webpack_require__("./node_modules/@ngrx/store/fesm2022/ngrx-store.mjs"),stepper_service=__webpack_require__("./src/app/components/services/stepper.service.ts"),_state=__webpack_require__("./src/app/+state/index.ts");let ReserveBookComponent=class ReserveBookComponent{constructor(){this._stepperStore=(0,core.inject)(ngrx_store.yh),this.generateFormBuilderService=(0,core.inject)(service_generate_form_builder_service.s),this.jsonData={values:[{label:"name",value:"IVan",validators:[{type:constants_enum.j1.REQUIRED}],placeholder:"Isvan Avramescu",labelHint:"Name for User"},{label:"email",value:"s@gm.co",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.EMAIL}],labelHint:"Email Address"},{label:"TESTa",value:"201",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_NUMBER,errorMsg:"Only Integer Number"}],labelHint:"age"},{label:"summary",value:!0,labelHint:"Summary Type",typeInput:"boolean",validators:[{type:constants_enum.j1.REQUIRED}]},{label:"Adult",value:!0,labelHint:"Is Adult",typeInput:"toggle",valueToggleShow:[{value:!1,description:"No"},{value:!0,description:"Yes"}]},{label:"ARE",value:"dasdasd",labelHint:"Area Data",typeInput:"area",description:{text:"Lorem Ipsum Text description you are in the best form builder create evere"}},{labelHint:"Address street",label:"address",values:[{label:"street",value:"Ivan",labelHint:"Street Number 1",placeholder:"Street Number 1",validators:[{type:constants_enum.j1.REQUIRED,errorMsg:"This field it is must"}]},{label:"streetIvan",value:"Ivan2",validators:[{type:constants_enum.j1.REQUIRED,errorMsg:"This field it is must"}],description:{text:"Lorem Ipsum Text description you are in the best form builder create evere"}}]},{label:"personalData",labelHint:"Personal Data",values:[{label:"cnp",labelHint:"Personal Nested",value:"123141232311",validators:[{type:constants_enum.j1.MIN,option:20}]},{label:"ds",value:"TEST",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]},{label:"ds2",value:"TEST",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]},{label:"ds3",value:"TEST",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]}]},{labelHint:"Course what user take",label:"course",bulkValues:[{value:"ss",label:"angularPatterns",labelHint:"Summary TEST",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"},{type:constants_enum.j1.MIN_CHAR,option:2,errorMsg:"Must filled with min 2 char"}]},{value:"555",label:"reactPatterns"}]},{labelHint:"Name for User",label:"age",bulkValues:[{value:"2312",label:"angularPatterns"},{value:"321",label:"reactPatterns"}]},{label:"home",labelHint:"Name for Home",bulkValues:[{value:"444",label:"Miki"},{label:"Ivan",bulkValues:[{value:1231,validators:[{type:constants_enum.j1.REQUIRED}],labelHint:"Childrens"},{label:"train",value:232,placeholder:"NAMING",labelHint:"Number"}]},{label:"Barto",bulkValues:[{value:null,labelHint:"barot Childrens"},{label:"barot Childrens train",value:23222,placeholder:" barot NAMING",labelHint:"Number"}]},{label:"Barto2",bulkValues:[{value:null,labelHint:"barot Childrens"},{label:"barot Childrens train",value:23222,placeholder:" barot NAMING",labelHint:"Number"}]},{label:"Bartos",bulkValues:[{value:null,labelHint:"barot Childrens"},{label:"barot Childrens train",value:23222,placeholder:" barot NAMING",labelHint:"Number",validators:[{type:constants_enum.j1.REQUIRED}]}]}]}]},this._stepperService=(0,core.inject)(stepper_service.M),this.formValue$=(0,using.g)((()=>this.dynamicForm.valueChanges.pipe((0,debounceTime.b)(200),(0,tap.b)((values=>this._stepperStore.dispatch((0,_state.x8)(values)))),(0,tap.b)((()=>{this._stepperService.steppForm.controls.reserveBook.controls.check.patchValue(this.dynamicForm.valid)})),(0,tap.b)((()=>{this._stepperService.flagUrl$.next("reserveBook")}))).subscribe()),(()=>this._stepperStore.select(_state.Cv))).pipe((0,shareReplay.d)())}ngOnInit(){this.dynamicForm=this.generateFormBuilderService.buildFormFromJson(this.jsonData)}onSubmit(){this.dynamicForm.valid&&console.log(this.dynamicForm.getRawValue())}};ReserveBookComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"reserve-book",standalone:!0,imports:[common.CommonModule,fesm2022_forms.UX,multiple_input_component.d,button_component.r,form_control_entity_component.e,patch_form_group_value_directive.Z,ftx_forms_component.z],template:'<ng-container *ngIf="formValue$ | async">\n  <ngx-ftx-forms\n    (submitEvent)="onSubmit()"\n    [dynamicForm]="dynamicForm"\n    [jsonData]="jsonData"\n  />\n</ng-container>\n',styles:[reserve_book_componentngResource_default()]})],ReserveBookComponent)},"./node_modules/rxjs/dist/esm5/internal/operators/scan.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>scan});var lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function scan(accumulator,seed){return(0,lift.e)(function scanInternals(accumulator,seed,hasSeed,emitOnNext,emitBeforeComplete){return function(source,subscriber){var hasState=hasSeed,state=seed,index=0;source.subscribe((0,OperatorSubscriber.x)(subscriber,(function(value){var i=index++;state=hasState?accumulator(state,value,i):(hasState=!0,value),emitOnNext&&subscriber.next(state)}),emitBeforeComplete&&function(){hasState&&subscriber.next(state),subscriber.complete()}))}}(accumulator,seed,arguments.length>=2,!0))}},"./ftx-forms/src/lib/ftx-forms/components/formControlEntity/form-control-entity.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-forms/src/lib/ftx-forms/ftx-forms.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"form.ngx-forms-form-wrapper > div:first-child {\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem\n}\nform.ngx-forms-form-wrapper > :last-child {\n    border-bottom-left-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/contentSteps/reserveBook/reserve-book.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);