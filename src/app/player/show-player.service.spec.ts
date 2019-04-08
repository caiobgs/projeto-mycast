import { TestBed } from '@angular/core/testing';

import { ShowPlayerService } from './show-player.service';

describe('ShowPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowPlayerService = TestBed.get(ShowPlayerService);
    expect(service).toBeTruthy();
  });
});
