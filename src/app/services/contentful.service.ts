import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient: any = null;

  constructor() {
    console.log(process.env)

    let s1:string = process.env["NG_APP_SPACE"] ?? ""
    let s2:string = process.env['NG_APP_ACCESS_TOKEN'] ?? ""

    this.cdaClient = createClient({
      space: s1,
      accessToken: s2
    });

  }

  private getAllEntriesOfType(entry_id: string, query?: object,): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: entry_id
    }, query)).then((res: { items: any; }) => res.items);
  }

  getAutobiography(query?: object): Promise<Entry<any>[]> {
    return this.getAllEntriesOfType("autobiography", query);
  }

  getHeaderImages(query?: object): Promise<Entry<any>[]> {
    return this.getAllEntriesOfType("headerImages", query);
  }

  getSummary(query?: object): Promise<Entry<any>[]> {
    return this.getAllEntriesOfType("summary", query);
  }

  getTrip(query?: object): Promise<Entry<any>[]> {
    return this.getAllEntriesOfType("trip", query);
  }
}
