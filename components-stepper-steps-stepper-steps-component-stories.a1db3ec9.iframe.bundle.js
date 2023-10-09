(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[300],{"./src/app/components/stepper-steps/stepper-steps.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>stepper_steps_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),stepper_steps_component=__webpack_require__("./src/app/components/stepper-steps/stepper-steps.component.ts"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),fesm2022_router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),core=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs"),ngrx_store=__webpack_require__("./node_modules/@ngrx/store/fesm2022/ngrx-store.mjs"),stepper_service=__webpack_require__("./src/app/components/services/stepper.service.ts"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),fesm2022_core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),catchError=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");const appRoutes=[{path:"",loadComponent:()=>__webpack_require__.e(529).then(__webpack_require__.bind(__webpack_require__,"./src/app/components/stepper/stepper.component.ts")).then((c=>c.StepperComponent)),resolve:[()=>{const stepperService=(0,fesm2022_core.inject)(stepper_service.M);(0,fesm2022_core.inject)(fesm2022_router.F0).events.pipe((0,filter.h)((event=>event instanceof fesm2022_router.m2)),(0,map.U)((v=>v.url.split("/")[1])),(0,tap.b)((url=>stepperService.flagUrl$.next(url))),(0,catchError.K)((err=>(console.warn(err),(0,of.of)(!1))))).subscribe()}],children:[{path:"intro",loadComponent:()=>__webpack_require__.e(100).then(__webpack_require__.bind(__webpack_require__,"./src/app/components/contentSteps/intro/intro.component.ts")).then((c=>c.IntroComponent))},{path:"infoUser",loadComponent:()=>Promise.all([__webpack_require__.e(149),__webpack_require__.e(888),__webpack_require__.e(24),__webpack_require__.e(891)]).then(__webpack_require__.bind(__webpack_require__,"./src/app/components/contentSteps/infoUser/info-user.component.ts")).then((c=>c.InfoUserComponent))},{path:"spendMoney",loadComponent:()=>Promise.all([__webpack_require__.e(149),__webpack_require__.e(858),__webpack_require__.e(24),__webpack_require__.e(956)]).then(__webpack_require__.bind(__webpack_require__,"./src/app/components/contentSteps/spendMoney/spend-money.component.ts")).then((c=>c.SpendMoneyComponent))},{path:"reserveBook",loadComponent:()=>Promise.all([__webpack_require__.e(149),__webpack_require__.e(888),__webpack_require__.e(24),__webpack_require__.e(553)]).then(__webpack_require__.bind(__webpack_require__,"./src/app/components/contentSteps/reserveBook/reserve-book.component.ts")).then((c=>c.ReserveBookComponent))},{path:"**",redirectTo:"spendMoney"}]},{path:"**",redirectTo:""}];var ngx_liburg_icon=__webpack_require__("./node_modules/ngx-liburg-icon/fesm2020/ngx-liburg-icon.mjs"),http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),http_testing=__webpack_require__("./node_modules/@angular/common/fesm2022/http/testing.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),button_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts");const stepper_steps_component_stories={title:"StepperStepsComponent",component:stepper_steps_component.s,decorators:[(0,dist.applicationConfig)({providers:[(0,fesm2022_core.importProvidersFrom)(animations.BrowserAnimationsModule),(0,fesm2022_core.importProvidersFrom)(ngx_liburg_icon.ol),(0,animations.provideAnimations)()]}),(0,dist.moduleMetadata)({imports:[common.CommonModule,icon.Ps,fesm2022_router.rH,button_component.r,core.si,common.AsyncPipe,testing.Z_.withRoutes(appRoutes),ngx_liburg_icon.ol,http.JF,http_testing.Pl],providers:[{provide:ngrx_store.yh,useValue:{select:()=>(0,of.of)("")}},{provide:stepper_service.M,useValue:{flagUrl$:(0,of.of)("Ivan")}},{provide:http.JF,useValue:{fetchIcon:()=>{},loadSvgIconSetFromConfig:()=>{}}}]})]},Primary={render:args=>({props:args}),args:{vm:{intro:{icon:"fa_brands:sitrox"},retrieve:{icon:"fa_brands:sitrox"},steps:[{value:"intro",id:1,label:"intro"},{value:"retrieve",id:2,label:"intro"}]}}}},"./src/app/components/services/stepper.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>StepperService});var tslib__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_ngrx_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ngrx/store/fesm2022/ngrx-store.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/using.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js"),rxjs__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js"),rxjs__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),rxjs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),_state__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/+state/index.ts");let StepperService=class StepperService{constructor(){this._stepperStore=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.yh),this._fb=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.qu),this.flagUrl$=new rxjs__WEBPACK_IMPORTED_MODULE_4__.X("info"),this.steppForm=this._fb.group({intro:this._fb.group({icon:"",check:this._fb.control(!1),id:"",values:{}}),infoUser:this._fb.group({check:this._fb.control(!0),icon:"",id:"",info:this._fb.group({familyNumber:0,roleOfMember:this._fb.array([this._fb.group({id:0,value:"",check:!1}),this._fb.group({id:0,value:"",check:!1})]),childrens:this._fb.control(0)})}),spendMoney:this._fb.group({id:"",icon:"",check:this._fb.control(!1),values:{incoming:null,spendMoney:null,revenue:null,categorySpendMoney:[{id:"",value:null,label:"",scope:[{id:"",label:"",check:!1}]}],recommendations:[{check:!1,label:""}]}}),reserveBook:this._fb.group({icon:"",id:"",check:this._fb.control(!1),values:{id:"",graph:{id:"",values:[{id:"",label:"",start:null,end:null}],howMannyMonth:null},reserve:{id:"",currentReserve:{},recommendationReserve:{},howMannyMonth:null},details:{id:"",check:!1,values:[]},modals:{setBookType:{},sumBook:{}}}})}),this.formValue$=(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.g)((()=>this.stepperForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.b)(200),(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.b)((values=>this._stepperStore.dispatch((0,_state__WEBPACK_IMPORTED_MODULE_0__.EY)(values))))).subscribe()),(()=>this._stepperStore.select(_state__WEBPACK_IMPORTED_MODULE_0__.nk))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.d)()),this.buttonDisable$=(0,rxjs__WEBPACK_IMPORTED_MODULE_9__.a)([this.formValue$,this.flagUrl$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.w)((valuesCombined=>(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(!valuesCombined[0][valuesCombined[1]].check))),(0,rxjs__WEBPACK_IMPORTED_MODULE_8__.d)())}get formValues$(){return this.formValue$}get stepperForm(){return this.steppForm}addRoleOfMember(){const newRole=this._fb.group({id:0,value:"",check:!1});this.stepperForm.controls.infoUser.controls.info.controls.roleOfMember.push(newRole)}};StepperService=(0,tslib__WEBPACK_IMPORTED_MODULE_12__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],StepperService)},"./src/app/components/stepper-steps/stepper-steps.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>StepperStepsComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,stepper_steps_componentngResource=__webpack_require__("./src/app/components/stepper-steps/stepper-steps.component.scss?ngResource"),stepper_steps_componentngResource_default=__webpack_require__.n(stepper_steps_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),fesm2022_core=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs"),ngrx_store=__webpack_require__("./node_modules/@ngrx/store/fesm2022/ngrx-store.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),switchMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),stepper_service=__webpack_require__("./src/app/components/services/stepper.service.ts"),button_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts"),form_badge_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.ts"),_state=__webpack_require__("./src/app/+state/index.ts"),render_you_directive=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/directive/render-you.directive.ts"),generative_service=__webpack_require__("./ftx-sivan-shared/src/lib/service/generative.service.ts");let StepperStepsComponent=((_class=class StepperStepsComponent{constructor(){this._router=(0,core.inject)(router.F0),this._destroyed$=new Subject.x,this._store=(0,core.inject)(ngrx_store.yh),this.stepperService=(0,core.inject)(stepper_service.M),this.generativeService=(0,core.inject)(generative_service.y),this.steps$=this._store.select(_state.Cs),this.ivan=new core.EventEmitter,this.flagUrl$=new BehaviorSubject.X(""),this.buttonDisabled$=new Observable.y}nextTab(){return this.steps$.pipe((0,switchMap.w)((step=>(0,of.of)({index:step.findIndex((v=>v.value===this.flagUrl$.value)),step}))),(0,map.U)((v=>v.step[v.index>=v.step.length-1?0:v.index+1])),(0,tap.b)((value=>this._router.navigate([value.value]))),(0,takeUntil.R)(this._destroyed$)).subscribe()}ngOnDestroy(){this._destroyed$.next(!0),this._destroyed$.complete()}}).propDecorators={ivan:[{type:core.Output}],vm:[{type:core.Input}],flagUrl$:[{type:core.Input}],buttonDisabled$:[{type:core.Input}]},_class);StepperStepsComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"stepper-steps",standalone:!0,imports:[common.CommonModule,icon.Ps,router.rH,button_component.r,router.Od,fesm2022_core.si,form_badge_component.f,render_you_directive.A],template:'<div\n  class="flex justify-between w-full animate-fade animate-once animate-duration-1000 animate-ease-in-out"\n>\n  <div class="relative flex gap-5" *ngIf="vm">\n    <button\n      *ngFor="let elm of vm?.steps; trackBy: generativeService.trackBy"\n      class="bg-white"\n      [routerLink]="elm.value"\n      [attr.aria-label]="vm[elm.value]"\n      [disabled]="buttonDisabled$ | async"\n    >\n      <div *ngIf="vm[elm.value] as element">\n        <mat-icon\n          mat-ripple\n          [svgIcon]="element.icon"\n          class="transition-all mx-1 border-2 border-solid border-gray-200 rounded-full p-2 !w-9 !h-9 hover:border-gray-300 hover:bg-slate-50animate-fade animate-once animate-duration-1000 animate-ease-in-out"\n          routerLinkActive="border-blue-500 bg-blue-50 text-blue-500"\n        >\n        </mat-icon>\n      </div>\n    </button>\n    <div\n      *ngIf="vm?.steps.length > 1"\n      class="absolute bg-gray-200 w-full h-[1px] border-s bottom-1/2 border-solid border-gray-800 -z-10"\n    ></div>\n  </div>\n  <div>\n    <ngx-button-component\n      [disable]="buttonDisabled$ | async"\n      roundedFull="rounded-md"\n      (marian)="nextTab()"\n      >Continue\n    </ngx-button-component>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[stepper_steps_componentngResource_default()]})],StepperStepsComponent)},"./src/app/components/stepper-steps/stepper-steps.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n    width: 100%\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);