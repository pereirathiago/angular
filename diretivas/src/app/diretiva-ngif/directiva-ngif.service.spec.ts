import { TestBed } from '@angular/core/testing';

import { DirectivaNgifService } from './directiva-ngif.service';

describe('DirectivaNgifService', () => {
  let service: DirectivaNgifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectivaNgifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
