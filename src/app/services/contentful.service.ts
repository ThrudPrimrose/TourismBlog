import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: environment.contentfulConfig.space,
    accessToken: environment.contentfulConfig.accessToken
  });

  constructor() { }

  private getAllEntriesOfType(entry_id: string, query?: object,): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: entry_id
    }, query)).then(res => res.items);
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
