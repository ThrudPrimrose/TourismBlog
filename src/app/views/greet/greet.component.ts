import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { TranslatorService } from 'src/app/services/translator.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {

  constructor(private elementRef: ElementRef, private contentful: ContentfulService, private translate: TranslatorService) { }

  images: string[] = [];
  summary: any[] = [];

  ngOnInit(): void {
    this.contentful.getHeaderImages().then(items => {
      for (const item of items) {
        for (const image of item["fields"]["images"]) {
          console.log()
          this.images.push(image["fields"]["file"]["url"]);
        }
      }
    });

    this.contentful.getSummary().then(items => {
      // There should only one summary exist at a time
      for (const summary_item of items[0]['fields']['summaryItems']) {
        this.summary.push(summary_item['fields']);
      }
    });

    this.innerWidth = window.innerWidth;
  }

  public innerWidth: number = 0;
  public class_height: string = "470px";


  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.innerWidth = window.innerWidth;
  }

  getImage(i: number){
    if (this.summary[i]['image'] && this.summary[i]['image']['fields']){
      return this.summary[i]['image']['fields']['file']['url'];
    }
    return "";
  }
}
