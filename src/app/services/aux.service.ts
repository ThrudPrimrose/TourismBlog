import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuxService {

  constructor() { }

  create_localized_dict(fields: any, fieldname: string): Record<string, string> {
    var localized: Record<string, string> = { "EN": "", "RU": "", "TR": "" };
    localized["EN"] = fields[fieldname]
    localized["RU"] = fields[fieldname + "Ru"]
    localized["TR"] = fields[fieldname + "Tr"]
    return localized;
  }
}
