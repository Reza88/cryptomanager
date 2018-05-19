import { TestBed, inject } from '@angular/core/testing';

import { CryptoApiService } from './crypto-api.service';

describe('CryptoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoApiService]
    });
  });

  it('should be created', inject([CryptoApiService], (service: CryptoApiService) => {
    expect(service).toBeTruthy();
  }));
});
