import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2EmojifyComponent} from './ng2-emojify.component';
import {EmojifyPipe} from './emojify.pipe';
import {MenuDataService} from "./services/menu-data.service";
import {EmotionService} from "./services/emotion.service";
import {CustomEmotionService} from "./services/custom-emotion.service";
import { EmotionMenuDirective } from './emotion-menu.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Ng2EmojifyComponent,
    EmojifyPipe,
    EmotionMenuDirective
  ],
  providers: [
    MenuDataService,
    EmotionService,
    CustomEmotionService
  ],
  exports:[
    EmotionMenuDirective,
    EmojifyPipe,
    Ng2EmojifyComponent
  ]
})
export class Ng2EmojifyModule {
}
