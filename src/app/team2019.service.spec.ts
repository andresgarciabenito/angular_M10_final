import { TestBed } from '@angular/core/testing';

import { Team2019Service } from './team2019.service';

describe('Team2019Service', () => {
  let service: Team2019Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Team2019Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
