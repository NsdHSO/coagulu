(self.webpackChunk_coagulu_source=self.webpackChunk_coagulu_source||[]).push([[982],{"./ftx-sivan-shared/src/lib/components/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./ftx-sivan-shared/src/lib/components/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),fesm2022_core=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs");let ButtonComponent=class ButtonComponent{constructor(){this.marian=new core.EventEmitter,this.disable=!0,this.roundedFull="",this.typeButton="",this.class=""}get allClass(){return this.class+" "+this.roundedFull}static#_=this.propDecorators={marian:[{type:core.Output}],disable:[{type:core.Input}],roundedFull:[{type:core.Input}],typeButton:[{type:core.Input}],class:[{type:core.Input}]}};ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sivan-button-component",standalone:!0,imports:[common.CommonModule,fesm2022_button.ot,fesm2022_core.si],template:'<button\n  [type]="typeButton"\n  [disabled]="!disable"\n  [ngClass]="{\n    \'cursor-pointer\': disable,\n    \'bg-blue-700 cursor-not-allowed\': !disable\n  }"\n  class="p-2 bg-blue-500 text-white"\n  [class]="allClass"\n  [attr.aria-label]="roundedFull"\n  (click)="marian.emit()"\n  mat-ripple\n>\n  <ng-content></ng-content>\n</button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[button_componentngResource_default()]})],ButtonComponent)},"./ftx-sivan-shared/src/lib/components/button/button.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonWithDocs:()=>ButtonWithDocs,Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"ButtonComponent",component:__webpack_require__("./ftx-sivan-shared/src/lib/components/button/button.component.ts").r,tags:["autodocs"]},Primary=args=>({props:args,template:"\n      <sivan-button-component [disable]='disable' [roundedFull]='roundedFull' (marian)=\"marian()\" class=\"class\">\n            Click Me\n      </sivan-button-component>\n    ",methods:{marian(){console.log("test")}}}),ButtonWithDocs=Primary.bind({});ButtonWithDocs.argTypes={roundedFull:{control:"select",options:["rounded-s","rounded-md","rounded-xl","rounded-full"],defaultValue:"rounded-s"},disable:{options:[!0,!1],control:{type:"radio"}},class:{control:"select",options:["bg-red-500","text-blue","text-white"],defaultValue:"bg-red-500"}}},"./ftx-sivan-shared/src/lib/components/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);