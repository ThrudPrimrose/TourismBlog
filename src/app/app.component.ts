import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IconSetService } from '@coreui/icons-angular';
import { cilHome } from '@coreui/icons';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'tourism-blog';

  constructor(public iconSet: IconSetService, private meta: Meta) {
    iconSet.icons = {
      cilHome
    };
    this.meta.addTags([
        { name: 'description',
          content: 'Nino & Murat Tours in lovely Georgia. Offering a variety of tours for every need ans desire. Visit the motherland of wine with us!' },
        { name: 'keywords',
        content: 'georgia, travel, tours, tourism, wine, degustation' }
      ]);
  }
}
