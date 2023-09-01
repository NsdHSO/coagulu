(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[158,761],{"./ftx-forms/src/lib/ftx-forms/directive/patch-form-group-value.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>PatchFormGroupValueDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let PatchFormGroupValueDirective=((_class=class PatchFormGroupValueDirective{constructor(){this.formGroup={}}set ngxFormGroupValues(val){val&&this.formGroup.patchValue(val,{emitEvent:!1})}}).propDecorators={formGroup:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],ngxFormGroupValues:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);PatchFormGroupValueDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[ngxFormGroupValues]",standalone:!0})],PatchFormGroupValueDirective)},"./src/app/components/contentSteps/reserveBook/reserve-book.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"ReserveBookComponent",component:__webpack_require__("./src/app/components/contentSteps/reserveBook/reserve-book.component.ts").ReserveBookComponent},Primary={render:args=>({props:args}),args:{}}},"./src/app/components/contentSteps/reserveBook/reserve-book.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ReserveBookComponent:()=>ReserveBookComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var reserve_book_componentngResource=__webpack_require__("./src/app/components/contentSteps/reserveBook/reserve-book.component.scss?ngResource"),reserve_book_componentngResource_default=__webpack_require__.n(reserve_book_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),service_generate_form_builder_service=__webpack_require__("./ftx-forms/src/lib/ftx-forms/service/service-generate-form-builder.service.ts"),constants_enum=__webpack_require__("./ftx-forms/src/lib/ftx-forms/utils/constants.enum.ts"),input_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/input/input.component.ts"),button_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts"),form_control_entity_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formControlEntity/form-control-entity.component.ts"),patch_form_group_value_directive=__webpack_require__("./ftx-forms/src/lib/ftx-forms/directive/patch-form-group-value.directive.ts"),ftx_forms_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/ftx-forms.component.ts"),using=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/using.js"),debounceTime=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),shareReplay=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js"),ngrx_store=__webpack_require__("./node_modules/@ngrx/store/fesm2022/ngrx-store.mjs"),stepper_service=__webpack_require__("./src/app/components/services/stepper.service.ts"),_state=__webpack_require__("./src/app/+state/index.ts");let ReserveBookComponent=class ReserveBookComponent{constructor(){this._stepperStore=(0,core.inject)(ngrx_store.yh),this.generateFormBuilderService=(0,core.inject)(service_generate_form_builder_service.s),this.jsonData={values:[{label:"name",value:"IVan",validators:[{type:constants_enum.j1.REQUIRED}],placeholder:"Isvan Avramescu",labelHint:"Name for User"},{label:"email",value:"s@gm.co",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.EMAIL}],labelHint:"Email Address"},{label:"TESTa",value:"201",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_NUMBER,errorMsg:"Only Integer Number"}],labelHint:"age"},{label:"summary",value:!0,labelHint:"Summary Type",typeInput:"boolean",validators:[{type:constants_enum.j1.REQUIRED}]},{label:"Adult",value:!0,labelHint:"Is Adult",typeInput:"toggle",valueToggleShow:[{value:!1,description:"No"},{value:!0,description:"Yes"}]},{label:"ARE",value:"dasdasd",labelHint:"Area Data",typeInput:"area"},{labelHint:"Address street",label:"address",values:[{label:"street",value:"Ivan",labelHint:"Street Number 1",placeholder:"Street Number 1",validators:[{type:constants_enum.j1.REQUIRED,errorMsg:"This field it is must"}]},{label:"street2",value:"Ivan2",validators:[{type:constants_enum.j1.REQUIRED,errorMsg:"This field it is must"}]}]},{label:"personalData",labelHint:"Personal Data",values:[{label:"cnp",labelHint:"Personal Nested",value:"123141232311",validators:[{type:constants_enum.j1.MIN,option:20}]},{label:"ds",value:"TEST",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]},{label:"ds2",value:"TEST",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]},{label:"ds3",value:"TEST",labelHint:"Personal TEst",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"}]}]},{labelHint:"Course what user take",label:"course",bulkValues:[{value:"s",label:"angularPatterns",labelHint:"Summary TEST",validators:[{type:constants_enum.j1.REQUIRED},{type:constants_enum.j1.PATTERN,option:constants_enum.T_.ONLY_CHAR,errorMsg:"Only char"},{type:constants_enum.j1.MIN_CHAR,option:2,errorMsg:"Must filled with min 2 char"}]},{value:"555",label:"reactPatterns"}]},{labelHint:"Name for User",label:"age",bulkValues:[{value:"2312",label:"angularPatterns"},{value:"321",label:"reactPatterns"}]},{label:"home",labelHint:"Name for Home",bulkValues:[{value:"444",label:"Miki"},{label:"Ivan",bulkValues:[{value:null,validators:[{type:constants_enum.j1.REQUIRED}],labelHint:"Childrens"},{label:"train",value:232,placeholder:"NAMING",labelHint:"Number"}]},{label:"Barto",bulkValues:[{value:null,labelHint:"barot Childrens"},{label:"barot Childrens train",value:23222,placeholder:" barot NAMING",labelHint:"Number"}]},{label:"Barto2",bulkValues:[{value:null,labelHint:"barot Childrens"},{label:"barot Childrens train",value:23222,placeholder:" barot NAMING",labelHint:"Number"}]},{label:"Bartos",bulkValues:[{value:null,labelHint:"barot Childrens"},{label:"barot Childrens train",value:23222,placeholder:" barot NAMING",labelHint:"Number",validators:[{type:constants_enum.j1.REQUIRED}]}]}]}]},this._stepperService=(0,core.inject)(stepper_service.M),this.formValue$=(0,using.g)((()=>this.dynamicForm.valueChanges.pipe((0,debounceTime.b)(200),(0,tap.b)((values=>this._stepperStore.dispatch((0,_state.x8)(values)))),(0,tap.b)((()=>{this._stepperService.steppForm.controls.reserveBook.controls.check.patchValue(this.dynamicForm.valid)})),(0,tap.b)((()=>{this._stepperService.flagUrl$.next("reserveBook")}))).subscribe()),(()=>this._stepperStore.select(_state.Cv))).pipe((0,shareReplay.d)())}ngOnInit(){this.dynamicForm=this.generateFormBuilderService.buildFormFromJson(this.jsonData)}onSubmit(){this.dynamicForm.valid&&console.log(this.dynamicForm.getRawValue())}};ReserveBookComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"reserve-book",standalone:!0,imports:[common.CommonModule,fesm2022_forms.UX,input_component.a,button_component.r,form_control_entity_component.e,patch_form_group_value_directive.Z,ftx_forms_component.z],template:'<ng-container *ngIf="formValue$ | async">\n  <ngx-ftx-forms\n    (submitEvent)="onSubmit()"\n    [dynamicForm]="dynamicForm"\n    [jsonData]="jsonData"\n  />\n</ng-container>\n',styles:[reserve_book_componentngResource_default()]})],ReserveBookComponent)},"./node_modules/rxjs/dist/esm5/internal/operators/scan.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>scan});var lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function scan(accumulator,seed){return(0,lift.e)(function scanInternals(accumulator,seed,hasSeed,emitOnNext,emitBeforeComplete){return function(source,subscriber){var hasState=hasSeed,state=seed,index=0;source.subscribe((0,OperatorSubscriber.x)(subscriber,(function(value){var i=index++;state=hasState?accumulator(state,value,i):(hasState=!0,value),emitOnNext&&subscriber.next(state)}),emitBeforeComplete&&function(){hasState&&subscriber.next(state),subscriber.complete()}))}}(accumulator,seed,arguments.length>=2,!0))}},"./src/app/components/contentSteps/reserveBook/reserve-book.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);