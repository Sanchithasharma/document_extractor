import { TestBed } from '@angular/core/testing';

import { ObjForFormService } from './obj-for-form.service';

describe('ObjForFormService', () => {
  let service: ObjForFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjForFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
