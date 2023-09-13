(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[956],{"./ftx-forms/src/lib/ftx-forms/service/service-generate-form-builder.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>GenerateFormBuilderService});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),constants_enum=__webpack_require__("./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts");let ValidatorService=class ValidatorService{requiredValidator(control,errorMsg){return control.value?null:{error:errorMsg||"This field Is must"}}minValidator(control,option,errorMsg){return control.value>=option?null:{error:errorMsg??!0}}minCharValidator(control,option,errorMsg){return String(control.value).length>=option||0===String(control.value).length?null:{error:errorMsg??!0}}patternValidator(control,optionRegex,errorMsg){const pattern=new RegExp(optionRegex);return pattern instanceof RegExp?pattern.test(control.value)?null:{error:errorMsg??!0}:null}emailValidator(control,errorMsg){if(!control.value)return null;return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(control.value)?null:{error:errorMsg??!0}}validatorGenerators(){return{[constants_enum.j1.REQUIRED]:(control,_,errorMsg)=>this.requiredValidator(control,errorMsg),[constants_enum.j1.MIN]:(control,option,errorMsg)=>{if("number"==typeof option)return this.minValidator(control,option,errorMsg);throw new Error("Invalid option for this validator")},[constants_enum.j1.MIN_CHAR]:(control,option,errorMsg)=>{if("number"==typeof option)return this.minCharValidator(control,option,errorMsg);throw new Error("Invalid option for this validator")},[constants_enum.j1.PATTERN]:(control,option,errorMsg)=>{if("string"==typeof option||option instanceof RegExp)return this.patternValidator(control,option,errorMsg);throw new Error("Invalid option for this validator")},[constants_enum.j1.EMAIL]:(control,_,errorMsg)=>this.emailValidator(control,errorMsg)}}};ValidatorService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],ValidatorService);let GenerateFormBuilderService=class GenerateFormBuilderService{constructor(){this._fb=(0,core.inject)(fesm2022_forms.qu),this._validatorService=(0,core.inject)(ValidatorService)}buildFormFromJson(jsonData){return console.log(this.buildFormGenerate(jsonData)),this.buildFormGenerate(jsonData)}extractValidator(item){let validators=[];return item.validators&&item.validators.length>0&&(validators=item.validators.map((validatorConfig=>this.getValidator(validatorConfig)))),validators}getValidator(validatorConfig){const{type,option,errorMsg}=validatorConfig,validatorGenerator=this._validatorService.validatorGenerators();if(type in validatorGenerator)return control=>validatorGenerator[type](control,option,errorMsg??"");throw new Error("Please Implement this Validator")}buildFormGenerate(data){if(data.values){const group={};return data.values.forEach((item=>{const label=item.label?.toLowerCase();if(item.values)group[label??""]=this.buildFormGenerate(item);else if(item.bulkValues)group[label??""]=this._fb.array(item.bulkValues.map((subItem=>this.buildFormGenerate(subItem))));else{const validators=this.extractValidator(item);group[label??""]=this._fb.control(item.value||null,validators)}})),this._fb.group(group)}if(data.bulkValues)return this._fb.array(data.bulkValues.map((subItem=>this.buildFormGenerate(subItem))));{const validators=this.extractValidator(data);return this._fb.control(data.value||null,validators)}}getCustomFromControlType(control){return(0,fesm2022_forms.em)(control)?"FormArray":(0,fesm2022_forms.Yb)(control)?"FormGroup":"FormControl"}};GenerateFormBuilderService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],GenerateFormBuilderService)},"./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var ConstantsEnum,TypeConstantEnum,TypePattern;__webpack_require__.d(__webpack_exports__,{T_:()=>TypePattern,j1:()=>TypeConstantEnum}),function(ConstantsEnum){ConstantsEnum[ConstantsEnum.ZERO=0]="ZERO"}(ConstantsEnum||(ConstantsEnum={})),function(TypeConstantEnum){TypeConstantEnum.EMAIL="email",TypeConstantEnum.MAX="max",TypeConstantEnum.MIN="min",TypeConstantEnum.NUMBER="number",TypeConstantEnum.PATTERN="pattern",TypeConstantEnum.REQUIRED="required",TypeConstantEnum.STRING="string",TypeConstantEnum.MIN_CHAR="minChar",TypeConstantEnum.ONLY_CHAR="only_char"}(TypeConstantEnum||(TypeConstantEnum={})),function(TypePattern){TypePattern.ONLY_NUMBER="^[0-9]+$",TypePattern.ONLY_CHAR="^[a-zA-Z\\s]*$"}(TypePattern||(TypePattern={}))},"./ftx-sivan-shared/src/lib/components/input/sivan-input.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>SivanInputComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,sivan_input_componentngResource=__webpack_require__("./ftx-sivan-shared/src/lib/components/input/sivan-input.component.scss?ngResource"),sivan_input_componentngResource_default=__webpack_require__.n(sivan_input_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),scroll_hint_directive=__webpack_require__("./ftx-sivan-shared/src/lib/directive/scroll-hint.directive.ts"),outline_directive=__webpack_require__("./ftx-sivan-shared/src/lib/directive/outline.directive.ts"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),ftx_tooltip_component=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.ts"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs"),generative_service=__webpack_require__("./ftx-sivan-shared/src/lib/service/generative.service.ts");let SivanInputComponent=((_class=class SivanInputComponent{constructor(){this.optionis=[],this.isInputClick=!1,this.isInputCurrencyClick=!1,this.generative=(0,core.inject)(generative_service.y),this.changeDetectorRef=(0,core.inject)(core.ChangeDetectorRef)}set choices(options){this.optionis=options}showOption(inputElement){this.isInputClick=!this.isInputClick,inputElement&&(inputElement.focus(),this.changeDetectorRef.detectChanges())}onBlur(choice){this.isInputClick=!1,this.mainControl.setValue(choice)}selectCountry(option){this.isInputCurrencyClick=!1,this.currencyControl.setValue(option)}currencyControll(){this.isInputCurrencyClick=!this.isInputCurrencyClick}}).propDecorators={hintTop:[{type:core.Input,args:[{required:!0}]}],mainControl:[{type:core.Input}],currencyControl:[{type:core.Input}],placeholder:[{type:core.Input,args:[{required:!0}]}],colorMatIcon:[{type:core.Input}],choices:[{type:core.Input}]},_class);SivanInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sivan-input",standalone:!0,imports:[common.CommonModule,icon.Ps,fesm2022_forms.UX,ftx_tooltip_component.U,scroll_hint_directive.L],template:'<input\n  [formControl]="mainControl"\n  placeholder=" "\n  class="input-dropdown peer text !pt-[0.7rem]"\n  [ngClass]="{\n    \'!pr-[9.5rem]\': currencyControl,\n    \'text-red-500 !border-red-500\': mainControl?.errors\n  }"\n  #inputSivan\n/>\n<div\n  *ngIf="currencyControl"\n  class="absolute w-[0.5px] bg-gray-300 right-[5.5rem] h-full top-0"\n></div>\n<div\n  class="absolute w-fit !h-full top-0 min-w-[6rem] right-0"\n  *ngIf="currencyControl"\n>\n  <div\n    class="relative !h-full flex justify-center items-center"\n    (click)="currencyControll()"\n  >\n    <mat-icon\n      class="right-4 absolute"\n      [ngClass]="colorMatIcon"\n      [svgIcon]="\'fa_solid:angle-up\'"\n      [@rotateIcon]="isInputCurrencyClick ? \'up\' : \'down\'"\n    ></mat-icon>\n    <mat-icon\n      class="right-[3rem] absolute"\n      [ngClass]="colorMatIcon"\n      [svgIcon]="currencyControl.controls.icon.value"\n    ></mat-icon>\n    <span\n      class="absolute right-24 font-bold font-serif text-gray-400 dark:text-white"\n      >{{ currencyControl.controls.placeholder.value }}</span\n    >\n  </div>\n  <div *ngIf="isInputCurrencyClick">\n    <ng-container *ngTemplateOutlet="optionsTemplate"></ng-container>\n  </div>\n</div>\n<mat-icon\n  [ngClass]="colorMatIcon"\n  (click)="showOption(inputSivan)"\n  *ngIf="optionis && optionis.length > 0 && !currencyControl"\n  class="absolute right-4 top-3"\n  [svgIcon]="\'fa_solid:angle-up\'"\n  [@rotateIcon]="isInputClick ? \'up\' : \'down\'"\n></mat-icon>\n<div [@fadeInOut] *ngIf="optionis && optionis.length > 0 && isInputClick">\n  \x3c!-- Content to display when options.length > 0 --\x3e\n  <ng-container *ngTemplateOutlet="optionsTemplate"></ng-container>\n</div>\n\x3c!-- Template for when options.length > 0 --\x3e\n<ng-template #optionsTemplate>\n  <ftx-tooltip\n    [rendererTemplate]="\n      currencyControl ? optionCurrencyTemplate : optionTemplate\n    "\n  />\n</ng-template>\n\n\x3c!-- Template for when options.length is <= 0 --\x3e\n<ng-template #optionTemplate>\n  <div class="overflow-auto dark:text-white">\n    <p>Options are available:</p>\n    <ul>\n      <li\n        (click)="onBlur(option)"\n        *ngFor="let option of optionis; trackBy: generative.trackBy"\n      >\n        {{ option }}\n      </li>\n    </ul>\n  </div>\n</ng-template>\n\n\x3c!-- Template for when options.length is <= 0 --\x3e\n<ng-template #optionCurrencyTemplate>\n  <div class="overflow-auto">\n    <div\n      class="currency-flag"\n      *ngFor="let option of optionis; trackBy: generative.trackBy"\n      (click)="selectCountry(option)"\n    >\n      <mat-icon class="!w-full rounded-2xl" [svgIcon]="option.icon" />\n    </div>\n  </div>\n</ng-template>\n<div *ngIf="mainControl?.errors" class="text-red-500 absolute text-sm">\n  {{ mainControl.errors?.[\'error\']  }}\n</div>\n',hostDirectives:[{directive:outline_directive.i,inputs:["hintTop","control:mainControl","placeholder"]}],animations:[(0,animations.X$)("fadeInOut",[(0,animations.SB)("void",(0,animations.oB)({height:"0",opacity:0,zIndex:105})),(0,animations.eR)(":enter",[(0,animations.oB)({height:"0",opacity:0,zIndex:105}),(0,animations.jt)("200ms ease-out",(0,animations.oB)({height:"*",opacity:1,zIndex:105}))]),(0,animations.eR)(":leave",[(0,animations.oB)({height:"*",opacity:1}),(0,animations.jt)("200ms ease-in",(0,animations.oB)({height:"0",opacity:0}))])]),(0,animations.X$)("rotateIcon",[(0,animations.SB)("up",(0,animations.oB)({transform:"rotate(180deg) scale(1.2)"})),(0,animations.SB)("down",(0,animations.oB)({transform:"rotate(0deg)"})),(0,animations.eR)("up <=> down",(0,animations.jt)("300ms ease-out"))])],styles:[sivan_input_componentngResource_default()]})],SivanInputComponent)},"./ftx-sivan-shared/src/lib/directive/outline.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>OutlineDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js");let OutlineDirective=((_class=class OutlineDirective{constructor(){this.elementRef=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef),this.renderer2=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2),this.destroy$=new rxjs__WEBPACK_IMPORTED_MODULE_1__.x}ngOnInit(){const element=this.renderer2.createElement("span");this.renderer2.addClass(this.elementRef.nativeElement,"relative"),this.control.valueChanges?.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.x)(),(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.b)(200),(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.O)("sda"),(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.b)((inputValue=>{inputValue.length>1&&this.renderer2.appendChild(this.elementRef.nativeElement,element),this.addClassForHint(element),element.innerText!==this.placeholder&&(element.innerText=this.placeholder)})),(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.R)(this.destroy$)).subscribe(),(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.R)(element,"click").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.b)((()=>this.elementRef.nativeElement.childNodes[0].focus())),(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.R)(this.destroy$)).subscribe()}addClassForHint(element){["absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3.5","left-1","px-2","mx-2","rounded-tl","rounded-tr","bg-white","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-focus:dark:text-cyan-400","peer-focus:scale-75","peer-focus:-translate-y-6","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-placeholder-shown:dark:text-gray-400","dark:focus:top-3.5","dark:bg-gray-800","dark:text-white"].forEach((className=>{this.renderer2.addClass(element,className)}))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}}).propDecorators={hintTop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}],control:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}],placeholder:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}]},_class);OutlineDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_8__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[sivanOutline]",standalone:!0})],OutlineDirective)},"./ftx-sivan-shared/src/lib/directive/scroll-hint.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>ScrollHintDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");let ScrollHintDirective=((_class=class ScrollHintDirective{constructor(){this.elementRef=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef),this.renderer2=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2),this.pseudoElement=null,this.destroyed$=new rxjs__WEBPACK_IMPORTED_MODULE_1__.x,this.pseudoElement=this.renderer2.createElement("div"),this.renderer2.addClass(this.pseudoElement,"scroll-opacity-pseudo"),this.renderer2.appendChild(this.elementRef.nativeElement,this.pseudoElement)}onWindow($event){(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)($event.target,"scroll").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.U)((event=>event.target)),(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.x)(),(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.b)((contentElement=>{const contentScrollHeight=contentElement.scrollHeight-contentElement.offsetHeight;let opacity=contentElement.scrollTop/contentScrollHeight;opacity=+Math.min(1,Math.max(0,opacity)).toFixed(2);this.renderer2.setStyle(this.pseudoElement,"position","absolute"),this.renderer2.setStyle(this.pseudoElement,"z-index","101"),this.renderer2.setStyle(this.pseudoElement,"top","calc(100vh - 95px - 0.65rem)"),this.renderer2.setStyle(this.pseudoElement,"left","0"),this.renderer2.setStyle(this.pseudoElement,"width","100%"),this.renderer2.setStyle(this.pseudoElement,"height","40px"),this.renderer2.setStyle(this.pseudoElement,"background","linear-gradient(rgb(0 0 0 / 0%), rgb(100 116 139/var(--tw-bg-opacity)))"),this.renderer2.setStyle(this.pseudoElement,"opacity",""+(1-opacity))})),(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.R)(this.destroyed$)).subscribe()}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}).ctorParameters=()=>[],_class.propDecorators={onWindow:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,args:["scroll",["$event"]]}]},_class);ScrollHintDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_7__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[sivanScrollHint]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_7__.w6)("design:paramtypes",[])],ScrollHintDirective)},"./src/app/components/contentSteps/spendMoney/spend-money.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SpendMoneyComponent:()=>SpendMoneyComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,spend_money_componentngResource=__webpack_require__("./src/app/components/contentSteps/spendMoney/spend-money.component.scss?ngResource"),spend_money_componentngResource_default=__webpack_require__.n(spend_money_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_select=__webpack_require__("./node_modules/@angular/material/fesm2022/select.mjs"),service_generate_form_builder_service=__webpack_require__("./ftx-forms/src/lib/ftx-forms/service/service-generate-form-builder.service.ts"),constants_enum=__webpack_require__("./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts"),button_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),sivan_input_component=__webpack_require__("./ftx-sivan-shared/src/lib/components/input/sivan-input.component.ts");let SpendMoneyComponent=((_class=class SpendMoneyComponent{constructor(){this._fb=(0,core.inject)(service_generate_form_builder_service.s),this.simple=this._fb.buildFormFromJson({label:"name",value:"IVan",validators:[{type:constants_enum.j1.REQUIRED}],placeholder:"Isvan Avramescu",labelHint:"Name for User"}),this.currency=this._fb.buildFormFromJson({label:"personalData",labelHint:"Personal Data",values:[{label:"valueCurrency",labelHint:"Personal Nested",value:"123141232311",validators:[{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_NUMBER,errorMsg:"Only Integer Number"}]},{label:"currency",values:[{label:"placeholder",value:"RON"},{label:"Icon",value:"fa_solid:RO",labelHint:"Personal TEst"}],labelHint:"Personal TEst"}]})}logFrom(){console.log(this.currency)}}).ctorParameters=()=>[],_class.propDecorators={defaultTemplate:[{type:core.ViewChild,args:["default"]}]},_class);SpendMoneyComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"spend-money",standalone:!0,imports:[common.CommonModule,fesm2022_select.LD,fesm2022_forms.u5,fesm2022_forms.UX,sivan_input_component.p,button_component.r],template:'<div class="p-2 m-2 text-lg">\n  <sivan-input\n    [mainControl]="simple"\n    hintTop="TEST"\n    placeholder="Javan Iuvan"\n  />\n</div>\n<div class="p-2 m-2 text-lg">\n  <sivan-input\n    [mainControl]="simple"\n    hintTop="TEST"\n    placeholder="Javan Iuvan"\n    [choices]="[\'dasd\', \'dasda\', \'dasd\', \'asdasd\', \'dasds\', \'dasd\']"\n    colorMatIcon="text-blue-500"\n  />\n</div>\n<div class="p-2 m-2 gap-2 flex flex-col">\n  <div class="text-lg flex gap-[2rem] flex-wrap">\n    <sivan-input\n      [mainControl]="currency.controls.valuecurrency"\n      [currencyControl]="currency.controls.currency"\n      hintTop="TEST"\n      placeholder="Javan Iuvan"\n      [choices]="[\n        { icon: \'fa_solid:RO\', placeholder: \'RON\' },\n        { icon: \'fa_solid:CR\', placeholder: \'KN\' }\n      ]"\n      colorMatIcon="text-blue-500"\n    />\n    <sivan-input\n      [mainControl]="currency.controls.valuecurrency"\n      [currencyControl]="currency.controls.currency"\n      hintTop="TEST"\n      placeholder="Javan Iuvan"\n      [choices]="[\n        { icon: \'fa_solid:RO\', placeholder: \'RON\' },\n        { icon: \'fa_solid:CR\', placeholder: \'KN\' }\n      ]"\n      colorMatIcon="text-blue-500"\n    />\n    <sivan-input\n      [mainControl]="currency.controls.valuecurrency"\n      [currencyControl]="currency.controls.currency"\n      hintTop="TEST"\n      placeholder="Javan Iuvan"\n      [choices]="[\n        { icon: \'fa_solid:RO\', placeholder: \'RON\' },\n        { icon: \'fa_solid:CR\', placeholder: \'KN\' }\n      ]"\n      colorMatIcon="text-blue-500"\n    />\n    <sivan-input\n      [mainControl]="currency.controls.valuecurrency"\n      [currencyControl]="currency.controls.currency"\n      hintTop="TEST"\n      placeholder="Javan Iuvan"\n      [choices]="[\n        { icon: \'fa_solid:RO\', placeholder: \'RON\' },\n        { icon: \'fa_solid:CR\', placeholder: \'KN\' }\n      ]"\n      colorMatIcon="text-blue-500"\n    />\n    <sivan-input\n      [mainControl]="currency.controls.valuecurrency"\n      [currencyControl]="currency.controls.currency"\n      hintTop="TEST"\n      placeholder="Javan Iuvan"\n      [choices]="[\n        { icon: \'fa_solid:RO\', placeholder: \'RON\' },\n        { icon: \'fa_solid:CR\', placeholder: \'KN\' }\n      ]"\n      colorMatIcon="text-blue-500"\n    />\n  </div>\n\n  <ngx-button-component [roundedFull]="\'rounded\'" (marian)="logFrom()"\n    >TEST\n  </ngx-button-component>\n</div>\n',styles:[spend_money_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],SpendMoneyComponent)},"./ftx-sivan-shared/src/lib/components/input/sivan-input.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  position: relative;\n}\n:host ::ng-deep .mat-mdc-select-arrow {\n  display: none;\n}\n:host ::ng-deep ftx-tooltip {\n  width: 100%;\n  height: 100%;\n}\n:host ::ng-deep ftx-tooltip .tooltip-container {\n  position: absolute;\n  z-index: 50;\n  margin-left: 0px;\n  margin-right: 0px;\n  max-height: 10rem;\n  width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n  :host ::ng-deep ftx-tooltip .tooltip-container {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n  }\n}\n:host .input-dropdown {\n  z-index: 0;\n  display: block;\n  width: 100%;\n  -webkit-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  border-bottom-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  padding-bottom: 0.625rem;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-left: 1.25rem;\n  padding-right: 4rem;\n  padding-top: 0.5rem;\n}\n:host .input-dropdown:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n@media (prefers-color-scheme: dark) {\n  :host .input-dropdown {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n  :host .input-dropdown:focus {\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n    --tw-border-opacity: 1;\n    border-color: rgb(34 211 238 / var(--tw-border-opacity));\n  }\n}\n\n.currency-flag {\n  max-height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.currency-flag ::ng-deep mat-icon {\n  height: 4rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/contentSteps/spendMoney/spend-money.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);