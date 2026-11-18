import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuxService } from '../../services/aux.service';
import { ContentfulService } from '../../services/contentful.service';
import { TranslatorService } from '../../services/translator.service';
import { ContainerComponent, RowComponent, TextColorDirective, TextBgColorDirective, CardComponent, CardBodyComponent, ColComponent, CardTitleDirective, CardSubtitleDirective, CardTextDirective, CollapseDirective, ButtonDirective } from '@coreui/angular';
import { TranslatePipe } from '@ngx-translate/core';


interface Trip {
  title: Record<string, string>;
  summary: Record<string, string>;
  duration: number;
  price: number;
  photo_url: string;
  day_items: any;
}

@Component({
    selector: 'app-trips',
    templateUrl: './trips.component.html',
    styleUrls: ['./trips.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ContainerComponent, RowComponent, TextColorDirective, TextBgColorDirective, CardComponent, CardBodyComponent, ColComponent, CardTitleDirective, CardSubtitleDirective, CardTextDirective, CollapseDirective, ButtonDirective, TranslatePipe]
})
export class TripsComponent implements OnInit {

  constructor(private contentful: ContentfulService, private translate: TranslatorService, private aux: AuxService,
    private router: Router) { }

  trips: Array<Trip> = [];
  visible: Array<boolean> = [];

  set_local_variables(data: any) {
    var trip: Trip = {
      title: this.aux.create_localized_dict(data, "tripTitle"),
      summary: this.aux.create_localized_dict(data, "tripSummary"),
      duration: data["tripDuration"],
      price: data["price"],
      photo_url: data["titlePhoto"] ? data["titlePhoto"]["fields"]["file"]["url"] : "NONE",
      day_items: data["days"]
    };
    this.trips.push(trip);
    this.visible.push(false);
  }

  getLangSuffixCapital(): string {
    let v = this.translate.getLangSuffix(this.translate.translator().getCurrentLang());
    return v;
  }

  getLangSuffix(): string {
    let v = this.translate.getLangSuffix(this.translate.translator().getCurrentLang());
    if (v === "EN") {
      return "";
    }
    let v2 = v[0].toUpperCase() + v[1].toLowerCase();
    return v2;
  }

  change(trip_item: any, i : number){
    if (trip_item.price > 0) { this.visible[i] = !this.visible[i] }
  }

  ngOnInit(): void {
    let stored_trips = sessionStorage.getItem("trip");

    if (stored_trips == null || stored_trips === "") {
      this.contentful.getTrip().then(data => {
        if (data.length === 0) {
          //This should never happen
          return;
        }

        for (let item of data) {
          this.set_local_variables(item["fields"]);
        }

        const data_string: string = JSON.stringify(data);
        sessionStorage.setItem("trip", data_string);
      });
    } else {
      let data = JSON.parse(stored_trips);
      for (let item of data) {
        this.set_local_variables(item["fields"]);
      }
    }
  }

  goToContact() {
    this.router.navigate(['contact']);
  }
}
