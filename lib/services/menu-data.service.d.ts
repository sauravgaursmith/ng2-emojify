import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
export declare class MenuDataService {
    private customData;
    private subject;
    menu: Subject<any>;
    constructor();
    SetCustomData(customData: any): void;
    GetCustomData(): Observable<any>;
}
