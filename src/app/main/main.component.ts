import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Positions } from '@coreui/angular';
import { TranslatorService } from '../services/translator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentLanguage: string = "EN";
  position_option: string = "sticky";

  constructor(private translator: TranslatorService, public router: Router) { }

  ngOnInit(): void {
    if (this.router.url === "/trips") {
      this.position_option = "fixed";
    } else {
      this.position_option = "sticky";
    }

    this.router.events.subscribe(val => {
      if (this.router.url === "/trips") {
        this.position_option = "fixed";
      } else {
        this.position_option = "sticky";
      }
    });
  }

  setLanguage(language: string) {
    this.currentLanguage = language;
    this.translator.setLanguage(this.currentLanguage);
  }

  returnToRoot() {
    this.router.navigateByUrl("");
  }

}
