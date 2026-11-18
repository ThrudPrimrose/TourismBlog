import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslatorService } from '../services/translator.service';
import { HeaderComponent, HeaderBrandComponent, HeaderNavComponent, NavItemComponent, NavLinkDirective, ThemeDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, FooterComponent } from '@coreui/angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [HeaderComponent, HeaderBrandComponent, RouterLink, HeaderNavComponent, NavItemComponent, NavLinkDirective, ThemeDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, RouterOutlet, FooterComponent, TranslatePipe]
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
