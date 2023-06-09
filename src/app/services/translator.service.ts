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

  translator(): TranslateService {
    return this.translate;
  }

  getLangSuffix(lang: string): string {
    if (lang.toUpperCase() === "RU") {
      return "RU";
    } else if (lang.toUpperCase() === "TR") {
      return "TR";
    } else {
      return "EN";
    }
  }
}
