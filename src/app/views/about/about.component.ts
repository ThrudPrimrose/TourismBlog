import { Component, OnInit } from '@angular/core';
import { AuxService } from 'src/app/services/aux.service';
import { ContentfulService } from 'src/app/services/contentful.service';
import { TranslatorService } from 'src/app/services/translator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private contentful: ContentfulService, private translate: TranslatorService, private aux: AuxService) { }

  nino_name: string = "";
  nino_surname: string = "";
  nino_autobiographies: Record<string, string> = { "EN": "", "RU": "", "TR": "" };
  nino_photo_url: string = "";
  nino_autobiography: string = "";

  set_local_variables_for_nino(data: any) {
    this.nino_name = data["name"];
    this.nino_surname = data["surname"];
    this.nino_autobiographies = this.aux.create_localized_dict(data, "autobiography");
    this.nino_photo_url = data["photo"]["fields"]["file"]["url"];
    this.nino_autobiography = this.nino_autobiographies["EN"];
  }

  murat_name: string = "";
  murat_surname: string = "";
  murat_autobiographies: Record<string, string> = { "EN": "", "RU": "", "TR": "" };
  murat_photo_url: string = "";
  murat_autobiography: string = "";

  set_local_variables_for_murat(data: any) {
    this.murat_name = data["name"];
    this.murat_surname = data["surname"];
    this.murat_autobiographies = this.aux.create_localized_dict(data, "autobiography");
    this.murat_photo_url = data["photo"]["fields"]["file"]["url"];
    this.murat_autobiography = this.murat_autobiographies["EN"];
  }

  ngOnInit(): void {
    let autobiography_nino = sessionStorage.getItem("autobiography_nino");
    let autobiography_murat = sessionStorage.getItem("autobiography_murat");

    if (autobiography_nino == null || autobiography_nino === ""
    || autobiography_murat == null || autobiography_murat === "") {
      this.contentful.getAutobiography().then(data => {
        if (data.length === 0) {
          //This should never happen
          return;
        }
        for (let autobiography of data){
          if (autobiography.fields.name === "Murat"){
            this.set_local_variables_for_murat(autobiography["fields"]);
            const data_string_murat: string = JSON.stringify(autobiography["fields"]);
            sessionStorage.setItem("murat_autobiography", data_string_murat);
          } else if (autobiography.fields.name === "Nino") {
            this.set_local_variables_for_nino(autobiography["fields"]);
            const data_string_nino: string = JSON.stringify(autobiography["fields"]);
            sessionStorage.setItem("nino_autobiography", data_string_nino);
          } else{
            console.error("Unknown Biography, Needs update");
          }
        }

      });
    } else {
      this.set_local_variables_for_murat(JSON.parse(autobiography_murat));
      this.set_local_variables_for_nino(JSON.parse(autobiography_nino));
    }

    this.translate.translator().onLangChange.subscribe((event: any) => {
      this.nino_autobiography = this.nino_autobiographies[this.translate.getLangSuffix(event.lang)];
      this.murat_autobiography = this.murat_autobiographies[this.translate.getLangSuffix(event.lang)];
    });
  }

}
