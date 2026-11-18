import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RowComponent, ColComponent } from '@coreui/angular';

@Component({
    selector: 'app-disclaimer',
    templateUrl: './disclaimer.component.html',
    styleUrls: ['./disclaimer.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RowComponent, ColComponent]
})
export class DisclaimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
