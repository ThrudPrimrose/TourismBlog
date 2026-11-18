import { provideTranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';

import { TranslatorService } from './translator.service';

describe('TranslatorService', () => {
  let service: TranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideTranslateService()] });
    service = TestBed.inject(TranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
