import {Component, OnInit, Renderer} from '@angular/core';
import {EmotionService} from "./services/emotion.service";
import {MenuDataService} from "./services/menu-data.service";
import {CustomEmotionService} from "./services/custom-emotion.service";

@Component({
  selector: 'emoji-menu',
  templateUrl: './ng2-emojify.component.html',
  styleUrls: ['./ng2-emojify.component.css']
})
export class Ng2EmojifyComponent implements OnInit {

  targetId: string;
  private mouseLocation: {left: number, top: number} = {left: 0, top: 0};
  images: any = [];


  /* ***********************************************
   * Custom css variables
   * *********************************************** */
  customEmotionMenuCss: any;
  customEmotionContainerCss: any;
  customEmotionImageCss: any;

  /* ***********************************************
   * Default css declarations
   * *********************************************** */
  defaultDisplayCss: any = {
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

  defaultEmotionContainerCss: any = {
    float: 'left',
    width: 70 + 'px',
    height: 80 + 'px',
    margin: '15px',
    'background-color': 'green'
  };

  defaultEmotionImageCss: any = {
    width: '100%',
    height: '100%',
    margin: '0px'
  };

  constructor(private menuDataService: MenuDataService,
              private emotionService: EmotionService,
              private customEmotionService: CustomEmotionService,
              private renderer: Renderer) {
    /* ***********************************************
     * Setting image content to display in menu
     * *********************************************** */

    this.images = this.customEmotionService.GetEmotions();
  }


  ngOnInit() {


    /* ***************************************************
     * Sets Custom css and target Id
     * *************************************************** */
    this.menuDataService.GetCustomData().subscribe((customData: any) => {
      this.customEmotionMenuCss = customData.customEmotionMenuCss;
      this.customEmotionContainerCss = customData.customEmotionContainerCss;
      this.customEmotionImageCss = customData.customEmotionImageCss;
      this.targetId = customData.directiveHostElementId;
    });

    this.menuDataService.menu.subscribe(mouseLocation => {
      this.mouseLocation = mouseLocation.mouseLocation;
    });

    this.renderer.listenGlobal('document', 'click', (event) => {
      if (
        !(event.target.id === this.targetId)
        && !(event.target.id === 'app-emogi-menu')
        && !(event.target.className === 'app-emogi-image')) {
        document.getElementById('app-emogi-menu').style.display = 'none';
      }
    });
  }

  /* **************************************************************************************
   * Methods definitions
   * ************************************************************************************** */

  setImageInformation(imageInfo: any): void {
    this.emotionService.SetEmotionInformation(imageInfo);
  }


  get emotionMenuCss() {
    if (this.customEmotionMenuCss) {
      this.customEmotionMenuCss.left = this.mouseLocation.left + 'px';
      this.customEmotionMenuCss.top = this.mouseLocation.top + 'px';
      this.customEmotionMenuCss.display = 'none';
    } else {
      this.defaultDisplayCss.left = this.mouseLocation.left + 'px';
      this.defaultDisplayCss.top = this.mouseLocation.top + 'px';
    }
    return (this.customEmotionMenuCss || this.defaultDisplayCss);
  }

  get emotionContainerCss() {
    return (this.customEmotionContainerCss || this.defaultEmotionContainerCss);
  }

  get emotionImageCss() {
    return (this.customEmotionImageCss || this.defaultEmotionImageCss);
  }

}
