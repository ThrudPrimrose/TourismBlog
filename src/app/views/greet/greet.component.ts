import { Component, ElementRef, HostListener, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { TranslatorService } from '../../services/translator.service';
import { ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent, RowComponent, TextColorDirective, TextBgColorDirective, CardComponent, ColComponent, CardBodyComponent, CardTitleDirective } from '@coreui/angular';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-greet',
    templateUrl: './greet.component.html',
    styleUrls: ['./greet.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent, RouterLink, RowComponent, TextColorDirective, TextBgColorDirective, CardComponent, ColComponent, CardBodyComponent, CardTitleDirective]
})
export class GreetComponent implements OnInit {

  constructor(private elementRef: ElementRef, private contentful: ContentfulService, private translate: TranslatorService) { }

  images: string[] = [];
  summary: any[] = [];
  body_identifier: string = "body";

  ngOnInit(): void {
    this.contentful.getHeaderImages().then(items => {
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
    if (!this.summary[i]){
      return ""
    }

    if (this.summary[i]['image'] && this.summary[i]['image']['fields']){
      return this.summary[i]['image']['fields']['file']['url'];
    }
    return "";
  }

  getLangSuffixCapital(): string {
    let v = this.translate.getLangSuffix(this.translate.translator().getCurrentLang());
    return v;
  }

  getName(name: string): string {
    return this.getLangSuffixCapital() === "EN"? name :
      name
      + this.getLangSuffixCapital()[0].toUpperCase()
      + this.getLangSuffixCapital()[1].toLowerCase();
  }

  getBodyName(){
    return this.getName('body');
  }

}
