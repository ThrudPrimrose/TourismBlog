import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'ru', 'tr']);
    translate.use('en');
  }

  setLanguage(language: string): void {
    this.translate.use(language.toLowerCase());
  }
}
