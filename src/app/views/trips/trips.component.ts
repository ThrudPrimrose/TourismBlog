import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuxService } from 'src/app/services/aux.service';
import { ContentfulService } from 'src/app/services/contentful.service';
import { TranslatorService } from 'src/app/services/translator.service';


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
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  constructor(private contentful: ContentfulService, private translate: TranslatorService, private aux: AuxService,
    private router: Router) { }

  trips: Array<Trip> = Array();
  visible: Array<boolean> = Array();

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
    console.log(trip.photo_url);
  }

  getLangSuffixCapital(): string {
    let v = this.translate.getLangSuffix(this.translate.translator().currentLang);
    return v;
  }

  getLangSuffix(): string {
    let v = this.translate.getLangSuffix(this.translate.translator().currentLang);
    if (v == "EN") {
      return "";
    }
    let v2 = v[0].toUpperCase() + v[1].toLowerCase();
    return v2;
  }

  ngOnInit(): void {
    let stored_trips = sessionStorage.getItem("trip");
    // console.log(trip);

    if (stored_trips == null || stored_trips == "") {
      this.contentful.getTrip().then(data => {
        console.log(data);
        if (data.length == 0) {
          //This should never happen
          return;
        }

        for (let item of data) {
          this.set_local_variables(item["fields"]);
        }

        const data_string: string = JSON.stringify(data);
        sessionStorage.setItem("trip", data_string);

        console.log(this.trips);
      });
    } else {
      let data = JSON.parse(stored_trips);
      for (let item of data) {
        this.set_local_variables(item["fields"]);
      }

      console.log(this.trips);
    }
  }

  goToTripForm() {
    this.router.navigate(['trip-form']);
  }
}
