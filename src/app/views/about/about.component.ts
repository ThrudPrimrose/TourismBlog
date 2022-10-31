import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private contentful : ContentfulService) { }

  name: string = "";
  surname: string = "";
  autobiography: string = "";
  photo_url: string = "";

  set_local_variables(data: any){
    this.name = data["name"];
    this.surname = data["surname"];
    this.autobiography = data["autobiography"];
    this.photo_url = data["photo"]["fields"]["file"]["url"];
  }

  ngOnInit(): void {
    let autobiography = sessionStorage.getItem("autobiography");
    console.log(autobiography);
    
    if(autobiography == null || autobiography == ""){
      this.contentful.getAutobiography().then(data => {
        console.log(data);
        if (data.length == 0)
        {
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
  }
  
}
