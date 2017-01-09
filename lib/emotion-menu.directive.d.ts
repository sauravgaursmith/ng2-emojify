import { ElementRef } from '@angular/core';
import { MenuDataService } from "./services/menu-data.service";
export declare class EmotionMenuDirective {
    private menuDataService;
    private _elementRef;
    emotionMenu: any;
    constructor(menuDataService: MenuDataService, _elementRef: ElementRef);
    ngAfterContentInit(): void;
    onMouseClick(event: any): void;
}
