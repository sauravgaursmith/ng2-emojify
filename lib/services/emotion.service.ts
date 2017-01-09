import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmotionService {
  private emotionInformation: any;
  private subject: Subject<string> = new Subject<string>();

  constructor() {
  }

  SetEmotionInformation(emotionInformation: any): void {
    this.emotionInformation = ':' + emotionInformation.imageId + ':';
    this.subject.next(this.emotionInformation);
  }

  CaptureEmojiClick(): Observable<any> {
    return this.subject.asObservable();
  }

}
