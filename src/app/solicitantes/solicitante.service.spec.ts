import { TestBed, inject } from '@angular/core/testing';

import { SolicitanteService } from './solicitante.service';

describe('SolicitanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitanteService]
    });
  });

  it('should be created', inject([SolicitanteService], (service: SolicitanteService) => {
    expect(service).toBeTruthy();
  }));
});
