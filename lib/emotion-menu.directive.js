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
var menu_data_service_1 = require("./services/menu-data.service");
var EmotionMenuDirective = (function () {
    function EmotionMenuDirective(menuDataService, _elementRef) {
        this.menuDataService = menuDataService;
        this._elementRef = _elementRef;
        this.emotionMenu = {};
    }
    EmotionMenuDirective.prototype.ngAfterContentInit = function () {
        var customData = {};
        customData.customEmotionMenuCss = this.emotionMenu.customEmotionMenuCss || null;
        customData.customEmotionContainerCss = this.emotionMenu.customEmotionContainerCss || null;
        customData.customEmotionImageCss = this.emotionMenu.customEmotionImageCss || null;
        customData.directiveHostElementId = this._elementRef.nativeElement.id || null;
        this.menuDataService.SetCustomData(customData);
    };
    EmotionMenuDirective.prototype.onMouseClick = function (event) {
        event.preventDefault();
        if (event.target.id === this._elementRef.nativeElement.id) {
            document.getElementById('app-emogi-menu').style.display = 'block';
            var height = Number(document.getElementById('app-emogi-menu').style.height.replace('px', ''));
            var mouseLocation = {
                left: event.clientX,
                top: event.clientY - height
            };
            this.menuDataService.menu.next({ mouseLocation: mouseLocation });
        }
    };
    __decorate([
        core_1.Input('emotion-menu'), 
        __metadata('design:type', Object)
    ], EmotionMenuDirective.prototype, "emotionMenu", void 0);
    EmotionMenuDirective = __decorate([
        core_1.Directive({
            selector: '[emotion-menu]',
            host: { '(click)': 'onMouseClick($event)' }
        }), 
        __metadata('design:paramtypes', [menu_data_service_1.MenuDataService, core_1.ElementRef])
    ], EmotionMenuDirective);
    return EmotionMenuDirective;
}());
exports.EmotionMenuDirective = EmotionMenuDirective;
//# sourceMappingURL=emotion-menu.directive.js.map