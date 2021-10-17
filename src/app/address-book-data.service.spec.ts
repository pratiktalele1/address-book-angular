import { TestBed } from '@angular/core/testing';

import { AddressBookDataService } from './address-book-data.service';

describe('AddressBookDataService', () => {
  let service: AddressBookDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressBookDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
