import { Injectable } from '@angular/core';
import { createClient } from 'contentful';

/** A Contentful entry with untyped fields, the shape the views read. */
export interface ContentEntry {
  sys: { id: string };
  fields: any;
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient: any = null;

  constructor() {
    const space: string = import.meta.env.NG_APP_SPACE ?? '';
    const accessToken: string = import.meta.env.NG_APP_ACCESS_TOKEN ?? '';

    this.cdaClient = createClient({
      space,
      accessToken
    });

  }

  private getAllEntriesOfType(entry_id: string, query?: object,): Promise<ContentEntry[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: entry_id
    }, query)).then((res: { items: any; }) => res.items);
  }

  getAutobiography(query?: object): Promise<ContentEntry[]> {
    return this.getAllEntriesOfType("autobiography", query);
  }

  getHeaderImages(query?: object): Promise<ContentEntry[]> {
    return this.getAllEntriesOfType("headerImages", query);
  }

  getSummary(query?: object): Promise<ContentEntry[]> {
    return this.getAllEntriesOfType("summary", query);
  }

  getTrip(query?: object): Promise<ContentEntry[]> {
    return this.getAllEntriesOfType("trip", query);
  }
}
