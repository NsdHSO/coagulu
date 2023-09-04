(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[134],{"./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>FormBadgeComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,form_badge_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.scss?ngResource"),form_badge_componentngResource_default=__webpack_require__.n(form_badge_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),generative_service=__webpack_require__("./ftx-forms/src/lib/ftx-forms/service/generative.service.ts");let FormBadgeComponent=((_class=class FormBadgeComponent{constructor(){this._generativeService=(0,core.inject)(generative_service.y),this.typeBadge="error",this.actionBadge=[{side:"middle",action:()=>console.log("TEST"),text:"Nothig"}]}}).propDecorators={typeBadge:[{type:core.Input}],actionBadge:[{type:core.Input}]},_class);FormBadgeComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-form-badge",standalone:!0,imports:[common.CommonModule,icon.Ps],template:"<div\n  class=\"wrapper-badge rounded-xl border-solid border-1 drop-shadow-md text prose prose-zinc prose-lg border-2\"\n  [ngClass]=\"{\n    'bg-green-300 border-green-300 text-green-700': typeBadge === 'success',\n    'bg-blue-300 border-blue-300 text-blue-700 ': typeBadge === 'done',\n    'bg-red-300 border-red-300 text-red-700 ': typeBadge === 'error',\n    'bg-yellow-400 border-yellow-300 text-yellow-700 ': typeBadge === 'warning',\n    'bg-blue-100 border-blue-300 text-blue-700 ': typeBadge === 'open',\n    'bg-white border-gray-300': typeBadge === 'pfm'\n  }\"\n>\n  <ng-container *ngFor=\"let badge of actionBadge\">\n    <ng-container *ngIf=\"badge.side === 'left' && badge.icon\">\n      <mat-icon [svgIcon]=\"badge.icon\" (click)=\"badge.action()\" />\n    </ng-container>\n    <ng-container *ngIf=\"badge.side === 'middle' && !badge.icon\">\n      <div (click)=\"badge.action()\">\n        {{ badge.text }}\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"badge.side === 'right' && badge.icon\">\n      <mat-icon [svgIcon]=\"badge.icon\" (click)=\"badge.action()\" />\n    </ng-container>\n  </ng-container>\n</div>\n",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_badge_componentngResource_default()]})],FormBadgeComponent)},"./ftx-forms/src/lib/ftx-forms/service/generative.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>GenerativeService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let GenerativeService=class GenerativeService{trackBy(index,entity){return index}};GenerativeService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],GenerativeService)},"./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,button_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs");let ButtonComponent=((_class=class ButtonComponent{constructor(){this.marian=new core.EventEmitter,this.roundedFull="",this.typeButton=""}}).propDecorators={marian:[{type:core.Output}],disable:[{type:core.Input}],roundedFull:[{type:core.Input}],typeButton:[{type:core.Input}]},_class);ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-button-component",standalone:!0,imports:[common.CommonModule,fesm2022_button.ot],template:'<button\n  [type]="typeButton"\n  [disabled]="disable"\n  [ngClass]="{ \'!bg-blue-700\': disable }"\n  mat-button\n  (click)="marian.emit()"\n  class="mat-primary mat-raised-button !bg-blue-500 !text-white p-2"\n  [className]="roundedFull"\n>\n  <ng-content></ng-content>\n</button>\n<ng-template #element>tete</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[button_componentngResource_default()]})],ButtonComponent)},"./ftx-tooltip/src/lib/ftx-tooltip/directive/render-you.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>RenderYouDirective});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ftx_tooltip_component=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.ts");let ZoneAxeService=((_class=class ZoneAxeService{constructor(tooltip,target,renderer2){this.tooltip=tooltip,this.target=target,this.renderer2=renderer2,this.tooltipRect=tooltip.getBoundingClientRect(),this.buttonRect=target.getBoundingClientRect()}axes(){return this.calculatePositionRecursively(this.buttonRect,this.tooltipRect,16,40)}calculatePositionRecursively(buttonRect,tooltipRect,paddingTooltip,padding){const arrowFct=this.tooltip.children[0].children[0],centerX=buttonRect.left+buttonRect.width/2,centerY=buttonRect.bottom-buttonRect.height/2-tooltipRect.height/2,position={top:"",left:""};if(buttonRect.right+tooltipRect.width+padding<window.innerWidth&&centerY+tooltipRect.height<window.innerHeight&&centerY>=-40)position.top=centerY>=0?`${centerY}`:""+(buttonRect.top+10-paddingTooltip),position.left=`${centerX+paddingTooltip+buttonRect.width/2}`,this.renderer2.addClass(arrowFct,"right"),centerY<=0&&this.renderer2.setStyle(arrowFct,"top",(buttonRect.top-buttonRect.height/2)/16+"rem");else if(buttonRect.left-tooltipRect.width>0&&centerY+tooltipRect.height<window.innerHeight)position.top=centerY>=0?`${centerY}`:""+(buttonRect.top+10-paddingTooltip),position.left=""+(buttonRect.left+paddingTooltip-tooltipRect.width),this.renderer2.addClass(arrowFct,"left");else if(buttonRect.bottom+tooltipRect.height+padding<window.innerHeight)position.top=`${buttonRect.bottom+paddingTooltip}`,position.left=""+(centerX-tooltipRect.width/2),this.renderer2.addClass(arrowFct,"bottom");else{if(!(buttonRect.top-tooltipRect.height-paddingTooltip>0))return position;position.top=""+(buttonRect.top-paddingTooltip-tooltipRect.height),position.left=""+(centerX-tooltipRect.width/2),this.renderer2.addClass(arrowFct,"top"),centerX+tooltipRect.width/2>window.innerWidth&&(position.left=`${centerX-tooltipRect.width+buttonRect.width/2+paddingTooltip}`,this.renderer2.setStyle(arrowFct,"left",(tooltipRect.width-tooltipRect.width/4)/16+"rem"))}return position}}).ctorParameters=()=>[{type:HTMLDivElement},{type:HTMLElement},{type:core.Renderer2}],_class);var render_you_directive_class;ZoneAxeService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"}),(0,tslib_es6.w6)("design:paramtypes",[HTMLDivElement,HTMLElement,core.Renderer2])],ZoneAxeService);let RenderYouDirective=((render_you_directive_class=class RenderYouDirective{constructor(){this.elementRef=(0,core.inject)(core.ElementRef),this.renderer2=(0,core.inject)(core.Renderer2),this.componentFactoryResolver=(0,core.inject)(core.ComponentFactoryResolver),this.viewContainerRef=(0,core.inject)(core.ViewContainerRef)}onMouseEnter(event){const element=this.elementRef.nativeElement;if(event.target===element){const componentFactory=this.componentFactoryResolver.resolveComponentFactory(ftx_tooltip_component.U);this.componentRef=this.viewContainerRef.createComponent(componentFactory),this.componentRef.instance.rendererTemplate=this.element,this.componentRef.instance.text=this.elementText;const appRoot=document.querySelector("app-root"),storybook=document.querySelector("storybook-root"),elementToAdd=this.componentRef.location.nativeElement,insertAfter=(newNode,referenceNode)=>{referenceNode?.parentNode&&referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling)};appRoot?insertAfter(elementToAdd,appRoot):storybook&&insertAfter(elementToAdd,storybook),this.componentRef.location.nativeElement.style.position="absolute",this.componentRef.changeDetectorRef.detectChanges();const position=new ZoneAxeService(this.componentRef.location.nativeElement,element,this.renderer2).axes();this.componentRef.location.nativeElement.style.top=+position.top/16+"rem",this.componentRef.location.nativeElement.style.left=+position.left/16+"rem",this.componentRef.location.nativeElement.style.zIndex="98",this.componentRef.changeDetectorRef.detectChanges()}}onMouseLeave(){this.componentRef&&(this.componentRef.destroy(),this.componentRef=null)}}).propDecorators={element:[{type:core.Input}],elementText:[{type:core.Input}],onMouseEnter:[{type:core.HostListener,args:["mouseenter",["$event"]]}],onMouseLeave:[{type:core.HostListener,args:["mouseleave"]}]},render_you_directive_class);RenderYouDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[renderYou] ",standalone:!0})],RenderYouDirective)},"./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>FtxTooltipComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,FtxTooltipComponent_1,ftx_tooltip_componentngResource=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.scss?ngResource"),ftx_tooltip_componentngResource_default=__webpack_require__.n(ftx_tooltip_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let FtxTooltipComponent=(FtxTooltipComponent_1=_class=class FtxTooltipComponent{constructor(){this.text=""}},_class.propDecorators={rendererTemplate:[{type:core.Input}],content:[{type:core.ContentChild,args:[FtxTooltipComponent_1]}],text:[{type:core.Input}]},_class);FtxTooltipComponent=FtxTooltipComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"ftx-tooltip",standalone:!0,imports:[common.CommonModule],template:'<script src="service/zone-axe.service.spec.ts"><\/script>\n<div class="tooltip-container mat-elevation-z8 shadow-2xl">\n  \x3c!--  arrow --\x3e\n  <div></div>\n  <ng-container *ngIf="text">\n    <div data-test="text-tooltip" class="tooltip-text">{{ text }}</div>\n  </ng-container>\n  <ng-container *ngTemplateOutlet="rendererTemplate || default"></ng-container>\n</div>\n\n<ng-template #default> TESADSDASD </ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,styles:[ftx_tooltip_componentngResource_default()]})],FtxTooltipComponent)},"./src/app/+state/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{EY:()=>formValueChange,x8:()=>formValueChangeReserve,Cv:()=>selectReserveEntities,nk:()=>selectStepperEntities,Cs:()=>selectStepsEntities});var ngrx_store=__webpack_require__("./node_modules/@ngrx/store/fesm2022/ngrx-store.mjs");const initStepper=(0,ngrx_store.PH)("[Stepper Page] Init"),loadStepperSuccess=(0,ngrx_store.PH)("[Stepper/API] Load Stepper Success",(0,ngrx_store.Ky)()),loadStepperFailure=(0,ngrx_store.PH)("[Stepper/API] Load Stepper Failure",(0,ngrx_store.Ky)()),formValueChange=(0,ngrx_store.PH)("[Stepper] Form Value change",(0,ngrx_store.Ky)()),getSteps=(0,ngrx_store.PH)("[Stepper] Get Steps",(0,ngrx_store.Ky)());var ngrx_entity=__webpack_require__("./node_modules/@ngrx/entity/fesm2022/ngrx-entity.mjs");function generateRandomId(){return Math.random().toString(36).substr(2,40)}const stepperAdapter=(0,ngrx_entity.H)(),initialStepperState=stepperAdapter.getInitialState({loaded:!1,entities:{intro:{check:!0,id:generateRandomId(),icon:"fa_brands:sitrox",values:null},infoUser:{check:!0,id:generateRandomId(),info:{familyNumber:4,roleOfMember:[{id:0,value:"Parent",check:!0},{id:1,value:"Child",check:!1}],childrens:2},icon:"fa_brands:twitter"},spendMoney:{id:generateRandomId(),check:!0,values:{incoming:5e3,spendMoney:3e3,revenue:2e3,categorySpendMoney:[{id:generateRandomId(),value:100,label:"Groceries",scope:[{id:generateRandomId(),label:"Food",check:!0},{id:generateRandomId(),label:"Drinks",check:!1}]},{id:generateRandomId(),value:500,label:"Entertainment",scope:[{id:generateRandomId(),label:"Movies",check:!0},{id:generateRandomId(),label:"Concerts",check:!1}]}],recommendations:[{check:!0,label:"Cut down on eating out"},{check:!1,label:"Cancel unused subscriptions"}]},icon:"fa_solid:music"},reserveBook:{id:generateRandomId(),check:!1,values:{id:generateRandomId(),graph:{id:generateRandomId(),values:[{id:generateRandomId(),label:"Jan",start:500,end:800},{id:generateRandomId(),label:"Feb",start:800,end:1e3},{id:generateRandomId(),label:"Mar",start:1e3,end:1200}],howMannyMonth:3},reserve:{id:generateRandomId(),currentReserve:{id:generateRandomId(),value:1e3,labelCurrency:"USD"},recommendationReserve:{id:generateRandomId(),value:1200,labelCurrency:"USD"},howMannyMonth:6},details:{id:generateRandomId(),check:!0,values:[{id:generateRandomId(),name:"Book 1",author:"Author A",genre:"Fiction"},{id:generateRandomId(),name:"Book 2",author:"Author B",genre:"Mystery"}]},modals:{setBookType:{id:generateRandomId(),value:50,labelCurrency:"USD"},sumBook:{id:generateRandomId(),value:30,labelCurrency:"USD"}}},icon:"fa_brands:codepen"},steps:[{value:"intro",id:generateRandomId(),label:"Intro"},{value:"infoUser",id:generateRandomId(),label:"Info User"},{value:"spendMoney",id:generateRandomId(),label:"Spend Money"},{value:"reserveBook",id:generateRandomId(),label:"ReserveBook"}]}});(0,ngrx_store.Lq)(initialStepperState,(0,ngrx_store.on)(initStepper,(state=>({...state,loaded:!1,error:null}))),(0,ngrx_store.on)(loadStepperSuccess,((state,{stepper})=>stepperAdapter.setAll(stepper,{...state,loaded:!0}))),(0,ngrx_store.on)(loadStepperFailure,((state,{error})=>({...state,error}))),(0,ngrx_store.on)(formValueChange,((state,{type,...update})=>({...state,entities:{...state.entities,...update}}))));const selectStepperState=(0,ngrx_store.ZF)("stepper"),{selectAll,selectEntities}=stepperAdapter.getSelectors(),selectStepperEntities=((0,ngrx_store.P1)(selectStepperState,(state=>state.loaded)),(0,ngrx_store.P1)(selectStepperState,(state=>state.error)),(0,ngrx_store.P1)(selectStepperState,(state=>selectAll(state))),(0,ngrx_store.P1)(selectStepperState,(state=>selectEntities(state)))),selectStepsEntities=(0,ngrx_store.P1)(getSteps,(state=>state.stepper.entities.steps));var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ngrx_effects=__webpack_require__("./node_modules/@ngrx/effects/fesm2022/ngrx-effects.mjs"),switchMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),catchError=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");let StepperEffects=class StepperEffects{constructor(){this.actions$=(0,core.inject)(ngrx_effects.eX),this.init$=(0,ngrx_effects.GW)((()=>this.actions$.pipe((0,ngrx_effects.l4)(initStepper),(0,switchMap.w)((()=>(0,of.of)(loadStepperSuccess({stepper:[]})))),(0,catchError.K)((error=>(console.error("Error",error),(0,of.of)(loadStepperFailure({error}))))))))}};StepperEffects=(0,tslib_es6.gn)([(0,core.Injectable)()],StepperEffects);const initReserve=(0,ngrx_store.PH)("[Reserve Page] Init"),loadReserveSuccess=(0,ngrx_store.PH)("[Reserve/API] Load Reserve Success",(0,ngrx_store.Ky)()),loadReserveFailure=(0,ngrx_store.PH)("[Reserve/API] Load Reserve Failure",(0,ngrx_store.Ky)()),formValueChangeReserve=(0,ngrx_store.PH)("[Reserve] Form Value change",(0,ngrx_store.Ky)()),reserveAdapter=(0,ngrx_entity.H)(),initialReserveState=reserveAdapter.getInitialState({loaded:!1});(0,ngrx_store.Lq)(initialReserveState,(0,ngrx_store.on)(initReserve,(state=>({...state,loaded:!1,error:null}))),(0,ngrx_store.on)(loadReserveSuccess,((state,{reserve})=>reserveAdapter.setAll(reserve,{...state,loaded:!0}))),(0,ngrx_store.on)(loadReserveFailure,((state,{error})=>({...state,error}))),(0,ngrx_store.on)(formValueChangeReserve,((state,{type,...update})=>({...state,entities:{...state.entities,...update}}))));const selectReserveState=(0,ngrx_store.ZF)("reserve"),{selectAll:reserve_selectors_selectAll,selectEntities:reserve_selectors_selectEntities}=reserveAdapter.getSelectors(),selectReserveEntities=((0,ngrx_store.P1)(selectReserveState,(state=>state.loaded)),(0,ngrx_store.P1)(selectReserveState,(state=>state.error)),(0,ngrx_store.P1)(selectReserveState,(state=>reserve_selectors_selectAll(state))),(0,ngrx_store.P1)(selectReserveState,(state=>reserve_selectors_selectEntities(state)))),selectSelectedId=(0,ngrx_store.P1)(selectReserveState,(state=>state.selectedId));(0,ngrx_store.P1)(selectReserveEntities,selectSelectedId,((entities,selectedId)=>selectedId?entities[selectedId]:void 0));let ReserveEffects=class ReserveEffects{constructor(){this.actions$=(0,core.inject)(ngrx_effects.eX),this.init$=(0,ngrx_effects.GW)((()=>this.actions$.pipe((0,ngrx_effects.l4)(initReserve),(0,switchMap.w)((()=>(0,of.of)(loadReserveSuccess({reserve:[]})))),(0,catchError.K)((error=>(console.error("Error",error),(0,of.of)(loadReserveFailure({error}))))))))}};ReserveEffects=(0,tslib_es6.gn)([(0,core.Injectable)()],ReserveEffects)},"./src/app/components/services/stepper.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>StepperService});var tslib__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_ngrx_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ngrx/store/fesm2022/ngrx-store.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/using.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js"),rxjs__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js"),rxjs__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),rxjs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),_state__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/+state/index.ts");let StepperService=class StepperService{constructor(){this._stepperStore=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.yh),this._fb=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.qu),this.flagUrl$=new rxjs__WEBPACK_IMPORTED_MODULE_4__.X("info"),this.steppForm=this._fb.group({intro:this._fb.group({icon:"",check:this._fb.control(!1),id:"",values:{}}),infoUser:this._fb.group({check:this._fb.control(!0),icon:"",id:"",info:this._fb.group({familyNumber:0,roleOfMember:this._fb.array([this._fb.group({id:0,value:"",check:!1}),this._fb.group({id:0,value:"",check:!1})]),childrens:this._fb.control(0)})}),spendMoney:this._fb.group({id:"",icon:"",check:this._fb.control(!1),values:{incoming:null,spendMoney:null,revenue:null,categorySpendMoney:[{id:"",value:null,label:"",scope:[{id:"",label:"",check:!1}]}],recommendations:[{check:!1,label:""}]}}),reserveBook:this._fb.group({icon:"",id:"",check:this._fb.control(!1),values:{id:"",graph:{id:"",values:[{id:"",label:"",start:null,end:null}],howMannyMonth:null},reserve:{id:"",currentReserve:{},recommendationReserve:{},howMannyMonth:null},details:{id:"",check:!1,values:[]},modals:{setBookType:{},sumBook:{}}}})}),this.formValue$=(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.g)((()=>this.stepperForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.b)(200),(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.b)((values=>this._stepperStore.dispatch((0,_state__WEBPACK_IMPORTED_MODULE_0__.EY)(values))))).subscribe()),(()=>this._stepperStore.select(_state__WEBPACK_IMPORTED_MODULE_0__.nk))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.d)()),this.buttonDisable$=(0,rxjs__WEBPACK_IMPORTED_MODULE_9__.a)([this.formValue$,this.flagUrl$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.w)((valuesCombined=>(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(!valuesCombined[0][valuesCombined[1]].check))),(0,rxjs__WEBPACK_IMPORTED_MODULE_8__.d)())}get formValues$(){return this.formValue$}get stepperForm(){return this.steppForm}addRoleOfMember(){const newRole=this._fb.group({id:0,value:"",check:!1});this.stepperForm.controls.infoUser.controls.info.controls.roleOfMember.push(newRole)}};StepperService=(0,tslib__WEBPACK_IMPORTED_MODULE_12__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],StepperService)},"./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host .wrapper-badge {display: flex;width: max-content;align-items: center;gap: 0.5rem;padding-left: 1rem;padding-right: 1rem;transition-property: all;transition-duration: 200ms;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}:host .wrapper-badge:hover {--tw-scale-x: 1.08;--tw-scale-y: 1.08;transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity: 0.9\n}\n:host ::ng-deep mat-icon {transition-property: all;transition-duration: 200ms;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}\n:host ::ng-deep mat-icon:hover {--tw-scale-x: 1.08;--tw-scale-y: 1.08;transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity: 0.9\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-forms/src/lib/ftx-forms/shared/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'ftx-tooltip :host {\n  margin: 0.4rem;\n  width: max-content;\n  position: relative;\n}\nftx-tooltip .tooltip-container {\n  box-shadow: rgba(0, 0, 0, 0.12) 0rem 0.0625rem 0.1875rem, rgba(0, 0, 0, 0.24) 0rem 0.0625rem 0.125rem;\n  padding: 1rem;\n  margin: 0.5rem;\n  background: white;\n  width: max-content;\n  display: flex;\n  flex-direction: column;\n}\nftx-tooltip .tooltip-container .top {\n  content: "";\n  position: absolute;\n  bottom: -2%;\n  left: 39%;\n  transform: translateX(50%) rotate(225deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .bottom {\n  content: "";\n  position: absolute;\n  bottom: 89%;\n  left: 45%;\n  transform: translateX(50%) rotate(45deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .right {\n  content: "";\n  position: absolute;\n  bottom: 41%;\n  left: -0.2rem;\n  transform: translateX(0%) rotate(315deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .left {\n  content: "";\n  position: absolute;\n  bottom: 41%;\n  left: 96%;\n  transform: translateX(0%) rotate(135deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);