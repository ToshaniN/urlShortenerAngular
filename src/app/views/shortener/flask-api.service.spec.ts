import { TestBed } from '@angular/core/testing';

import { FlaskAPIService } from './flask-api.service';

describe('FlaskAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlaskAPIService = TestBed.get(FlaskAPIService);
    expect(service).toBeTruthy();
  });
});
