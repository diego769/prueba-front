import { TestBed } from '@angular/core/testing';

import { SostenedorRemuneracionService } from './sostenedor-remuneracion.service';

describe('SostenedorRemuneracionService', () => {
  let service: SostenedorRemuneracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SostenedorRemuneracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
