import { OnInit, Renderer } from '@angular/core';
import { EmotionService } from "./services/emotion.service";
import { MenuDataService } from "./services/menu-data.service";
import { CustomEmotionService } from "./services/custom-emotion.service";
export declare class Ng2EmojifyComponent implements OnInit {
    private menuDataService;
    private emotionService;
    private customEmotionService;
    private renderer;
    targetId: string;
    private mouseLocation;
    images: any;
    customEmotionMenuCss: any;
    customEmotionContainerCss: any;
    customEmotionImageCss: any;
    defaultDisplayCss: any;
    defaultEmotionContainerCss: any;
    defaultEmotionImageCss: any;
    constructor(menuDataService: MenuDataService, emotionService: EmotionService, customEmotionService: CustomEmotionService, renderer: Renderer);
    ngOnInit(): void;
    setImageInformation(imageInfo: any): void;
    readonly emotionMenuCss: any;
    readonly emotionContainerCss: any;
    readonly emotionImageCss: any;
}
