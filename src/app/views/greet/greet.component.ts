import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { TranslatorService } from 'src/app/services/translator.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {

  constructor(private contentful: ContentfulService, private translate: TranslatorService) { }

  images: string[] = new Array();
  summary: any[] = new Array();

  ngOnInit(): void {
    this.contentful.getHeaderImages().then(items => {
      console.log(items);
      for (const item of items) {
        for (const image of item["fields"]["images"]) {
          this.images.push(image["fields"]["file"]["url"]);
        }
      }
    });

    this.contentful.getSummary().then(items => {
      // There should only one summary exist at a time
      for (const summary_item of items[0]['fields']['summaryItems']) {
        this.summary.push(summary_item['fields']);
      }
      console.log(this.summary);
    });
  }
}
