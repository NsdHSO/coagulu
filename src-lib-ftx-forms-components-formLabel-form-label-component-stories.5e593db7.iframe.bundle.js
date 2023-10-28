(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[829],{"./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>FormBadgeComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,form_badge_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.scss?ngResource"),form_badge_componentngResource_default=__webpack_require__.n(form_badge_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),generative_service=__webpack_require__("./ftx-sivan-shared/src/lib/service/generative.service.ts");let FormBadgeComponent=((_class=class FormBadgeComponent{constructor(){this._generativeService=(0,core.inject)(generative_service.y),this.typeBadge="error",this.actionBadge=[{side:"middle",action:()=>console.log("TEST"),text:"Nothig"}]}}).propDecorators={typeBadge:[{type:core.Input}],actionBadge:[{type:core.Input}]},_class);FormBadgeComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-form-badge",standalone:!0,imports:[common.CommonModule,icon.Ps],template:"<div\n  class=\"wrapper-badge rounded-xl border-solid border-1 drop-shadow-md text prose prose-zinc prose-lg border-2\"\n  [ngClass]=\"{\n    'bg-green-300 border-green-300 text-green-700': typeBadge === 'success',\n    'bg-blue-300 border-blue-300 text-blue-700 ': typeBadge === 'done',\n    'bg-red-300 border-red-300 text-red-700 ': typeBadge === 'error',\n    'bg-yellow-400 border-yellow-300 text-yellow-700 ': typeBadge === 'warning',\n    'bg-blue-100 border-blue-300 text-blue-700 ': typeBadge === 'open',\n    'bg-white border-gray-300': typeBadge === 'pfm'\n  }\"\n>\n  <ng-container *ngFor=\"let badge of actionBadge\">\n    <ng-container *ngIf=\"badge.side === 'left' && badge.icon\">\n      <mat-icon [svgIcon]=\"badge.icon\" (click)=\"badge.action()\" />\n    </ng-container>\n    <ng-container *ngIf=\"badge.side === 'middle' && !badge.icon\">\n      <div (click)=\"badge.action()\">\n        {{ badge.text }}\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"badge.side === 'right' && badge.icon\">\n      <mat-icon [svgIcon]=\"badge.icon\" (click)=\"badge.action()\" />\n    </ng-container>\n  </ng-container>\n</div>\n",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_badge_componentngResource_default()]})],FormBadgeComponent)},"./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>FormLabelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,form_label_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.scss?ngResource"),form_label_componentngResource_default=__webpack_require__.n(form_label_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),form_badge_component=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.ts"),render_you_directive=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/directive/render-you.directive.ts");let FormLabelComponent=((_class=class FormLabelComponent{constructor(){this.isFormArray=!1,this.label="",this.typeInput="text",this.labelInput="Complete label",this.actionBadge=[{icon:"fa_solid:RO",side:"left",action:()=>console.log("ivan")}]}}).propDecorators={isFormArray:[{type:core.Input}],label:[{type:core.Input}],typeInput:[{type:core.Input}],labelInput:[{type:core.Input}],haveTooltip:[{type:core.Input}],descriptionEntity:[{type:core.Input}]},_class);FormLabelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-form-label",standalone:!0,imports:[common.CommonModule,icon.Ps,form_badge_component.f,render_you_directive.A],template:'<div class="flex w-60 px-5" *ngIf="(label || labelInput) && !isFormArray">\n  <p\n    [ngClass]="{ invisible: typeInput === \'boolean\' }"\n    class="flex-1 text prose prose-zinc prose-xl !mx-4 !my-0"\n    *ngIf="(label || labelInput) && !isFormArray"\n  >\n    {{ label }}\n  </p>\n\n  <div\n    *ngIf="(label || labelInput) && !isFormArray"\n    class="flex h-8 items-center"\n  >\n    <ngx-form-badge [actionBadge]="actionBadge" renderYou [element]="test" />\n  </div>\n</div>\n\n<ng-template #test>\n  <div>\n    sdasdasd\n    <div>dadasdssssssssssssssssasd</div>\n    <div>dasdasdasd</div>\n    <p>sdasdasd</p>\n    <p>sdasdasd</p>\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_label_componentngResource_default()]})],FormLabelComponent)},"./ftx-sivan-shared/src/lib/service/generative.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>GenerativeService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let GenerativeService=class GenerativeService{trackBy(index,entity){return index}};GenerativeService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],GenerativeService)},"./ftx-tooltip/src/lib/ftx-tooltip/directive/render-you.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>RenderYouDirective});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ftx_tooltip_component=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.ts");let ZoneAxeService=((_class=class ZoneAxeService{constructor(tooltip,target,renderer2){this.tooltip=tooltip,this.target=target,this.renderer2=renderer2,this.tooltipRect=tooltip.getBoundingClientRect(),this.buttonRect=target.getBoundingClientRect()}axes(){return this.calculatePositionRecursively(this.buttonRect,this.tooltipRect,16,40)}calculatePositionRecursively(buttonRect,tooltipRect,paddingTooltip,padding){const arrowFct=this.tooltip.children[0].children[0],centerX=buttonRect.left+buttonRect.width/2,centerY=buttonRect.bottom-buttonRect.height/2-tooltipRect.height/2,position={top:"",left:""};if(buttonRect.right+tooltipRect.width+padding<window.innerWidth&&centerY+tooltipRect.height<window.innerHeight&&centerY>=-40)position.top=centerY>=0?`${centerY}`:""+(buttonRect.top+10-paddingTooltip),position.left=`${centerX+paddingTooltip+buttonRect.width/2}`,this.renderer2.addClass(arrowFct,"right"),centerY<=0&&this.renderer2.setStyle(arrowFct,"top",(buttonRect.top-buttonRect.height/2)/16+"rem");else if(buttonRect.left-tooltipRect.width>0&&centerY+tooltipRect.height<window.innerHeight)position.top=centerY>=0?`${centerY}`:""+(buttonRect.top+10-paddingTooltip),position.left=""+(buttonRect.left+paddingTooltip-tooltipRect.width),this.renderer2.addClass(arrowFct,"left");else if(buttonRect.bottom+tooltipRect.height+padding<window.innerHeight)position.top=`${buttonRect.bottom+paddingTooltip}`,position.left=""+(centerX-tooltipRect.width/2),this.renderer2.addClass(arrowFct,"bottom");else{if(!(buttonRect.top-tooltipRect.height-paddingTooltip>0))return position;position.top=""+(buttonRect.top-paddingTooltip-tooltipRect.height),position.left=""+(centerX-tooltipRect.width/2),this.renderer2.addClass(arrowFct,"top"),centerX+tooltipRect.width/2>window.innerWidth&&(position.left=`${centerX-tooltipRect.width+buttonRect.width/2+paddingTooltip}`,this.renderer2.setStyle(arrowFct,"left",(tooltipRect.width-tooltipRect.width/4)/16+"rem"))}return position}}).ctorParameters=()=>[{type:HTMLDivElement},{type:HTMLElement},{type:core.Renderer2}],_class);var render_you_directive_class;ZoneAxeService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"}),(0,tslib_es6.w6)("design:paramtypes",[HTMLDivElement,HTMLElement,core.Renderer2])],ZoneAxeService);let RenderYouDirective=((render_you_directive_class=class RenderYouDirective{constructor(){this.elementRef=(0,core.inject)(core.ElementRef),this.renderer2=(0,core.inject)(core.Renderer2),this.componentFactoryResolver=(0,core.inject)(core.ComponentFactoryResolver),this.viewContainerRef=(0,core.inject)(core.ViewContainerRef)}onMouseEnter(event){const element=this.elementRef.nativeElement;if(event.target===element){const componentFactory=this.componentFactoryResolver.resolveComponentFactory(ftx_tooltip_component.U);this.componentRef=this.viewContainerRef.createComponent(componentFactory),this.componentRef.instance.rendererTemplate=this.element,this.componentRef.instance.text=this.elementText;const appRoot=document.querySelector("app-root"),storybook=document.querySelector("storybook-root"),elementToAdd=this.componentRef.location.nativeElement,insertAfter=(newNode,referenceNode)=>{referenceNode?.parentNode&&referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling)};appRoot?insertAfter(elementToAdd,appRoot):storybook&&insertAfter(elementToAdd,storybook),this.componentRef.location.nativeElement.style.position="absolute",this.componentRef.changeDetectorRef.detectChanges();const position=new ZoneAxeService(this.componentRef.location.nativeElement,element,this.renderer2).axes();this.componentRef.location.nativeElement.style.top=+position.top/16+"rem",this.componentRef.location.nativeElement.style.left=+position.left/16+"rem",this.componentRef.location.nativeElement.style.zIndex="98",this.componentRef.changeDetectorRef.detectChanges()}}onMouseLeave(){this.componentRef&&(this.componentRef.destroy(),this.componentRef=null)}}).propDecorators={element:[{type:core.Input}],elementText:[{type:core.Input}],onMouseEnter:[{type:core.HostListener,args:["mouseenter",["$event"]]}],onMouseLeave:[{type:core.HostListener,args:["mouseleave"]}]},render_you_directive_class);RenderYouDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[renderYou] ",standalone:!0})],RenderYouDirective)},"./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>FtxTooltipComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var ftx_tooltip_componentngResource=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.scss?ngResource"),ftx_tooltip_componentngResource_default=__webpack_require__.n(ftx_tooltip_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let IncrementZindexDirective=class IncrementZindexDirective{constructor(){this.elementRef=(0,core.inject)(core.ElementRef),this.renderer2=(0,core.inject)(core.Renderer2)}ngOnInit(){document.querySelectorAll("[coaguluIncrementZindex]").forEach(((element,index)=>{this.renderer2.setStyle(element,"z-index",100-index)}))}};var _class,FtxTooltipComponent_1;IncrementZindexDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[coaguluIncrementZindex]",standalone:!0})],IncrementZindexDirective);let FtxTooltipComponent=(FtxTooltipComponent_1=_class=class FtxTooltipComponent{constructor(){this.text=""}},_class.propDecorators={rendererTemplate:[{type:core.Input}],content:[{type:core.ContentChild,args:[FtxTooltipComponent_1]}],text:[{type:core.Input}]},_class);FtxTooltipComponent=FtxTooltipComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"ftx-tooltip",standalone:!0,imports:[common.CommonModule,IncrementZindexDirective],template:'<div class="tooltip-container shadow-2x shadow-inner" coaguluIncrementZindex>\n  \x3c!--  arrow --\x3e\n  <div></div>\n  <ng-container *ngIf="text">\n    <div data-test="text-tooltip" class="tooltip-text">{{ text }}</div>\n  </ng-container>\n  <ng-container *ngTemplateOutlet="rendererTemplate || default"></ng-container>\n</div>\n\n<ng-template #default> TESADSDASD</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,styles:[ftx_tooltip_componentngResource_default()]})],FtxTooltipComponent)},"./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"FormLabelComponent",component:__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.ts").h},Primary={render:args=>({props:args}),args:{isFormArray:!1,typeInput:"boolean",actionBadge:[{side:"middle",action:()=>console.log("TEST"),text:"sss"}]}}},"./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host .wrapper-badge {display: flex;width: max-content;align-items: center;gap: 0.5rem;padding-left: 1rem;padding-right: 1rem;transition-property: all;transition-duration: 200ms;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}:host .wrapper-badge:hover {--tw-scale-x: 1.08;--tw-scale-y: 1.08;transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity: 0.9\n}\n:host ::ng-deep mat-icon {transition-property: all;transition-duration: 200ms;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}\n:host ::ng-deep mat-icon:hover {--tw-scale-x: 1.08;--tw-scale-y: 1.08;transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity: 0.9\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-forms/src/lib/ftx-forms/components/formLabel/form-label.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'ftx-tooltip :host {\n  margin: 0.4rem;\n  width: max-content;\n  position: relative;\n}\nftx-tooltip .tooltip-container {\n  box-shadow: rgba(0, 0, 0, 0.12) 0rem 0.0625rem 0.1875rem, rgba(0, 0, 0, 0.24) 0rem 0.0625rem 0.125rem;\n  padding: 1rem;\n  margin: 0.5rem;\n  background: white;\n  width: max-content;\n  display: flex;\n  flex-direction: column;\n}\nftx-tooltip .tooltip-container .top {\n  content: "";\n  position: absolute;\n  bottom: -2%;\n  left: 39%;\n  transform: translateX(50%) rotate(225deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .bottom {\n  content: "";\n  position: absolute;\n  bottom: 89%;\n  left: 45%;\n  transform: translateX(50%) rotate(45deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .right {\n  content: "";\n  position: absolute;\n  bottom: 41%;\n  left: -0.2rem;\n  transform: translateX(0%) rotate(315deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .left {\n  content: "";\n  position: absolute;\n  bottom: 41%;\n  left: 96%;\n  transform: translateX(0%) rotate(135deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);