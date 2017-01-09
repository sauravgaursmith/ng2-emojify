import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export  class MenuDataService {
  private customData: any;
  private subject: Subject<any> = new Subject<any>();
  public menu: Subject<any> = new Subject();

  constructor() {
  }

  SetCustomData(customData: any): void {
    this.customData = customData;
    this.subject.next(this.customData);
  }

  GetCustomData(): Observable<any> {
    return this.subject.asObservable();
  }
}
