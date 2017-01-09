/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmotionService } from './emotion.service';

describe('Service: Emotion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmotionService]
    });
  });

  it('should ...', inject([EmotionService], (service: EmotionService) => {
    expect(service).toBeTruthy();
  }));
});
