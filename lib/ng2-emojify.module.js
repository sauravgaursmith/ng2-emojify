"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_emojify_component_1 = require('./ng2-emojify.component');
var emojify_pipe_1 = require('./emojify.pipe');
var menu_data_service_1 = require("./services/menu-data.service");
var emotion_service_1 = require("./services/emotion.service");
var custom_emotion_service_1 = require("./services/custom-emotion.service");
var emotion_menu_directive_1 = require('./emotion-menu.directive');
var Ng2EmojifyModule = (function () {
    function Ng2EmojifyModule() {
    }
    Ng2EmojifyModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                ng2_emojify_component_1.Ng2EmojifyComponent,
                emojify_pipe_1.EmojifyPipe,
                emotion_menu_directive_1.EmotionMenuDirective
            ],
            providers: [
                menu_data_service_1.MenuDataService,
                emotion_service_1.EmotionService,
                custom_emotion_service_1.CustomEmotionService
            ],
            exports: [
                emotion_menu_directive_1.EmotionMenuDirective,
                emojify_pipe_1.EmojifyPipe,
                ng2_emojify_component_1.Ng2EmojifyComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2EmojifyModule);
    return Ng2EmojifyModule;
}());
exports.Ng2EmojifyModule = Ng2EmojifyModule;
//# sourceMappingURL=ng2-emojify.module.js.map