/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WinnerService } from './winner.service';

describe('Service: WinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WinnerService],
    });
  });

  it('should ...', inject([WinnerService], (service: WinnerService) => {
    expect(service).toBeTruthy();
  }));
});
