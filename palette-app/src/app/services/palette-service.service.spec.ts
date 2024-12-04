import { TestBed } from '@angular/core/testing';

import { PaletteServiceService } from './palette-service.service';

describe('PaletteServiceService', () => {
  let service: PaletteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaletteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
