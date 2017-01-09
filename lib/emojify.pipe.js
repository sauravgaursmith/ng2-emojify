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
var custom_emotion_service_1 = require("./services/custom-emotion.service");
var EmojifyPipe = (function () {
    function EmojifyPipe(customEmotionService) {
        this.customEmotionService = customEmotionService;
        this.emotions = this.customEmotionService.GetEmotions();
    }
    EmojifyPipe.prototype.transform = function (value, args) {
        for (var _i = 0, _a = this.emotions; _i < _a.length; _i++) {
            var emotion = _a[_i];
            var re = new RegExp(':' + emotion.imageId + ':', 'ig');
            value = value.replace(re, '<img src="' + emotion.imageUrl + '"' + 'class="emogi-image"' + ' title="' + emotion.title + '">');
        }
        return value;
    };
    EmojifyPipe = __decorate([
        core_1.Pipe({
            name: 'emojify'
        }), 
        __metadata('design:paramtypes', [custom_emotion_service_1.CustomEmotionService])
    ], EmojifyPipe);
    return EmojifyPipe;
}());
exports.EmojifyPipe = EmojifyPipe;
//# sourceMappingURL=emojify.pipe.js.map