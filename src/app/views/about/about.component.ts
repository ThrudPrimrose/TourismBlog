import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { TranslatorService } from 'src/app/services/translator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private contentful: ContentfulService, private translate: TranslatorService) { }

  name: string = "";
  surname: string = "";
  autobiographies: Record<string, string> = { "EN": "", "RU": "", "TR": "" };
  photo_url: string = "";
  autobiography: string = "";

  set_local_variables(data: any) {
    this.name = data["name"];
    this.surname = data["surname"];
    this.autobiographies["EN"] = data["autobiography"];
    this.autobiographies["RU"] = data["autobiographyRu"];
    this.autobiographies["TR"] = data["autobiographyTr"];
    this.photo_url = data["photo"]["fields"]["file"]["url"];
    this.autobiography = this.autobiographies["EN"];
  }

  ngOnInit(): void {
    let autobiography = sessionStorage.getItem("autobiography");
    console.log(autobiography);

    if (autobiography == null || autobiography == "") {
      this.contentful.getAutobiography().then(data => {
        console.log(data);
        if (data.length == 0) {
          //This should never happen
          return;
        }
        this.set_local_variables(data[0]["fields"]);
        const data_string: string = JSON.stringify(data[0]["fields"]);
        sessionStorage.setItem("autobiography", data_string);
      });
    } else {
      console.log(JSON.parse(autobiography))
      this.set_local_variables(JSON.parse(autobiography));
    }

    this.translate.translator().onLangChange.subscribe((event: any) => {
      console.log(event.lang);
      this.autobiography = this.autobiographies[this.translate.getLangSuffix(event.lang)];
    });
  }

}
