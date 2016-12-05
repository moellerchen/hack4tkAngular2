/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TermineService } from './termine.service';

describe('Service: Termine', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermineService]
    });
  });

  it('should ...', inject([TermineService], (service: TermineService) => {
    expect(service).toBeTruthy();
  }));
});
