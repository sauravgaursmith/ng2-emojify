import { PipeTransform } from '@angular/core';
import { CustomEmotionService } from "./services/custom-emotion.service";
export declare class EmojifyPipe implements PipeTransform {
    private customEmotionService;
    emotions: any;
    constructor(customEmotionService: CustomEmotionService);
    transform(value: any, args?: any): any;
}
