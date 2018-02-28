import { TestBed, inject } from '@angular/core/testing';

import { BeneficioService } from './beneficio.service';

describe('BeneficioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeneficioService]
    });
  });

  it('should be created', inject([BeneficioService], (service: BeneficioService) => {
    expect(service).toBeTruthy();
  }));
});
