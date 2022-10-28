import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../services/translator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentLanguage: string = "EN";

  constructor(private translator: TranslatorService) { }

  ngOnInit(): void {
  }

  setLanguage(language: string, ){
    this.currentLanguage = language;
    this.translator.setLanguage(this.currentLanguage);
  }



}
