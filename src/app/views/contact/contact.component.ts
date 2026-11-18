import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RowComponent, ColComponent, TextColorDirective, TextBgColorDirective, CardComponent, CardBodyComponent, CardTitleDirective, CardSubtitleDirective } from '@coreui/angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RowComponent, ColComponent, TextColorDirective, TextBgColorDirective, CardComponent, CardBodyComponent, CardTitleDirective, CardSubtitleDirective, TranslatePipe]
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
