(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[697,956],{"./ftx-forms/src/lib/ftx-forms/service/service-generate-form-builder.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>GenerateFormBuilderService});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),constants_enum=__webpack_require__("./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts");let ValidatorService=class ValidatorService{requiredValidator(control,errorMsg){return control.value?null:{error:errorMsg||"This field Is must"}}minValidator(control,option,errorMsg){return control.value>=option?null:{error:errorMsg??!0}}minCharValidator(control,option,errorMsg){return String(control.value).length>=option||0===String(control.value).length?null:{error:errorMsg??!0}}patternValidator(control,optionRegex,errorMsg){const pattern=new RegExp(optionRegex);return pattern instanceof RegExp?pattern.test(control.value)?null:{error:errorMsg??!0}:null}emailValidator(control,errorMsg){if(!control.value)return null;return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(control.value)?null:{error:errorMsg??!0}}validatorGenerators(){return{[constants_enum.j1.REQUIRED]:(control,_,errorMsg)=>this.requiredValidator(control,errorMsg),[constants_enum.j1.MIN]:(control,option,errorMsg)=>{if("number"==typeof option)return this.minValidator(control,option,errorMsg);throw new Error("Invalid option for this validator")},[constants_enum.j1.MIN_CHAR]:(control,option,errorMsg)=>{if("number"==typeof option)return this.minCharValidator(control,option,errorMsg);throw new Error("Invalid option for this validator")},[constants_enum.j1.PATTERN]:(control,option,errorMsg)=>{if("string"==typeof option||option instanceof RegExp)return this.patternValidator(control,option,errorMsg);throw new Error("Invalid option for this validator")},[constants_enum.j1.EMAIL]:(control,_,errorMsg)=>this.emailValidator(control,errorMsg)}}};ValidatorService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],ValidatorService);let GenerateFormBuilderService=class GenerateFormBuilderService{constructor(){this._fb=(0,core.inject)(fesm2022_forms.qu),this._validatorService=(0,core.inject)(ValidatorService)}buildFormFromJson(jsonData){return console.log(this.buildFormGenerate(jsonData)),this.buildFormGenerate(jsonData)}extractValidator(item){let validators=[];return item.validators&&item.validators.length>0&&(validators=item.validators.map((validatorConfig=>this.getValidator(validatorConfig)))),validators}getValidator(validatorConfig){const{type,option,errorMsg}=validatorConfig,validatorGenerator=this._validatorService.validatorGenerators();if(type in validatorGenerator)return control=>validatorGenerator[type](control,option,errorMsg??"");throw new Error("Please Implement this Validator")}buildFormGenerate(data){if(data.values){const group={};return data.values.forEach((item=>{const label=item.label?.toLowerCase();if(item.values)group[label??""]=this.buildFormGenerate(item);else if(item.bulkValues)group[label??""]=this._fb.array(item.bulkValues.map((subItem=>this.buildFormGenerate(subItem))));else{const validators=this.extractValidator(item);group[label??""]=this.setFormControl(item,validators)}})),this._fb.group(group)}if(data.bulkValues)return this._fb.array(data.bulkValues.map((subItem=>this.buildFormGenerate(subItem))));{const validators=this.extractValidator(data);return this.setFormControl(data,validators)}}setFormControl(data,validators){return this._fb.control(data.value||null,{validators,updateOn:data.updateOn})}getCustomFromControlType(control){return(0,fesm2022_forms.em)(control)?"FormArray":(0,fesm2022_forms.Yb)(control)?"FormGroup":"FormControl"}};GenerateFormBuilderService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],GenerateFormBuilderService)},"./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,button_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs");let ButtonComponent=((_class=class ButtonComponent{constructor(){this.marian=new core.EventEmitter,this.roundedFull="",this.typeButton=""}}).propDecorators={marian:[{type:core.Output}],disable:[{type:core.Input}],roundedFull:[{type:core.Input}],typeButton:[{type:core.Input}]},_class);ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-button-component",standalone:!0,imports:[common.CommonModule,fesm2022_button.ot],template:'<button\n  [type]="typeButton"\n  [disabled]="disable"\n  [ngClass]="{ \'!bg-blue-700\': disable }"\n  mat-button\n  (click)="marian.emit()"\n  class="mat-primary mat-raised-button !bg-blue-500 !text-white p-2"\n  [className]="roundedFull"\n>\n  <ng-content></ng-content>\n</button>\n<ng-template #element>tete</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[button_componentngResource_default()]})],ButtonComponent)},"./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var ConstantsEnum,TypeConstantEnum,TypePattern;__webpack_require__.d(__webpack_exports__,{T_:()=>TypePattern,j1:()=>TypeConstantEnum}),function(ConstantsEnum){ConstantsEnum[ConstantsEnum.ZERO=0]="ZERO"}(ConstantsEnum||(ConstantsEnum={})),function(TypeConstantEnum){TypeConstantEnum.EMAIL="email",TypeConstantEnum.MAX="max",TypeConstantEnum.MIN="min",TypeConstantEnum.NUMBER="number",TypeConstantEnum.PATTERN="pattern",TypeConstantEnum.REQUIRED="required",TypeConstantEnum.STRING="string",TypeConstantEnum.MIN_CHAR="minChar",TypeConstantEnum.ONLY_CHAR="only_char"}(TypeConstantEnum||(TypeConstantEnum={})),function(TypePattern){TypePattern.ONLY_NUMBER="^[0-9]+$",TypePattern.ONLY_CHAR="^[a-zA-Z\\s]*$"}(TypePattern||(TypePattern={}))},"./ftx-sivan-shared/src/lib/components/input/sivan-input.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>SivanInputComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,sivan_input_componentngResource=__webpack_require__("./ftx-sivan-shared/src/lib/components/input/sivan-input.component.scss?ngResource"),sivan_input_componentngResource_default=__webpack_require__.n(sivan_input_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),scroll_hint_directive=__webpack_require__("./ftx-sivan-shared/src/lib/directive/scroll-hint.directive.ts"),outline_directive=__webpack_require__("./ftx-sivan-shared/src/lib/directive/outline.directive.ts"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),ftx_tooltip_component=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.ts"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs"),generative_service=__webpack_require__("./ftx-sivan-shared/src/lib/service/generative.service.ts");let SivanInputComponent=((_class=class SivanInputComponent{constructor(){this.optionis=[],this.isInputClick=!1,this.isInputCurrencyClick=!1,this.generative=(0,core.inject)(generative_service.y),this.changeDetectorRef=(0,core.inject)(core.ChangeDetectorRef)}set choices(options){this.optionis=options}showOption(inputElement){this.isInputClick=!this.isInputClick,inputElement&&(inputElement.focus(),this.changeDetectorRef.detectChanges())}onBlur(choice){this.isInputClick=!1,this.mainControl.setValue(choice)}selectCountry(option){this.isInputCurrencyClick=!1,this.currencyControl.setValue(option)}currencyControll(){this.isInputCurrencyClick=!this.isInputCurrencyClick}}).propDecorators={hintTop:[{type:core.Input,args:[{required:!0}]}],mainControl:[{type:core.Input}],currencyControl:[{type:core.Input}],placeholder:[{type:core.Input,args:[{required:!0}]}],colorMatIcon:[{type:core.Input}],choices:[{type:core.Input}]},_class);SivanInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sivan-input",standalone:!0,imports:[common.CommonModule,icon.Ps,fesm2022_forms.UX,ftx_tooltip_component.U,scroll_hint_directive.L],template:'<div\n  class="sivan-input-container relative dark:bg-gray-800 bg-white shadow-sm border-solid border px-0.5"\n  [ngClass]="{\n    \'text-red-500 !border-red-500\': mainControl?.errors,\n    \'!rounded-br-none\': isInputCurrencyClick,\n    \'!rounded-b-none\': isInputClick\n  }"\n>\n  <div class="w-full flex">\n    <div class="w-4"></div>\n    <div class="w-full">\n      <div class="sivan-input-container__center-label"></div>\n      <div class="sivan-input-container__field">\n        <input\n          [formControl]="mainControl"\n          [placeholder]="hintTop"\n          class="input-dropdown text"\n          #inputSivan\n        />\n      </div>\n    </div>\n  </div>\n  <div\n    *ngIf="optionis.length >= 1 && currencyControl"\n    class="border-l border-l-gray-200 border-solid flex justify-center items-center relative dark:border-l-white"\n  >\n    <span\n      class="font-bold font-serif text-gray-400 dark:text-white pl-5"\n      [ngClass]="{ \'text-red-500 !border-red-500\': mainControl?.errors }"\n      >{{ currencyControl.controls.placeholder.value }}</span\n    >\n\n    <div\n      class="!h-full flex justify-center items-center px-5 gap-4"\n      (click)="currencyControll()"\n    >\n      <mat-icon\n        class="right-4"\n        [ngClass]="colorMatIcon"\n        [svgIcon]="\'fa_solid:angle-up\'"\n        [@rotateIcon]="isInputCurrencyClick ? \'up\' : \'down\'"\n      ></mat-icon>\n      <mat-icon\n        class="right-[3rem]"\n        [ngClass]="colorMatIcon"\n        [svgIcon]="currencyControl.controls.icon.value"\n      ></mat-icon>\n    </div>\n    <div @fadeInOut class="absolute w-full top-11" *ngIf="isInputCurrencyClick">\n      <ng-container *ngTemplateOutlet="optionsTemplate"></ng-container>\n    </div>\n  </div>\n</div>\n\n\x3c!-- Template for when options.length > 0 --\x3e\n<ng-template #optionsTemplate>\n  <ftx-tooltip\n    [rendererTemplate]="\n      currencyControl ? optionCurrencyTemplate : optionTemplate\n    "\n  />\n</ng-template>\n\n\x3c!-- Template for when options.length is <= 0 --\x3e\n<ng-template #optionTemplate>\n  <div class="overflow-auto dark:text-white">\n    <p>Options are available:</p>\n    <ul>\n      <li\n        (click)="onBlur(option)"\n        *ngFor="let option of optionis; trackBy: generative.trackBy"\n      >\n        {{ option }}\n      </li>\n    </ul>\n  </div>\n</ng-template>\n\n\x3c!-- Template for when options.length is <= 0 --\x3e\n<ng-template #optionCurrencyTemplate>\n  <div class="overflow-auto">\n    <div\n      class="currency-flag"\n      *ngFor="let option of optionis; trackBy: generative.trackBy"\n      (click)="selectCountry(option)"\n    >\n      <mat-icon class="!w-full" [svgIcon]="option.icon" />\n    </div>\n  </div>\n</ng-template>\n<div @fadeInOut *ngIf="mainControl?.errors" class="text-red-500 text-sm">\n  {{ mainControl.errors?.[\'error\']  }}\n</div>\n<mat-icon\n  [ngClass]="colorMatIcon"\n  (click)="showOption(inputSivan)"\n  *ngIf="optionis && optionis.length > 0 && !currencyControl"\n  class="absolute right-4 top-3"\n  [svgIcon]="\'fa_solid:angle-up\'"\n  [@rotateIcon]="isInputClick ? \'up\' : \'down\'"\n></mat-icon>\n\n<div @fadeInOut *ngIf="optionis && optionis.length > 0 && isInputClick">\n  \x3c!-- Content to display when options.length > 0 --\x3e\n  <ng-container *ngTemplateOutlet="optionsTemplate"></ng-container>\n</div>\n',hostDirectives:[{directive:outline_directive.i,inputs:["hintTop","control:mainControl","placeholder"]}],animations:[(0,animations.X$)("fadeInOut",[(0,animations.SB)("void",(0,animations.oB)({height:"0",opacity:0,zIndex:105})),(0,animations.eR)(":enter",[(0,animations.oB)({height:"0",opacity:0,zIndex:105}),(0,animations.jt)("200ms ease-out",(0,animations.oB)({height:"*",opacity:1,zIndex:105}))]),(0,animations.eR)(":leave",[(0,animations.oB)({height:"*",opacity:1}),(0,animations.jt)("200ms ease-in",(0,animations.oB)({height:"0",opacity:0}))])]),(0,animations.X$)("rotateIcon",[(0,animations.SB)("up",(0,animations.oB)({transform:"rotate(180deg) scale(1.2)"})),(0,animations.SB)("down",(0,animations.oB)({transform:"rotate(0deg)"})),(0,animations.eR)("up <=> down",(0,animations.jt)("300ms ease-out"))])],styles:[sivan_input_componentngResource_default()]})],SivanInputComponent)},"./ftx-sivan-shared/src/lib/directive/outline.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>OutlineDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js");let OutlineDirective=((_class=class OutlineDirective{constructor(){this.elementRef=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef),this.renderer2=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2),this.destroy$=new rxjs__WEBPACK_IMPORTED_MODULE_1__.x}ngOnInit(){const peerDiv=this.elementRef.nativeElement.querySelector(".sivan-input-container__field");this.element=this.renderer2.createElement("span"),(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(this.element,"click").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.b)((()=>peerDiv.childNodes[0].focus())),(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.R)(this.destroy$)).subscribe(),(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(peerDiv.childNodes[0],"blur").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.b)((inputValue=>{if(inputValue.target.value<1){["-top-2.5","h-5","text-xs"].forEach((className=>{this.renderer2.removeClass(this.element,className)}));["absolute","bg-white","px-2","-left-2","h-9","flex","justify-center","items-center","text","text-gray-500"].forEach((className=>{this.renderer2.addClass(this.element,className)}))}})),(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.R)(this.destroy$)).subscribe(),(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(peerDiv.childNodes[0],"focus").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.b)((inputValue=>{inputValue.target.value<1&&this.addClassForHint(this.element)})),(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.R)(this.destroy$)).subscribe()}ngAfterViewInit(){const peerDiv=this.elementRef.nativeElement.querySelector(".sivan-input-container__center-label");this.renderer2.addClass(peerDiv,"relative"),this.control.valueChanges?.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.x)(),(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.b)(200),(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.O)("sda"),(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.b)((inputValue=>{inputValue.length>1&&this.renderer2.appendChild(peerDiv,this.element),this.addClassForHint(this.element),this.element.innerText!==this.placeholder&&(this.element.innerText=this.placeholder)})),(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.R)(this.destroy$)).subscribe()}addClassForHint(element){this.renderer2.removeClass(element,"h-9");["h-5","absolute","-top-2.5","bg-white","px-2","-left-2","duration-300","transform","text-xs","rounded-tl","rounded-tr","prose-zinc"].forEach((className=>{this.renderer2.addClass(element,className)}))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}}).propDecorators={inputContainer:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,args:["peerDiv",{static:!1}]}],hintTop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}],control:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}],placeholder:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}]},_class);OutlineDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_8__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[sivanOutline]",standalone:!0})],OutlineDirective)},"./ftx-sivan-shared/src/lib/directive/scroll-hint.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>ScrollHintDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");let ScrollHintDirective=((_class=class ScrollHintDirective{constructor(){this.elementRef=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef),this.renderer2=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2),this.pseudoElement=null,this.destroyed$=new rxjs__WEBPACK_IMPORTED_MODULE_1__.x,this.pseudoElement=this.renderer2.createElement("div"),this.renderer2.addClass(this.pseudoElement,"scroll-opacity-pseudo"),this.renderer2.appendChild(this.elementRef.nativeElement,this.pseudoElement)}onWindow($event){(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)($event.target,"scroll").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.U)((event=>event.target)),(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.x)(),(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.b)((contentElement=>{const contentScrollHeight=contentElement.scrollHeight-contentElement.offsetHeight;let opacity=contentElement.scrollTop/contentScrollHeight;opacity=+Math.min(1,Math.max(0,opacity)).toFixed(2);this.renderer2.setStyle(this.pseudoElement,"position","absolute"),this.renderer2.setStyle(this.pseudoElement,"z-index","101"),this.renderer2.setStyle(this.pseudoElement,"top","calc(100vh - 95px - 0.65rem)"),this.renderer2.setStyle(this.pseudoElement,"left","0"),this.renderer2.setStyle(this.pseudoElement,"width","100%"),this.renderer2.setStyle(this.pseudoElement,"height","40px"),this.renderer2.setStyle(this.pseudoElement,"background","linear-gradient(rgb(0 0 0 / 0%), rgb(100 116 139/var(--tw-bg-opacity)))"),this.renderer2.setStyle(this.pseudoElement,"opacity",""+(1-opacity))})),(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.R)(this.destroyed$)).subscribe()}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}).ctorParameters=()=>[],_class.propDecorators={onWindow:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,args:["scroll",["$event"]]}]},_class);ScrollHintDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_7__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[sivanScrollHint]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_7__.w6)("design:paramtypes",[])],ScrollHintDirective)},"./ftx-sivan-shared/src/lib/service/generative.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>GenerativeService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let GenerativeService=class GenerativeService{trackBy(index,entity){return index}};GenerativeService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],GenerativeService)},"./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>FtxTooltipComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var ftx_tooltip_componentngResource=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.scss?ngResource"),ftx_tooltip_componentngResource_default=__webpack_require__.n(ftx_tooltip_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let IncrementZindexDirective=class IncrementZindexDirective{constructor(){this.elementRef=(0,core.inject)(core.ElementRef),this.renderer2=(0,core.inject)(core.Renderer2)}ngOnInit(){document.querySelectorAll("[coaguluIncrementZindex]").forEach(((element,index)=>{this.renderer2.setStyle(element,"z-index",100-index)}))}};var _class,FtxTooltipComponent_1;IncrementZindexDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[coaguluIncrementZindex]",standalone:!0})],IncrementZindexDirective);let FtxTooltipComponent=(FtxTooltipComponent_1=_class=class FtxTooltipComponent{constructor(){this.text=""}},_class.propDecorators={rendererTemplate:[{type:core.Input}],content:[{type:core.ContentChild,args:[FtxTooltipComponent_1]}],text:[{type:core.Input}]},_class);FtxTooltipComponent=FtxTooltipComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"ftx-tooltip",standalone:!0,imports:[common.CommonModule,IncrementZindexDirective],template:'<div class="tooltip-container shadow-2x shadow-inner" coaguluIncrementZindex>\n  \x3c!--  arrow --\x3e\n  <div></div>\n  <ng-container *ngIf="text">\n    <div data-test="text-tooltip" class="tooltip-text">{{ text }}</div>\n  </ng-container>\n  <ng-container *ngTemplateOutlet="rendererTemplate || default"></ng-container>\n</div>\n\n<ng-template #default> TESADSDASD</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,styles:[ftx_tooltip_componentngResource_default()]})],FtxTooltipComponent)},"./src/app/components/contentSteps/spendMoney/spend-money.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"SpendMoneyComponent",component:__webpack_require__("./src/app/components/contentSteps/spendMoney/spend-money.component.ts").SpendMoneyComponent},Primary={render:args=>({props:args}),args:{}}},"./src/app/components/contentSteps/spendMoney/spend-money.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SpendMoneyComponent:()=>SpendMoneyComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,spend_money_componentngResource=__webpack_require__("./src/app/components/contentSteps/spendMoney/spend-money.component.scss?ngResource"),spend_money_componentngResource_default=__webpack_require__.n(spend_money_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_select=__webpack_require__("./node_modules/@angular/material/fesm2022/select.mjs"),service_generate_form_builder_service=__webpack_require__("./ftx-forms/src/lib/ftx-forms/service/service-generate-form-builder.service.ts"),constants_enum=__webpack_require__("./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts"),button_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),sivan_input_component=__webpack_require__("./ftx-sivan-shared/src/lib/components/input/sivan-input.component.ts");let SpendMoneyComponent=((_class=class SpendMoneyComponent{constructor(){this._fb=(0,core.inject)(service_generate_form_builder_service.s),this.simpleData={label:"name",value:"IVan",validators:[{type:constants_enum.j1.REQUIRED}],placeholder:"Isvan Avramescu",labelHint:"Name for User",updateOn:"blur"},this.simple=this._fb.buildFormFromJson(this.simpleData),this.currency=this._fb.buildFormFromJson({label:"personalData",labelHint:"Personal Data",values:[{label:"valueCurrency",labelHint:"Personal Nested",value:"123141232311",validators:[{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_NUMBER,errorMsg:"Only Integer Number"}],updateOn:"blur"},{label:"currency",values:[{label:"placeholder",value:"RON"},{label:"Icon",value:"fa_solid:RO",labelHint:"Personal TEst"}],labelHint:"Personal TEst"}]})}logFrom(){console.log(this.currency)}}).ctorParameters=()=>[],_class.propDecorators={defaultTemplate:[{type:core.ViewChild,args:["default"]}]},_class);SpendMoneyComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"spend-money",standalone:!0,imports:[common.CommonModule,fesm2022_select.LD,fesm2022_forms.u5,fesm2022_forms.UX,sivan_input_component.p,button_component.r],template:'<div class="p-2 m-2 text-lg">\n  <sivan-input\n    [mainControl]="simple"\n    [hintTop]="simpleData.labelHint || \'\'"\n    [placeholder]="simpleData.placeholder || \'\'"\n  />\n</div>\n<div class="p-2 m-2 text-lg">\n  <sivan-input\n    [mainControl]="simple"\n    hintTop="TEST"\n    placeholder="Javan Iuvan"\n    [choices]="[\'dasd\', \'dasda\', \'dasd\', \'asdasd\', \'dasds\', \'dasd\']"\n    colorMatIcon="text-blue-500"\n  />\n</div>\n<div class="p-2 m-2 gap-2 flex flex-col">\n  <div class="text-lg flex gap-[2rem] flex-wrap">\n    <sivan-input\n      [mainControl]="currency.controls.valuecurrency"\n      [currencyControl]="currency.controls.currency"\n      hintTop="TEST"\n      placeholder="Javan Iuvan"\n      [choices]="[\n        { icon: \'fa_solid:RO\', placeholder: \'RON\' },\n        { icon: \'fa_solid:CR\', placeholder: \'KN\' }\n      ]"\n      colorMatIcon="text-blue-500"\n    />\n    <sivan-input\n      [mainControl]="currency.controls.valuecurrency"\n      [currencyControl]="currency.controls.currency"\n      hintTop="TEST"\n      placeholder="Javan Iuvan"\n      [choices]="[\n        { icon: \'fa_solid:RO\', placeholder: \'RON\' },\n        { icon: \'fa_solid:CR\', placeholder: \'KN\' }\n      ]"\n      colorMatIcon="text-blue-500"\n    />\n    <sivan-input\n      [mainControl]="currency.controls.valuecurrency"\n      [currencyControl]="currency.controls.currency"\n      hintTop="TEST"\n      placeholder="Javan Iuvan"\n      [choices]="[\n        { icon: \'fa_solid:RO\', placeholder: \'RON\' },\n        { icon: \'fa_solid:CR\', placeholder: \'KN\' }\n      ]"\n      colorMatIcon="text-blue-500"\n    />\n    <sivan-input\n      [mainControl]="currency.controls.valuecurrency"\n      [currencyControl]="currency.controls.currency"\n      hintTop="TEST"\n      placeholder="Javan Iuvan"\n      [choices]="[\n        { icon: \'fa_solid:RO\', placeholder: \'RON\' },\n        { icon: \'fa_solid:CR\', placeholder: \'KN\' }\n      ]"\n      colorMatIcon="text-blue-500"\n    />\n    <sivan-input\n      [mainControl]="currency.controls.valuecurrency"\n      [currencyControl]="currency.controls.currency"\n      hintTop="TEST"\n      placeholder="Javan Iuvan"\n      [choices]="[\n        { icon: \'fa_solid:RO\', placeholder: \'RON\' },\n        { icon: \'fa_solid:CR\', placeholder: \'KN\' }\n      ]"\n      colorMatIcon="text-blue-500"\n    />\n  </div>\n\n  <ngx-button-component [roundedFull]="\'rounded\'" (marian)="logFrom()"\n    >TEST\n  </ngx-button-component>\n</div>\n',styles:[spend_money_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],SpendMoneyComponent)},"./node_modules/rxjs/dist/esm5/internal/observable/defer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>defer});var _Observable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");function defer(observableFactory){return new _Observable__WEBPACK_IMPORTED_MODULE_0__.y((function(subscriber){(0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Xf)(observableFactory()).subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>shareReplay});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),dateTimestampProvider=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js"),ReplaySubject=function(_super){function ReplaySubject(_bufferSize,_windowTime,_timestampProvider){void 0===_bufferSize&&(_bufferSize=1/0),void 0===_windowTime&&(_windowTime=1/0),void 0===_timestampProvider&&(_timestampProvider=dateTimestampProvider.l);var _this=_super.call(this)||this;return _this._bufferSize=_bufferSize,_this._windowTime=_windowTime,_this._timestampProvider=_timestampProvider,_this._buffer=[],_this._infiniteTimeWindow=!0,_this._infiniteTimeWindow=_windowTime===1/0,_this._bufferSize=Math.max(1,_bufferSize),_this._windowTime=Math.max(1,_windowTime),_this}return(0,tslib_es6.ZT)(ReplaySubject,_super),ReplaySubject.prototype.next=function(value){var _a=this,isStopped=_a.isStopped,_buffer=_a._buffer,_infiniteTimeWindow=_a._infiniteTimeWindow,_timestampProvider=_a._timestampProvider,_windowTime=_a._windowTime;isStopped||(_buffer.push(value),!_infiniteTimeWindow&&_buffer.push(_timestampProvider.now()+_windowTime)),this._trimBuffer(),_super.prototype.next.call(this,value)},ReplaySubject.prototype._subscribe=function(subscriber){this._throwIfClosed(),this._trimBuffer();for(var subscription=this._innerSubscribe(subscriber),_infiniteTimeWindow=this._infiniteTimeWindow,copy=this._buffer.slice(),i=0;i<copy.length&&!subscriber.closed;i+=_infiniteTimeWindow?1:2)subscriber.next(copy[i]);return this._checkFinalizedStatuses(subscriber),subscription},ReplaySubject.prototype._trimBuffer=function(){var _bufferSize=this._bufferSize,_timestampProvider=this._timestampProvider,_buffer=this._buffer,_infiniteTimeWindow=this._infiniteTimeWindow,adjustedBufferSize=(_infiniteTimeWindow?1:2)*_bufferSize;if(_bufferSize<1/0&&adjustedBufferSize<_buffer.length&&_buffer.splice(0,_buffer.length-adjustedBufferSize),!_infiniteTimeWindow){for(var now=_timestampProvider.now(),last=0,i=1;i<_buffer.length&&_buffer[i]<=now;i+=2)last=i;last&&_buffer.splice(0,last+1)}},ReplaySubject}(Subject.x),share=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js");function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,(0,share.B)({connector:function(){return new ReplaySubject(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./ftx-forms/src/lib/ftx-forms/shared/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-sivan-shared/src/lib/components/input/sivan-input.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  position: relative;\n}\n:host ::ng-deep .mat-mdc-select-arrow {\n  display: none;\n}\n:host ::ng-deep ftx-tooltip {\n  width: 100%;\n  height: 100%;\n}\n:host ::ng-deep ftx-tooltip .tooltip-container {\n  position: absolute;\n  z-index: 50;\n  margin-left: 0px;\n  margin-right: 0px;\n  max-height: 10rem;\n  width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n  :host ::ng-deep ftx-tooltip .tooltip-container {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n  }\n}\n:host .input-dropdown {\n  z-index: 0;\n  width: 100%;\n  -webkit-appearance: none;\n          appearance: none;\n  padding-bottom: 0.625rem;\n  padding-right: 1.25rem;\n  padding-top: 0.5rem;\n}\n:host .input-dropdown:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n@media (prefers-color-scheme: dark) {\n  :host .input-dropdown {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n  }\n  :host .input-dropdown:focus {\n    --tw-text-opacity: 1;\n    color: rgb(103 232 249 / var(--tw-text-opacity));\n  }\n}\n\n.currency-flag {\n  max-height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.currency-flag ::ng-deep mat-icon {\n  height: 4rem;\n}\n\n.sivan-input-container {\n  display: flex;\n  width: 100%;\n  border-radius: 0.25rem;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n\n.sivan-input-container:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\n\n@media (prefers-color-scheme: dark) {\n  .sivan-input-container {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n  .sivan-input-container:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(34 211 238 / var(--tw-border-opacity));\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'ftx-tooltip :host {\n  margin: 0.4rem;\n  width: max-content;\n  position: relative;\n}\nftx-tooltip .tooltip-container {\n  box-shadow: rgba(0, 0, 0, 0.12) 0rem 0.0625rem 0.1875rem, rgba(0, 0, 0, 0.24) 0rem 0.0625rem 0.125rem;\n  padding: 1rem;\n  margin: 0.5rem;\n  background: white;\n  width: max-content;\n  display: flex;\n  flex-direction: column;\n}\nftx-tooltip .tooltip-container .top {\n  content: "";\n  position: absolute;\n  bottom: -2%;\n  left: 39%;\n  transform: translateX(50%) rotate(225deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .bottom {\n  content: "";\n  position: absolute;\n  bottom: 89%;\n  left: 45%;\n  transform: translateX(50%) rotate(45deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .right {\n  content: "";\n  position: absolute;\n  bottom: 41%;\n  left: -0.2rem;\n  transform: translateX(0%) rotate(315deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .left {\n  content: "";\n  position: absolute;\n  bottom: 41%;\n  left: 96%;\n  transform: translateX(0%) rotate(135deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/contentSteps/spendMoney/spend-money.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);