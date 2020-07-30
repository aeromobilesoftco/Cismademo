import { TestBed } from '@angular/core/testing';

import { ApiCismaService } from './api-cisma.service';

describe('ApiCismaService', () => {
  let service: ApiCismaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCismaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
