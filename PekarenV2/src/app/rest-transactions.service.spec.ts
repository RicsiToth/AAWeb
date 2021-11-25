import { TestBed } from '@angular/core/testing';

import { RestTransactionsService } from './rest-transactions.service';

describe('RestTransactionsService', () => {
  let service: RestTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
