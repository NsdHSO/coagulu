(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[353],{"./ftx-forms/src/lib/ftx-forms/directive/patch-form-group-value.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>PatchFormGroupValueDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let PatchFormGroupValueDirective=((_class=class PatchFormGroupValueDirective{constructor(){this.formGroup={}}set ngxFormGroupValues(val){val&&this.formGroup.patchValue(val,{emitEvent:!1})}}).propDecorators={formGroup:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],ngxFormGroupValues:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);PatchFormGroupValueDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[ngxFormGroupValues]",standalone:!0})],PatchFormGroupValueDirective)},"./src/app/components/stepper/stepper.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StepperComponent:()=>StepperComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,stepper_componentngResource=__webpack_require__("./src/app/components/stepper/stepper.component.scss?ngResource"),stepper_componentngResource_default=__webpack_require__.n(stepper_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),stepper_steps_component=__webpack_require__("./src/app/components/stepper-steps/stepper-steps.component.ts"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),patch_form_group_value_directive=__webpack_require__("./ftx-forms/src/lib/ftx-forms/directive/patch-form-group-value.directive.ts"),stepper_service=__webpack_require__("./src/app/components/services/stepper.service.ts"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),fromEvent=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),distinctUntilChanged=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");let ScrollHintDirective=((_class=class ScrollHintDirective{constructor(){this.elementRef=(0,core.inject)(core.ElementRef),this.renderer2=(0,core.inject)(core.Renderer2),this.pseudoElement=null,this.destroyed$=new Subject.x,this.pseudoElement=this.renderer2.createElement("div"),this.renderer2.addClass(this.pseudoElement,"scroll-opacity-pseudo"),this.renderer2.appendChild(this.elementRef.nativeElement,this.pseudoElement)}onWindow($event){(0,fromEvent.R)($event.target,"scroll").pipe((0,map.U)((event=>event.target)),(0,distinctUntilChanged.x)(),(0,tap.b)((contentElement=>{const contentScrollHeight=contentElement.scrollHeight-contentElement.offsetHeight;let opacity=contentElement.scrollTop/contentScrollHeight;opacity=+Math.min(1,Math.max(0,opacity)).toFixed(2);contentElement.scrollHeight;this.renderer2.setStyle(this.pseudoElement,"position","absolute"),this.renderer2.setStyle(this.pseudoElement,"z-index","101"),this.renderer2.setStyle(this.pseudoElement,"top","calc(100vh - 95px - 0.65rem)"),this.renderer2.setStyle(this.pseudoElement,"left","0"),this.renderer2.setStyle(this.pseudoElement,"width","100%"),this.renderer2.setStyle(this.pseudoElement,"height","40px"),this.renderer2.setStyle(this.pseudoElement,"background","linear-gradient(rgb(0 0 0 / 0%), rgb(100 116 139/var(--tw-bg-opacity)))"),this.renderer2.setStyle(this.pseudoElement,"opacity",""+(1-opacity))})),(0,takeUntil.R)(this.destroyed$)).subscribe()}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}).ctorParameters=()=>[],_class.propDecorators={onWindow:[{type:core.HostListener,args:["scroll",["$event"]]}]},_class);ScrollHintDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[sivanScrollHint]",standalone:!0}),(0,tslib_es6.w6)("design:paramtypes",[])],ScrollHintDirective);let StepperComponent=class StepperComponent{constructor(){this._stepperService=(0,core.inject)(stepper_service.M)}};StepperComponent=(0,tslib_es6.gn)([(0,core.Component)({standalone:!0,imports:[common.CommonModule,router.lC,icon.Ps,stepper_steps_component.s,patch_form_group_value_directive.Z,fesm2022_forms.UX,fesm2022_forms.u5,ScrollHintDirective],template:'<div\n  class="stepper-container-wrapper animate-fade transition-all animate-once animate-duration-1000 animate-ease-in-out"\n>\n  <div\n    class="stepper-container-wrapper-outlet h-[calc(100vh-65px-0.65rem)] overflow-x-auto"\n    sivanScrollHint\n  >\n    <router-outlet></router-outlet>\n  </div>\n  <div\n    class="stepper-container-wrapper__content flex py-4 px-3 bottom-0 w-full mb-2 border-t-2 border-solid border-gray-200 bg-white rounded-tl-lg rounded-tr-lg"\n  >\n    <stepper-steps\n      *ngIf="_stepperService.formValues$ | async as vm"\n      [vm]="vm"\n      [flagUrl$]="_stepperService.flagUrl$"\n      [buttonDisabled$]="_stepperService.buttonDisable$"\n    ></stepper-steps>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[stepper_componentngResource_default()]})],StepperComponent)},"./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>fromEvent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_Observable__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js"),_util_isFunction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),nodeEventEmitterMethods=["addListener","removeListener"],eventTargetMethods=["addEventListener","removeEventListener"],jqueryMethods=["on","off"];function fromEvent(target,eventName,options,resultSelector){if((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(options)&&(resultSelector=options,options=void 0),resultSelector)return fromEvent(target,eventName,options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.Z)(resultSelector));var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.CR)(function isEventTarget(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.addEventListener)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.removeEventListener)}(target)?eventTargetMethods.map((function(methodName){return function(handler){return target[methodName](eventName,handler,options)}})):function isNodeStyleEventEmitter(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.addListener)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.removeListener)}(target)?nodeEventEmitterMethods.map(toCommonHandlerRegistry(target,eventName)):function isJQueryStyleEventEmitter(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.on)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.off)}(target)?jqueryMethods.map(toCommonHandlerRegistry(target,eventName)):[],2),add=_a[0],remove=_a[1];if(!add&&(0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__.z)(target))return(0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__.z)((function(subTarget){return fromEvent(subTarget,eventName,options)}))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.Xf)(target));if(!add)throw new TypeError("Invalid event target");return new _Observable__WEBPACK_IMPORTED_MODULE_6__.y((function(subscriber){var handler=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return subscriber.next(1<args.length?args:args[0])};return add(handler),function(){return remove(handler)}}))}function toCommonHandlerRegistry(target,eventName){return function(methodName){return function(handler){return target[methodName](eventName,handler)}}}},"./src/app/components/stepper/stepper.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);