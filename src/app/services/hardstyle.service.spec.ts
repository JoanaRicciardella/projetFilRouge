import { TestBed, inject } from '@angular/core/testing';

import { HardstyleService } from './hardstyle.service';

describe('HardstyleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HardstyleService]
    });
  });

  it('should be created', inject([HardstyleService], (service: HardstyleService) => {
    expect(service).toBeTruthy();
  }));
});
