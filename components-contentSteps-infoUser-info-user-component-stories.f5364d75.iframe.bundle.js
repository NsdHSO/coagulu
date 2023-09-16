(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[62],{"./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>FormBadgeComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,form_badge_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.scss?ngResource"),form_badge_componentngResource_default=__webpack_require__.n(form_badge_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),generative_service=__webpack_require__("./ftx-sivan-shared/src/lib/service/generative.service.ts");let FormBadgeComponent=((_class=class FormBadgeComponent{constructor(){this._generativeService=(0,core.inject)(generative_service.y),this.typeBadge="error",this.actionBadge=[{side:"middle",action:()=>console.log("TEST"),text:"Nothig"}]}}).propDecorators={typeBadge:[{type:core.Input}],actionBadge:[{type:core.Input}]},_class);FormBadgeComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-form-badge",standalone:!0,imports:[common.CommonModule,icon.Ps],template:"<div\n  class=\"wrapper-badge rounded-xl border-solid border-1 drop-shadow-md text prose prose-zinc prose-lg border-2\"\n  [ngClass]=\"{\n    'bg-green-300 border-green-300 text-green-700': typeBadge === 'success',\n    'bg-blue-300 border-blue-300 text-blue-700 ': typeBadge === 'done',\n    'bg-red-300 border-red-300 text-red-700 ': typeBadge === 'error',\n    'bg-yellow-400 border-yellow-300 text-yellow-700 ': typeBadge === 'warning',\n    'bg-blue-100 border-blue-300 text-blue-700 ': typeBadge === 'open',\n    'bg-white border-gray-300': typeBadge === 'pfm'\n  }\"\n>\n  <ng-container *ngFor=\"let badge of actionBadge\">\n    <ng-container *ngIf=\"badge.side === 'left' && badge.icon\">\n      <mat-icon [svgIcon]=\"badge.icon\" (click)=\"badge.action()\" />\n    </ng-container>\n    <ng-container *ngIf=\"badge.side === 'middle' && !badge.icon\">\n      <div (click)=\"badge.action()\">\n        {{ badge.text }}\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"badge.side === 'right' && badge.icon\">\n      <mat-icon [svgIcon]=\"badge.icon\" (click)=\"badge.action()\" />\n    </ng-container>\n  </ng-container>\n</div>\n",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_badge_componentngResource_default()]})],FormBadgeComponent)},"./ftx-forms/src/lib/ftx-forms/shared/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,button_componentngResource=__webpack_require__("./ftx-forms/src/lib/ftx-forms/shared/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs");let ButtonComponent=((_class=class ButtonComponent{constructor(){this.marian=new core.EventEmitter,this.roundedFull="",this.typeButton=""}}).propDecorators={marian:[{type:core.Output}],disable:[{type:core.Input}],roundedFull:[{type:core.Input}],typeButton:[{type:core.Input}]},_class);ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngx-button-component",standalone:!0,imports:[common.CommonModule,fesm2022_button.ot],template:'<button\n  [type]="typeButton"\n  [disabled]="disable"\n  [ngClass]="{ \'!bg-blue-700\': disable }"\n  mat-button\n  (click)="marian.emit()"\n  class="mat-primary mat-raised-button !bg-blue-500 !text-white p-2"\n  [className]="roundedFull"\n>\n  <ng-content></ng-content>\n</button>\n<ng-template #element>tete</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[button_componentngResource_default()]})],ButtonComponent)},"./ftx-sivan-shared/src/lib/service/generative.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>GenerativeService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let GenerativeService=class GenerativeService{trackBy(index,entity){return index}};GenerativeService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],GenerativeService)},"./ftx-tooltip/src/lib/ftx-tooltip/directive/render-you.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>RenderYouDirective});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ftx_tooltip_component=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.ts");let ZoneAxeService=((_class=class ZoneAxeService{constructor(tooltip,target,renderer2){this.tooltip=tooltip,this.target=target,this.renderer2=renderer2,this.tooltipRect=tooltip.getBoundingClientRect(),this.buttonRect=target.getBoundingClientRect()}axes(){return this.calculatePositionRecursively(this.buttonRect,this.tooltipRect,16,40)}calculatePositionRecursively(buttonRect,tooltipRect,paddingTooltip,padding){const arrowFct=this.tooltip.children[0].children[0],centerX=buttonRect.left+buttonRect.width/2,centerY=buttonRect.bottom-buttonRect.height/2-tooltipRect.height/2,position={top:"",left:""};if(buttonRect.right+tooltipRect.width+padding<window.innerWidth&&centerY+tooltipRect.height<window.innerHeight&&centerY>=-40)position.top=centerY>=0?`${centerY}`:""+(buttonRect.top+10-paddingTooltip),position.left=`${centerX+paddingTooltip+buttonRect.width/2}`,this.renderer2.addClass(arrowFct,"right"),centerY<=0&&this.renderer2.setStyle(arrowFct,"top",(buttonRect.top-buttonRect.height/2)/16+"rem");else if(buttonRect.left-tooltipRect.width>0&&centerY+tooltipRect.height<window.innerHeight)position.top=centerY>=0?`${centerY}`:""+(buttonRect.top+10-paddingTooltip),position.left=""+(buttonRect.left+paddingTooltip-tooltipRect.width),this.renderer2.addClass(arrowFct,"left");else if(buttonRect.bottom+tooltipRect.height+padding<window.innerHeight)position.top=`${buttonRect.bottom+paddingTooltip}`,position.left=""+(centerX-tooltipRect.width/2),this.renderer2.addClass(arrowFct,"bottom");else{if(!(buttonRect.top-tooltipRect.height-paddingTooltip>0))return position;position.top=""+(buttonRect.top-paddingTooltip-tooltipRect.height),position.left=""+(centerX-tooltipRect.width/2),this.renderer2.addClass(arrowFct,"top"),centerX+tooltipRect.width/2>window.innerWidth&&(position.left=`${centerX-tooltipRect.width+buttonRect.width/2+paddingTooltip}`,this.renderer2.setStyle(arrowFct,"left",(tooltipRect.width-tooltipRect.width/4)/16+"rem"))}return position}}).ctorParameters=()=>[{type:HTMLDivElement},{type:HTMLElement},{type:core.Renderer2}],_class);var render_you_directive_class;ZoneAxeService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"}),(0,tslib_es6.w6)("design:paramtypes",[HTMLDivElement,HTMLElement,core.Renderer2])],ZoneAxeService);let RenderYouDirective=((render_you_directive_class=class RenderYouDirective{constructor(){this.elementRef=(0,core.inject)(core.ElementRef),this.renderer2=(0,core.inject)(core.Renderer2),this.componentFactoryResolver=(0,core.inject)(core.ComponentFactoryResolver),this.viewContainerRef=(0,core.inject)(core.ViewContainerRef)}onMouseEnter(event){const element=this.elementRef.nativeElement;if(event.target===element){const componentFactory=this.componentFactoryResolver.resolveComponentFactory(ftx_tooltip_component.U);this.componentRef=this.viewContainerRef.createComponent(componentFactory),this.componentRef.instance.rendererTemplate=this.element,this.componentRef.instance.text=this.elementText;const appRoot=document.querySelector("app-root"),storybook=document.querySelector("storybook-root"),elementToAdd=this.componentRef.location.nativeElement,insertAfter=(newNode,referenceNode)=>{referenceNode?.parentNode&&referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling)};appRoot?insertAfter(elementToAdd,appRoot):storybook&&insertAfter(elementToAdd,storybook),this.componentRef.location.nativeElement.style.position="absolute",this.componentRef.changeDetectorRef.detectChanges();const position=new ZoneAxeService(this.componentRef.location.nativeElement,element,this.renderer2).axes();this.componentRef.location.nativeElement.style.top=+position.top/16+"rem",this.componentRef.location.nativeElement.style.left=+position.left/16+"rem",this.componentRef.location.nativeElement.style.zIndex="98",this.componentRef.changeDetectorRef.detectChanges()}}onMouseLeave(){this.componentRef&&(this.componentRef.destroy(),this.componentRef=null)}}).propDecorators={element:[{type:core.Input}],elementText:[{type:core.Input}],onMouseEnter:[{type:core.HostListener,args:["mouseenter",["$event"]]}],onMouseLeave:[{type:core.HostListener,args:["mouseleave"]}]},render_you_directive_class);RenderYouDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[renderYou] ",standalone:!0})],RenderYouDirective)},"./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>FtxTooltipComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var ftx_tooltip_componentngResource=__webpack_require__("./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.scss?ngResource"),ftx_tooltip_componentngResource_default=__webpack_require__.n(ftx_tooltip_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let IncrementZindexDirective=class IncrementZindexDirective{constructor(){this.elementRef=(0,core.inject)(core.ElementRef),this.renderer2=(0,core.inject)(core.Renderer2)}ngOnInit(){document.querySelectorAll("[coaguluIncrementZindex]").forEach(((element,index)=>{this.renderer2.setStyle(element,"z-index",100-index)}))}};var _class,FtxTooltipComponent_1;IncrementZindexDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[coaguluIncrementZindex]",standalone:!0})],IncrementZindexDirective);let FtxTooltipComponent=(FtxTooltipComponent_1=_class=class FtxTooltipComponent{constructor(){this.text=""}},_class.propDecorators={rendererTemplate:[{type:core.Input}],content:[{type:core.ContentChild,args:[FtxTooltipComponent_1]}],text:[{type:core.Input}]},_class);FtxTooltipComponent=FtxTooltipComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"ftx-tooltip",standalone:!0,imports:[common.CommonModule,IncrementZindexDirective],template:'<div class="tooltip-container shadow-2x shadow-inner" coaguluIncrementZindex>\n  \x3c!--  arrow --\x3e\n  <div></div>\n  <ng-container *ngIf="text">\n    <div data-test="text-tooltip" class="tooltip-text">{{ text }}</div>\n  </ng-container>\n  <ng-container *ngTemplateOutlet="rendererTemplate || default"></ng-container>\n</div>\n\n<ng-template #default> TESADSDASD</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,styles:[ftx_tooltip_componentngResource_default()]})],FtxTooltipComponent)},"./src/app/components/contentSteps/infoUser/info-user.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"InfoUserComponent",component:__webpack_require__("./src/app/components/contentSteps/infoUser/info-user.component.ts").InfoUserComponent},Primary={render:args=>({props:args}),args:{}}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>shareReplay});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),dateTimestampProvider=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js"),ReplaySubject=function(_super){function ReplaySubject(_bufferSize,_windowTime,_timestampProvider){void 0===_bufferSize&&(_bufferSize=1/0),void 0===_windowTime&&(_windowTime=1/0),void 0===_timestampProvider&&(_timestampProvider=dateTimestampProvider.l);var _this=_super.call(this)||this;return _this._bufferSize=_bufferSize,_this._windowTime=_windowTime,_this._timestampProvider=_timestampProvider,_this._buffer=[],_this._infiniteTimeWindow=!0,_this._infiniteTimeWindow=_windowTime===1/0,_this._bufferSize=Math.max(1,_bufferSize),_this._windowTime=Math.max(1,_windowTime),_this}return(0,tslib_es6.ZT)(ReplaySubject,_super),ReplaySubject.prototype.next=function(value){var _a=this,isStopped=_a.isStopped,_buffer=_a._buffer,_infiniteTimeWindow=_a._infiniteTimeWindow,_timestampProvider=_a._timestampProvider,_windowTime=_a._windowTime;isStopped||(_buffer.push(value),!_infiniteTimeWindow&&_buffer.push(_timestampProvider.now()+_windowTime)),this._trimBuffer(),_super.prototype.next.call(this,value)},ReplaySubject.prototype._subscribe=function(subscriber){this._throwIfClosed(),this._trimBuffer();for(var subscription=this._innerSubscribe(subscriber),_infiniteTimeWindow=this._infiniteTimeWindow,copy=this._buffer.slice(),i=0;i<copy.length&&!subscriber.closed;i+=_infiniteTimeWindow?1:2)subscriber.next(copy[i]);return this._checkFinalizedStatuses(subscriber),subscription},ReplaySubject.prototype._trimBuffer=function(){var _bufferSize=this._bufferSize,_timestampProvider=this._timestampProvider,_buffer=this._buffer,_infiniteTimeWindow=this._infiniteTimeWindow,adjustedBufferSize=(_infiniteTimeWindow?1:2)*_bufferSize;if(_bufferSize<1/0&&adjustedBufferSize<_buffer.length&&_buffer.splice(0,_buffer.length-adjustedBufferSize),!_infiniteTimeWindow){for(var now=_timestampProvider.now(),last=0,i=1;i<_buffer.length&&_buffer[i]<=now;i+=2)last=i;last&&_buffer.splice(0,last+1)}},ReplaySubject}(Subject.x),share=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js");function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,(0,share.B)({connector:function(){return new ReplaySubject(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./ftx-forms/src/lib/ftx-forms/components/formBadge/form-badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host .wrapper-badge {display: flex;width: max-content;align-items: center;gap: 0.5rem;padding-left: 1rem;padding-right: 1rem;transition-property: all;transition-duration: 200ms;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}:host .wrapper-badge:hover {--tw-scale-x: 1.08;--tw-scale-y: 1.08;transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity: 0.9\n}\n:host ::ng-deep mat-icon {transition-property: all;transition-duration: 200ms;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}\n:host ::ng-deep mat-icon:hover {--tw-scale-x: 1.08;--tw-scale-y: 1.08;transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity: 0.9\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-forms/src/lib/ftx-forms/shared/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-tooltip/src/lib/ftx-tooltip/ftx-tooltip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'ftx-tooltip :host {\n  margin: 0.4rem;\n  width: max-content;\n  position: relative;\n}\nftx-tooltip .tooltip-container {\n  box-shadow: rgba(0, 0, 0, 0.12) 0rem 0.0625rem 0.1875rem, rgba(0, 0, 0, 0.24) 0rem 0.0625rem 0.125rem;\n  padding: 1rem;\n  margin: 0.5rem;\n  background: white;\n  width: max-content;\n  display: flex;\n  flex-direction: column;\n}\nftx-tooltip .tooltip-container .top {\n  content: "";\n  position: absolute;\n  bottom: -2%;\n  left: 39%;\n  transform: translateX(50%) rotate(225deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .bottom {\n  content: "";\n  position: absolute;\n  bottom: 89%;\n  left: 45%;\n  transform: translateX(50%) rotate(45deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .right {\n  content: "";\n  position: absolute;\n  bottom: 41%;\n  left: -0.2rem;\n  transform: translateX(0%) rotate(315deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}\nftx-tooltip .tooltip-container .left {\n  content: "";\n  position: absolute;\n  bottom: 41%;\n  left: 96%;\n  transform: translateX(0%) rotate(135deg);\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.12);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.12);\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);