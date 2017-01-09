import { Observable } from 'rxjs/Observable';
export declare class EmotionService {
    private emotionInformation;
    private subject;
    constructor();
    SetEmotionInformation(emotionInformation: any): void;
    CaptureEmojiClick(): Observable<any>;
}
