(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[747],{"./ftx-sivan-shared/src/lib/components/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./ftx-sivan-shared/src/lib/components/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),fesm2022_core=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs");let ButtonComponent=class ButtonComponent{constructor(){this.marian=new core.EventEmitter,this.disable=!0,this.roundedFull="",this.typeButton=""}static#_=this.propDecorators={marian:[{type:core.Output}],disable:[{type:core.Input}],roundedFull:[{type:core.Input}],typeButton:[{type:core.Input}]}};ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sivan-button-component",standalone:!0,imports:[common.CommonModule,fesm2022_button.ot,fesm2022_core.si],template:'<button\n  [type]="typeButton"\n  [disabled]="!disable"\n  [ngClass]="{\n    \'bg-blue-500 cursor-pointer\': disable,\n    \'bg-blue-700 cursor-not-allowed\': !disable\n  }"\n  class="p-2 bg-blue-500 text-white"\n  [class]="roundedFull"\n  [attr.aria-label]="roundedFull"\n  (click)="marian.emit()"\n  mat-ripple\n>\n  <ng-content></ng-content>\n</button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[button_componentngResource_default()]})],ButtonComponent)},"./ftx-sivan-shared/src/lib/service/generative.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>GenerativeService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let GenerativeService=class GenerativeService{trackBy(index,entity){return index}};GenerativeService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],GenerativeService)},"./ftx-sivan-shared/src/lib/components/progress/progress.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WorkBack:()=>WorkBack,default:()=>progress_component_stories});var http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var progress_componentngResource=__webpack_require__("./ftx-sivan-shared/src/lib/components/progress/progress.component.scss?ngResource"),progress_componentngResource_default=__webpack_require__.n(progress_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),button_component=__webpack_require__("./ftx-sivan-shared/src/lib/components/button/button.component.ts"),generative_service=__webpack_require__("./ftx-sivan-shared/src/lib/service/generative.service.ts");let ProgressComponent=class ProgressComponent{constructor(){this._activateRoute=(0,core.inject)(router.gz),this.generativeService=(0,core.inject)(generative_service.y),this.configs=this._activateRoute.snapshot.data.stepper,this.actions=this._activateRoute.snapshot.data.actions}};ProgressComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sivan-progress",standalone:!0,imports:[common.CommonModule,icon.Ps,router.lC,button_component.r],template:'<div data-test="sivan-shared-progress" class="progress-wrapper">\n  <div class="progress-wrapper-content">\n    <router-outlet></router-outlet>\n  </div>\n  <div\n    class="progress-wrapper-bar"\n    [ngClass]="{ \'justify-center\': !configs }"\n    data-test="sivan-shared-progress-bar"\n  >\n    <div class="flex flex-1" *ngIf="configs">\n      <ng-container\n        *ngFor="let config of configs; trackBy: generativeService.trackBy"\n      >\n        <div data-test="sivan-shared-progress-entities">\n          <mat-icon [svgIcon]="config.icon"> </mat-icon>\n        </div>\n      </ng-container>\n    </div>\n    <div class="gap-2 flex">\n      <ng-container\n        *ngFor="let action of actions; trackBy: generativeService.trackBy"\n      >\n        <sivan-button-component\n          data-test="sivan-shared-progress-actions"\n          roundedFull="rounded-md"\n          [disable]="action.disabled | async"\n          (marian)="(action.event)"\n        >\n          {{ action.name }}\n        </sivan-button-component>\n      </ng-container>\n    </div>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[progress_componentngResource_default()]})],ProgressComponent);const progress_component_stories={title:"ProgressComponent",component:ProgressComponent,decorators:[(0,dist.moduleMetadata)({imports:[ProgressComponent],providers:[(0,animations.provideAnimations)()]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(http.JF)]})],tags:["autodocs"]},WorkBack=(args=>({props:args})).bind({});WorkBack.args={}},"./ftx-sivan-shared/src/lib/components/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./ftx-sivan-shared/src/lib/components/progress/progress.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".progress-wrapper-content {\n  width: 100%;\n  height: calc(100vh - 3rem);\n}\n.progress-wrapper-bar {\n  display: flex;\n  align-items: center;\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 253 244 / var(--tw-bg-opacity));\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  width: 100%;\n  height: 3rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);