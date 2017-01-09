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
var emotion_service_1 = require("./services/emotion.service");
var menu_data_service_1 = require("./services/menu-data.service");
var custom_emotion_service_1 = require("./services/custom-emotion.service");
var Ng2EmojifyComponent = (function () {
    function Ng2EmojifyComponent(menuDataService, emotionService, customEmotionService, renderer) {
        /* ***********************************************
         * Setting image content to display in menu
         * *********************************************** */
        this.menuDataService = menuDataService;
        this.emotionService = emotionService;
        this.customEmotionService = customEmotionService;
        this.renderer = renderer;
        this.mouseLocation = { left: 0, top: 0 };
        this.images = [];
        /* ***********************************************
         * Default css declarations
         * *********************************************** */
        this.defaultDisplayCss = {
            position: 'fixed',
            display: 'none',
            left: '0px',
            top: '0px',
            width: 520 + 'px',
            height: 200 + 'px',
            border: '1px solid blue',
            'background-color': 'white',
            'border-radius': '10px 10px 10px 0px',
            'z-index': 1,
            'overflow-x': 'hidden'
        };
        this.defaultEmotionContainerCss = {
            float: 'left',
            width: 70 + 'px',
            height: 80 + 'px',
            margin: '15px',
            'background-color': 'green'
        };
        this.defaultEmotionImageCss = {
            width: '100%',
            height: '100%',
            margin: '0px'
        };
        this.images = this.customEmotionService.GetEmotions();
    }
    Ng2EmojifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* ***************************************************
         * Sets Custom css and target Id
         * *************************************************** */
        this.menuDataService.GetCustomData().subscribe(function (customData) {
            _this.customEmotionMenuCss = customData.customEmotionMenuCss;
            _this.customEmotionContainerCss = customData.customEmotionContainerCss;
            _this.customEmotionImageCss = customData.customEmotionImageCss;
            _this.targetId = customData.directiveHostElementId;
        });
        this.menuDataService.menu.subscribe(function (mouseLocation) {
            _this.mouseLocation = mouseLocation.mouseLocation;
        });
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (!(event.target.id === _this.targetId)
                && !(event.target.id === 'app-emogi-menu')
                && !(event.target.className === 'app-emogi-image')) {
                document.getElementById('app-emogi-menu').style.display = 'none';
            }
        });
    };
    /* **************************************************************************************
     * Methods definitions
     * ************************************************************************************** */
    Ng2EmojifyComponent.prototype.setImageInformation = function (imageInfo) {
        this.emotionService.SetEmotionInformation(imageInfo);
    };
    Object.defineProperty(Ng2EmojifyComponent.prototype, "emotionMenuCss", {
        get: function () {
            if (this.customEmotionMenuCss) {
                this.customEmotionMenuCss.left = this.mouseLocation.left + 'px';
                this.customEmotionMenuCss.top = this.mouseLocation.top + 'px';
                this.customEmotionMenuCss.display = 'none';
            }
            else {
                this.defaultDisplayCss.left = this.mouseLocation.left + 'px';
                this.defaultDisplayCss.top = this.mouseLocation.top + 'px';
            }
            return (this.customEmotionMenuCss || this.defaultDisplayCss);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng2EmojifyComponent.prototype, "emotionContainerCss", {
        get: function () {
            return (this.customEmotionContainerCss || this.defaultEmotionContainerCss);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng2EmojifyComponent.prototype, "emotionImageCss", {
        get: function () {
            return (this.customEmotionImageCss || this.defaultEmotionImageCss);
        },
        enumerable: true,
        configurable: true
    });
    Ng2EmojifyComponent = __decorate([
        core_1.Component({
            selector: 'emoji-menu',
            templateUrl: './ng2-emojify.component.html',
            styleUrls: ['./ng2-emojify.component.css']
        }), 
        __metadata('design:paramtypes', [menu_data_service_1.MenuDataService, emotion_service_1.EmotionService, custom_emotion_service_1.CustomEmotionService, core_1.Renderer])
    ], Ng2EmojifyComponent);
    return Ng2EmojifyComponent;
}());
exports.Ng2EmojifyComponent = Ng2EmojifyComponent;
//# sourceMappingURL=ng2-emojify.component.js.map