import { Component } from '@angular/core';

import { IconSetService } from '@coreui/icons-angular';
import { cilHome } from '@coreui/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tourism-blog';

  constructor(public iconSet: IconSetService) {
    iconSet.icons = {
      cilHome
    };
  }
}
