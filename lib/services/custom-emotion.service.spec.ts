/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomEmotionService } from './custom-emotion.service';

describe('Service: CustomEmotion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomEmotionService]
    });
  });

  it('should ...', inject([CustomEmotionService], (service: CustomEmotionService) => {
    expect(service).toBeTruthy();
  }));
});
