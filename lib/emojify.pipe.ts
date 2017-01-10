import {Pipe, PipeTransform} from '@angular/core';
import {CustomEmotionService} from "./services/custom-emotion.service";

@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {

  emotions: any;

  constructor(private customEmotionService: CustomEmotionService) {
    this.emotions = this.customEmotionService.GetEmotions();
  }

  transform(value: any, args?: any): any {
    for (let emotion of this.emotions) {
      let re = new RegExp(':' + emotion.emojiId + ':', 'ig');
      value = value.replace(re, '<img src="' + emotion.emojiUrl + '"' + 'class="emogi-image"' + ' title="' + emotion.title + '">');
    }
    return value;
  }
}
